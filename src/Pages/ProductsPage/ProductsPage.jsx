import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";
function ProductsPage() {
  const [value, setValue] = useState([50000, 25000000]);
  const [filtredProduct, setFiltredProduct] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "victus 15",
      cat: "laptop",
      price: 20_000_000,
      color: "زرد",
    },
    { id: 2, name: "air 15", cat: "music", price: 5_000_000, color: "آبی" },
    { id: 3, name: "a 51", cat: "mobile", price: 8_000_000, color: "مشکی" },
    {
      id: 4,
      name: "samsung",
      cat: "tablet",
      price: 25_000_000,
      color: "صورتی",
    },
  ]);
  const [checboxes, setCheckBoxes] = useState([
    {
      id: 1,
      checked: false,
      lable: "موبایل",
      icon: "mobile",
      count: 27,
    },
    {
      id: 2,
      checked: false,
      lable: "ایرپاد",
      icon: "music",
      count: 27,
    },
    {
      id: 3,
      checked: false,
      lable: "تبلت",
      icon: "mobile",
      count: 27,
    },
    {
      id: 4,
      checked: false,
      lable: "لپ تاپ",
      icon: "laptop",
      count: 27,
    },
  ]);
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

  const changeHandler = (id) => {
    const changeCheckBox = checboxes.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheckBoxes(changeCheckBox);
  };

  const colorBoxChangeHandler = (id) => {
    const changeColorBox = colorBox.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setColorBox(changeColorBox);
  };

  const applyFilter = () => {
    let updatedList = [...data];
    const checkedBox = checboxes
      .filter((item) => item.checked)
      .map((item) => item.icon.toLocaleLowerCase());

    if (checkedBox.length) {
      updatedList = updatedList.filter((item) => checkedBox.includes(item.cat));
    }



    const checkedColor = colorBox
      .filter((item) => item.checked)
      .map((item) => item.name);
    if (checkedColor.length) {
      updatedList = updatedList.filter((item) =>
        checkedColor.includes(item.color)
      );
    }


    let minPrice = value[0];
    let maxPrice = value[1];
    updatedList = updatedList.filter(
      (item) => item.price >= +minPrice && item.price <= +maxPrice
    );
    console.log(updatedList);


    setFiltredProduct(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [checboxes, value, colorBox]);
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
          <div className="bg-white shadow rounded-md w-[450px] h-[716.7px] px-4 py-3 sticky top-0">
            <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2">
              جستجو
            </h3>
            <div className="flex items-center border border-gray-200  bg-gray-100 py-[5px] px-[5px] text-base rounded-full justify-between my-4">
              <input
                type="text"
                className="border-none outline-none w-full px-[px] bg-gray-100"
                placeholder="جستجو محصولات"
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
              {checboxes.map((box) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="text-lg"
                      value={box.lable}
                      onChange={() => changeHandler(box.id)}
                    />
                    <span className="font-DanaMedium mt-1">{box.lable}</span>
                    <svg className="w-5 h-5">
                      <use href={`#${box.icon}`}></use>
                    </svg>
                  </div>
                  <div>({box.count})</div>
                </div>
              ))}
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
                  {value[0].toLocaleString("fa")}
                </div>
              </div>
              <div className="border py-1.5 bg-gray-100 rounded-md border-gray-400 flex items-center justify-between gap-x-7 w-[140px] p-3">
                <span>تا</span>
                <div className=" outline-none w-full text-left bg-gray-100">
                  {value[1].toLocaleString("fa")}
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
            <button className="text-black border-2  border-black w-full mt-5 rounded-sm py-4 font-DanaMedium hover:bg-black hover:text-white transition-all">
              اعمال فیلتر
            </button>
          </div>
          <div className="w-full">
            {/* sort section */}
            <div className="flex items-center gap-x-12 bg-white p-4 rounded-md shadow">
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#sort"></use>
                </svg>
                <div>
                  <h3 className="font-DanaDemiBold text-lg">مرتب سازی :</h3>
                </div>
              </div>
              <div className="flex items-center gap-x-7 child:cursor-pointer">
                <div className="sort-active rounded-md">پیش فرض</div>
                <div className="">محبوب ترین</div>
                <div className="">پر فروش ترین</div>
                <div className="">ارزان ترین</div>
                <div className="">گران ترین</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              <ProductBox image={"laptop-1.jpg"} />
              <ProductBox image={"product-image3.jpg"} />
              <ProductBox image={"laptop-2.jpg"} />
              <ProductBox image={"laptop-3.jpg"} />
              <ProductBox image={"laptop-4.jpg"} />
              <ProductBox image={"laptop-5.jpg"} />
            </div>
            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
