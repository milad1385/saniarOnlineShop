import React, { useEffect } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";
import { Link } from "react-router-dom";
import useGetAll from "../../../Hooks/AdminPanel/Ticket/useGetAll";
import TicketStat from "./Stat";
import Loader from "../../../Components/Loader/Loader";

function Tickets() {
  const { data: allTickets, isLoading } = useGetAll();
  console.log(allTickets);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (isLoading) return <Loader />;
  return (
    <>
      <div>
        <PageTitle title={"لیست تیکت ها"} icon={"ticket"} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 md:gap-x-8 mt-5 mx-auto ">
        <TicketStat
          color={`bg-amber-400`}
          title={`همه تیکت ها`}
          icon={"ticket"}
          number={allTickets?.allTickets.length}
          key={crypto.randomUUID()}
        />
        <TicketStat
          color={`bg-green-500`}
          title={`پاسخ داده شده`}
          icon={"envelope-open"}
          number={allTickets?.answerCount}
          key={crypto.randomUUID()}
        />
        <TicketStat
          color={`bg-red-500`}
          title={`پاسخ داده نشده`}
          icon={"chat-bubble-left-right"}
          number={allTickets?.waitCount}
          key={crypto.randomUUID()}
        />
        <Link
          to={"/my-account/tickets/send-ticket"}
          className="flex items-center gap-x-4.5 w-full xs:w-auto md:w-[240px] font-danaDemiBold text-xl text-white bg-blue-600  p-4 md:p-6 rounded-2xl"
        >
          <svg className="w-8 h-8">
            <use href="#plus-circle"></use>
          </svg>
          <span className="mr-2 font-DanaDemiBold text-sm md:text-base">
            تیکت جدید
          </span>
        </Link>
      </div>
      {allTickets?.allTickets.length ? (
        <div className="table-container mt-6">
          <table className="bg-white text-sm md:text-base">
            <thead>
              <tr className="child:border bg-gray-500 text-white child:border-slate-300 child:p-2 child:font-DanaDemiBold">
                <th className="">شناسه</th>
                <th className="">عنوان</th>
                <th>وضعیت</th>
                <th>دپارتمان</th>
                <th className="">تاریخ بروزسانی</th>
                <th className="">نمایش</th>
              </tr>
            </thead>
            <tbody>
              {allTickets?.allTickets.map((ticket, index) => (
                <tr
                  key={ticket._id}
                  className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium"
                >
                  <td className="">{index + 1}</td>
                  <td className="">
                    <span className="">{ticket.title}</span>
                  </td>
                  <td>
                    <span
                      className={`mr-2 ${
                        ticket.hasAnswer ? "bg-green-600" : "bg-red-600"
                      } ${
                        ticket.isOpen === false ? "!bg-gray-500" : ""
                      } text-white py-1 px-2 text-xs md:text-sm`}
                    >
                      {ticket.hasAnswer === false &&
                        ticket.isOpen &&
                        "در انتظار پاسخ"}
                      {ticket.isOpen === false && "بسته شده "}
                      {ticket.hasAnswer && ticket.isOpen && "پاسخ داده شده"}
                    </span>
                  </td>
                  <td>{ticket.departmentName}</td>
                  <td>
                    {new Date(ticket.createdAt).toLocaleDateString(
                      "fa-IR",
                      options
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/my-account/tickets/answer-ticket/${ticket._id}`}
                    >
                      <button className="flex-center mx-auto gap-x-2 bg-blue-600 text-white py-2 px-4 rounded-md shadow-blue">
                        نمایش
                        <svg className="w-5 h-5">
                          <use href="#eye"></use>
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-10">
          <EmptyError msg={"هیچ تیکتی ارسال نکردید"} />
        </div>
      )}
    </>
  );
}

export default Tickets;
