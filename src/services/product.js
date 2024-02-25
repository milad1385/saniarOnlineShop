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
  console.log(title);
  try {
    const res = await fetch(`${baseURL}/get/productInfo/${title}`);

    return await res.json();
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
};
