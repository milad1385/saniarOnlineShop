const baseURL = `http://localhost:3001/api/v1/static`;

const createFooterText = async (text) => {
  try {
    const res = await fetch(`${baseURL}/footer`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getFooterText = async () => {
  try {
    const res = await fetch(`${baseURL}/footer`);
    return await res.json();
  } catch (err) {}
};

export { createFooterText, getFooterText };
