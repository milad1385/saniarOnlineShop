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



export { createNewProduct, getAllProducts, getBestSellerProduct };
