import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TitleCat from "../../Components/TitleCat/TitleCat";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";
import useCategoryPro from "../../Hooks/AdminPanel/Product/useCategoryPro";
import { useParams } from "react-router-dom";
import { getSearchParam } from "../../Utils/Funcs/utils";
import EmptyError from "../../Components/UserPanel/EmptyError/EmptyError";

function ProductsCategory() {
  const { categoryName } = useParams();

  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);

  useEffect(() => {
    setPage(pageNum || 1);
    window.scroll(0, 0);
  }, [pageNum]);

  const { data: products, isLoading } = useCategoryPro(page, categoryName);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "محصولات", to: "/Products" },
            { id: 3, name: `${categoryName}`, to: "/" },
          ]}
        />
        {/* <TitleCat desc={`${categoryName}`} main={"دسته بندی"} isMain={true} /> */}
        <div className="mt-5">
          {products?.products.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
              {products?.products.map((product) => (
                <ProductBox product={product} />
              ))}
            </div>
          ) : (
            isLoading === false && (
              <EmptyError
                msg={"در این دسته بندی محصولی یافت نشد 🤐"}
                className={"md:py-12 mt-10 text-base md:text-2xl"}
              />
            )
          )}
        </div>
        <Pagination
          count={products?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>

      <Footer />
      <FooterMenu />
    </>
  );
}

export default ProductsCategory;
