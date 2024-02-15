const baseURL = "http://localhost:3001/api/v1/baner";

const createNewBaner = async (info) => {
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${info.token}`,
      },
      body: JSON.stringify({ title: info.title }),
    });

    return res;
  } catch (err) {
    return { status: 404 };
  }
};

const getBaners = async () => {
  try {
    const res = await fetch(`${baseURL}`);
    return await res.json();
  } catch (err) {
    return { status: 404 };
  }
};

const deleteBaner = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export { createNewBaner, getBaners , deleteBaner};
