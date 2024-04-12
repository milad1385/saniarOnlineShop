import { getUserToken } from "../Utils/Funcs/utils";

const baseURL = "http://localhost:3001/api/v1/ticket";

const getAllDepartments = async () => {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/department`);

    return await res.json();
  } catch (err) {
    return err;
  }
};

const sendNewTicket = async (data) => {
  console.log(data);
  try {
    const res = await fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getUserToken()}`,
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getAllTickets = async () => {
  try {
    const res = await fetch(`${baseURL}/getAll`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const getMainInfo = async (id) => {
  try {
    const res = await fetch(`${baseURL}/getTicket/${id}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const fetchAllTickets = async () => {
  try {
    const res = await fetch(`${baseURL}/all`);
    return await res.json();
  } catch (err) {
    return err;
  }
};

const sendAnswerToTicket = async (data) => {
  try {
    const res = await fetch(`${baseURL}/answer/ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${getUserToken()}`,
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (err) {
    return err;
  }
};

const getTicketAnswers = async (id) => {
  try {
    const res = await fetch(`${baseURL}/get/answers/${id}`, {
      headers: {
        authorization: `${getUserToken()}`,
      },
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

const activeToggle = async (info) => {
  try {
    const res = await fetch(
      `${baseURL}/activeToggle/${info.id}/${info.status}`,
      {
        method: "PUT",
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

export {
  getAllDepartments,
  sendNewTicket,
  getAllTickets,
  getMainInfo,
  fetchAllTickets,
  sendAnswerToTicket,
  getTicketAnswers,
  activeToggle,
};
