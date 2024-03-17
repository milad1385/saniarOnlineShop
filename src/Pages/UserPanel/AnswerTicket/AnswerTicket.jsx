import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetMain from "../../../Hooks/AdminPanel/Ticket/useGetMain";

function AnswerTicket() {
  const { ticketID } = useParams();
  const { data: ticketInfo, isLoading } = useGetMain(ticketID);
  console.log(ticketInfo);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white rounded-md  p-[18px] shadow h-full">
        <h3 className="text-xl font-DanaDemiBold border-b border-b-gray-200 pb-4">
          {ticketInfo?.title}
        </h3>
        {/* start question box */}
        <div className="mt-7 space-y-5">
          <div className="w-11/12 sm:w-2/3 bg-gray-100  text-zinc-700 dark:text-white p-4 rounded-2xl rounded-tr-sm">
            <h4 className="font-DanaMedium text-xl mb-1 text-right">
              {ticketInfo?.creator.name}
            </h4>
            <span
              className="block text-xs font-Dana text-slate-500 dark:text-slate-400 text-right"
              style={{ direction: "ltr" }}
            >
              {new Date(ticketInfo?.createdAt).toLocaleDateString("fa-IR")}{" "}
              10:43
            </span>
            <p className="font-Dana mt-4 text-gray-500">{ticketInfo?.body}</p>
          </div>
        </div>
        {/* start answer box  */}
        {ticketInfo?.isAnswer ? (
          <div className="mt-5 space-y-5">
            <div className="w-11/12 sm:w-2/3 mr-auto bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm">
              <h4 className="font-DanaMedium text-xl mb-1 text-left">
                آرمین امامی
              </h4>
              <span
                className="block text-xs font-Dana text-white text-left"
                style={{ direction: "ltr" }}
              >
                1402/10/23 12:35
              </span>
              <p className="font-Dana mt-4"></p>
              سلام دوست عزیز این سیستم در حال اپدیت بود ، الان باید مشکلش حل شده
              باشه موفق باشید ❤️ اگر در آینده به مشکل برخوردید بهم اطلاع بدین
              <p></p>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* reply answer */}
        {/* <form id="reply-ticket" className="mt-10">
          <textarea
            rows="6"
            className="block w-full p-3 md:p-5 text-sm md:text-base text-slate-500 dark:text-gray-500 focus:text-zinc-700 dark:focus:text-white bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-gray-200 dark:focus:border-slate rounded-2xl placeholder:font-danaLight transition-colors"
            name="text"
            required=""
            placeholder="پاسخ ..."
          ></textarea>
          <div className="flex gap-x-2 justify-end mt-2.5">
            <button
              className="bg-blue-600 text-white py-2 px-5 rounded-md shadow-blue"
              type="submit"
            >
              ارسال
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
}

export default AnswerTicket;
