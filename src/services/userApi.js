const registerNewUser = async (formData) => {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/users/register1`, {
      method: "POST",
      body: formData,
    });
    if (res.status === 404) {
      return { status: 404 };
    } else if (res.status === 200 || res.status === 202) {
      return { status: 200, infos: await res.json() };
    } else if (res.status === 409) {
      return { status: 409 };
    }
  } catch (err) {
    return err;
  }
};

export { registerNewUser };
