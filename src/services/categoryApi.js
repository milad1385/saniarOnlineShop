const baseURL = `http://localhost:3001/api/v1/category`;

const createNewCategory = async (data) => {
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

const getAllCategory = async (page) => {
  try {
    const res = await fetch(`${baseURL}?page=${page}`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

export { createNewCategory , getAllCategory };
