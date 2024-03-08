import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = `http://localhost:3001/api/v1/products`;

const createNewProduct = async (data) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      body: data,
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllProducts = async (page) => {
  console.log(page);
  try {
    const res = await fetch(`${baseURL}?page=${page}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getBestSellerProduct = async () => {
  try {
    const res = await fetch(`${baseURL}/best-seller`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const getSameProducts = async (category) => {
  try {
    const res = await fetch(`${baseURL}/same-product/${category}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getProductInfo = async (title) => {
  try {
    const res = await fetch(`${baseURL}/get/productInfo/${title}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getAllProductsWithOutPagination = async () => {
  try {
    const res = await fetch(`${baseURL}/getAll`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getProductFromCategory = async (catName, page) => {
  console.log(catName);
  try {
    const res = await fetch(`${baseURL}/category/${catName}?page=${page}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const searchProduct = async (searchValue) => {
  try {
    const res = await fetch(`${baseURL}/search/${searchValue}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const editProduct = async (info) => {
  try {
    const res = await fetch(`${baseURL}/${info.id}`, {
      method: "PUT",
      body: info.data,
    });

    return res;
  } catch (err) {
    return err;
  }
};
export {
  createNewProduct,
  getAllProducts,
  getBestSellerProduct,
  getSameProducts,
  getProductInfo,
  getAllProductsWithOutPagination,
  deleteProduct,
  getProductFromCategory,
  searchProduct,
  editProduct
};
