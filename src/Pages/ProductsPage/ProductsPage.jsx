import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";
import Loader from "../../Components/Loader/Loader";
import useGetAll from "../../Hooks/AdminPanel/Product/useGetAll";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";
import { getAllSearchParam, getSearchParam } from "../../Utils/Funcs/utils";
function ProductsPage() {
  const orderType = getSearchParam("order");
  const [status, setStatus] = useState(orderType || "default");
  const [filtredProduct, setFiltredProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [colorBox, setColorBox] = useState([
    {
      id: 1,
      name: "زرد",
      color: "bg-yellow-400",
      checked: false,
    },
    {
      id: 2,
      name: "آبی",
      color: "bg-blue-600",
      checked: false,
    },
    {
      id: 3,
      name: "سبز",
      color: "bg-green-400",
      checked: false,
    },
    {
      id: 4,
      name: "مشکی",
      color: "bg-black",
      checked: false,
    },
    {
      id: 5,
      name: "صورتی",
      color: "bg-pink-600",
      checked: false,
    },
  ]);
  const [isShowFilterButton, setIsShowFilterButton] = useState(false);

  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);
  const queryStrings = getAllSearchParam("category");
  const startPrice = getSearchParam("startPrice");
  const endPrice = getSearchParam("endPrice");
  const [value, setValue] = useState([
    startPrice ? startPrice : 50000,
    endPrice ? endPrice : 70000000,
  ]);

  const { data: products, isLoading } = useGetAll(+page);
  const { data: productsWithOutPagination } = useGetAllPro();
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pageNum || 1);
    window.scroll(0, 0);
  }, [page]);

  useEffect(() => {
    setAllProducts(products?.products);
  }, [products]);

  useEffect(() => {
    switch (status) {
      case "default": {
        const allPro = products?.products.slice();
        setAllProducts(allPro);
        return;
      }
      case "popular": {
        const allPro = products?.products.slice();
        const popularProduct = allPro?.sort((a, b) => b.score - a.score);
        setAllProducts(popularProduct);
        return;
      }
      case "chepeast": {
        const allPro = products?.products.slice();
        const chepeastProduct = allPro?.sort((a, b) => a.price - b.price);
        setAllProducts(chepeastProduct);
        return;
      }
      case "expensivest": {
        const allPro = products?.products.slice();
        const expensivestProduct = allPro?.sort((a, b) => b.price - a.price);
        setAllProducts(expensivestProduct);
        return;
      }
      case "newest": {
        const allPro = products?.products.slice();
        setAllProducts(allPro);
        return;
      }
      case "latest": {
        const allPro = products?.products.slice();
        setAllProducts(allPro?.reverse());
        return;
      }
      default: {
        const allPro = products?.products.slice();
        setAllProducts(allPro);
        return;
      }
    }
  }, [status, products]);

  useEffect(() => {
    const categories = getAllSearchParam("category");
    const startPrice = getSearchParam("startPrice");
    const endPrice = getSearchParam("endPrice");

    if (categories.length) {
      getFiltredProduct(categories, startPrice, endPrice);
    }
  }, [productsWithOutPagination]);

  useEffect(() => {
    if (value[0] !== 50000 && value[1] !== 25000000) {
      setSearchParam(
        (prev) => {
          prev.set("startPrice", value[0]);
          prev.set("endPrice", value[1]);
          return prev;
        },
        { replace: true }
      );
    }
  }, [value]);

  const colorBoxChangeHandler = (id) => {
    const changeColorBox = colorBox.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setColorBox(changeColorBox);
  };

  const handleFilterProducts = () => {
    const categories = getAllSearchParam("category");
    const startPrice = getSearchParam("startPrice");
    const endPrice = getSearchParam("endPrice");

    if (startPrice && endPrice && categories.length) {
      getFiltredProduct(categories, startPrice, endPrice);
    }
  };

  const handleChangeBox = async (category, e) => {
    if (e.target.checked) {
      searchParam.append("category", category);
      setSearchParam(searchParam);
    } else {
      searchParam.delete("category", category);
      setSearchParam(searchParam);
    }
  };

  async function getFiltredProduct(categories, startPrice, endPrice) {
    const filtredProducts = productsWithOutPagination?.filter((product) => {
      return (
        [...categories].includes(product.category.title) &&
        product.price >= +startPrice &&
        product.price <= +endPrice
      );
    });

    setIsShowFilterButton(true);
    setFiltredProduct(filtredProducts);
    console.log(filtredProducts);
    return filtredProducts;
  }

  const handlerSortFilter = (status) => {
    setStatus(status);
    setSearchParam(
      (prev) => {
        prev.set("order", status);
        return prev;
      },
      { replace: true }
    );
  };

  const searchHandler = (event) => {
    if (event.target.value) {
      setIsShowFilterButton(false);
      setValue([50000, 70000000]);
      navigate("/products");
      const searchedProducts = productsWithOutPagination?.filter((product) =>
        product.title.includes(event.target.value.trim())
      );
      setFiltredProduct(searchedProducts);
    } else {
      setFiltredProduct([]);
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "محصولات", to: "/" },
          ]}
        />
        <div className="bg-blue-600 mt-5  py-[30px] px-4 rounded-md shadow">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 md:mt-0">
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-1.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-2.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-3.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-4.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-5.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
              <div className="bg-white rounded-md flex-center">
                <img
                  src="/images/category/brand1-6.png"
                  alt="b1"
                  className="w-[173px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* start main section */}

        <div className="flex gap-x-5 mt-8">
          <div
            className={`bg-white shadow rounded-md w-[450px] ${
              filtredProduct?.length && isShowFilterButton
                ? "h-[800.7px]"
                : "h-[720.7px]"
            } px-4 py-3 sticky top-0`}
          >
            <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2">
              جستجو
            </h3>
            <div className="flex items-center border border-gray-200  bg-gray-100 py-[5px] px-[5px] text-base rounded-full justify-between my-4">
              <input
                type="text"
                className="border-none outline-none w-full px-[px] bg-gray-100"
                placeholder="جستجو محصولات"
                onChange={(event) => searchHandler(event)}
              />
              <button className="bg-blue-600 text-white p-2 flex items-center justify-center rounded-full shadow-blue">
                <svg className="w-6 h-6">
                  <use href="#magni-glass"></use>
                </svg>
              </button>
            </div>
            <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2">
              دسته بندی
            </h3>
            <div className="mt-2.5 space-y-3">
              <div class="mt-2.5 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      class="text-lg"
                      value="موبایل"
                      onChange={(e) => handleChangeBox("موبایل", e)}
                      checked={queryStrings.includes("موبایل") ? true : false}
                    />{" "}
                    <span class="font-DanaMedium mt-1">موبایل</span>
                    <svg class="w-5 h-5">
                      <use href="#mobile"></use>
                    </svg>
                  </div>
                  <div>(27)</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      class="text-lg"
                      value="ایرپاد"
                      onChange={(e) => handleChangeBox("ایرپاد", e)}
                      checked={queryStrings.includes("ایرپاد") ? true : false}
                    />{" "}
                    <span class="font-DanaMedium mt-1">ایرپاد</span>
                    <svg class="w-5 h-5">
                      <use href="#music"></use>
                    </svg>
                  </div>
                  <div>(27)</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      class="text-lg"
                      value="تبلت"
                      onChange={(e) => handleChangeBox("تبلت", e)}
                      checked={queryStrings.includes("تبلت") ? true : false}
                    />{" "}
                    <span class="font-DanaMedium mt-1">تبلت</span>
                    <svg class="w-5 h-5">
                      <use href="#mobile"></use>
                    </svg>
                  </div>
                  <div>(27)</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      class="text-lg"
                      value="لپ تاپ"
                      onChange={(e) => handleChangeBox("لپ تاپ", e)}
                      checked={queryStrings.includes("لپ تاپ") ? true : false}
                    />{" "}
                    <span class="font-DanaMedium mt-1">لپ تاپ</span>
                    <svg class="w-5 h-5">
                      <use href="#laptop"></use>
                    </svg>
                  </div>
                  <div>(27)</div>
                </div>
              </div>
            </div>
            <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2 mt-6">
              قیمت
            </h3>
            <div className="my-4">
              <RangeSlider
                min={50000}
                max={70000000}
                value={value}
                onInput={setValue}
              />
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div className="border py-1.5 bg-gray-100 rounded-md border-gray-400 flex items-center justify-between gap-x-7 w-[140px]  p-3">
                <span>از</span>
                <div className=" outline-none w-full text-left bg-gray-100">
                  {value[0].toLocaleString()}
                </div>
              </div>
              <div className="border py-1.5 bg-gray-100 rounded-md border-gray-400 flex items-center justify-between gap-x-7 w-[140px] p-3">
                <span>تا</span>
                <div className=" outline-none w-full text-left bg-gray-100">
                  {value[1].toLocaleString()}
                </div>
              </div>
            </div>

            <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2 mt-6">
              رنگ محصول
            </h3>
            <div className="flex items-center flex-wrap gap-4 mt-4">
              {colorBox.map((color) => (
                <div
                  class={`flex items-center gap-x-2 ${
                    color.checked && "border-2 border-blue-600"
                  } bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer`}
                  onClick={() => colorBoxChangeHandler(color.id)}
                >
                  <div
                    class={`w-5 h-5 rounded-full ${color.color} flex-center`}
                  >
                    {color.checked && (
                      <svg className="w-4 h-4 text-white">
                        <use href="#ok"></use>
                      </svg>
                    )}
                  </div>
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
            <button
              className="text-black border-2  border-black w-full mt-5 rounded-sm py-4 font-DanaMedium hover:bg-black hover:text-white transition-all"
              onClick={() => handleFilterProducts()}
            >
              اعمال فیلتر
            </button>
            {filtredProduct?.length !== 0 && isShowFilterButton && (
              <button
                className="text-red-600 border-2  border-red-600 w-full mt-5 rounded-sm py-4 font-DanaMedium hover:bg-red-600 hover:text-white transition-all"
                onClick={() => {
                  setFiltredProduct([]);
                  setValue([50000, 70000000]);
                  navigate("/products");
                }}
              >
                حذف فیلتر
              </button>
            )}
          </div>
          <div className="w-full">
            {/* sort section */}
            <div className="flex items-center gap-x-12 bg-white p-4 rounded-md shadow h-[72px]">
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#sort"></use>
                </svg>
                <div>
                  <h3 className="font-DanaDemiBold text-lg">مرتب سازی :</h3>
                </div>
              </div>
              <div className="flex items-center gap-x-4 child:cursor-pointer child:block child:py-2 child:px-4">
                <div
                  onClick={() => handlerSortFilter("default")}
                  className={`${
                    status === "default" ? "sort-active" : ""
                  } rounded-md`}
                >
                  پیش فرض
                </div>
                <div
                  onClick={() => handlerSortFilter("popular")}
                  className={`${
                    status === "popular" ? "sort-active" : ""
                  } rounded-md`}
                >
                  محبوب ترین
                </div>
                <div
                  onClick={() => handlerSortFilter("newest")}
                  className={`${
                    status === "newest" ? "sort-active" : ""
                  } rounded-md`}
                >
                  جدید ترین
                </div>
                <div
                  onClick={() => handlerSortFilter("latest")}
                  className={`${
                    status === "latest" ? "sort-active" : ""
                  } rounded-md`}
                >
                  آخرین
                </div>
                <div
                  onClick={() => handlerSortFilter("chepeast")}
                  className={`${
                    status === "chepeast" ? "sort-active" : ""
                  } rounded-md`}
                >
                  ارزان ترین
                </div>
                <div
                  onClick={() => handlerSortFilter("expensivest")}
                  className={`${
                    status === "expensivest" ? "sort-active" : ""
                  } rounded-md`}
                >
                  گران ترین
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {filtredProduct?.length
                ? filtredProduct?.map((product) => (
                    <ProductBox product={product} isScore={true} />
                  ))
                : allProducts?.map((product) => (
                    <ProductBox product={product} isScore={true} />
                  ))}
            </div>
            <Pagination
              count={products?.paginatedNumber}
              page={page}
              setPage={setPage}
              status={status}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
