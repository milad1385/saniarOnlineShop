import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useGetMain from "../../../Hooks/AdminPanel/Ticket/useGetMain";
import useGetAnswers from "../../../Hooks/AdminPanel/Ticket/useGetAnswers";
import AnswerBox from "../../../Components/AdminPanel/AnswerBox/AnswerBox";
import { useForm } from "react-hook-form";
import useAnswer from "../../../Hooks/AdminPanel/Ticket/useAnswer";

function AnswerTicket() {
  const { ticketID } = useParams();
  const { data: ticketInfo, isLoading } = useGetMain(ticketID);
  const { data: answers } = useGetAnswers(ticketInfo?._id);
  const { mutateAsync: sendAnswer, isLoading: isAnswering } = useAnswer();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendTicketAnswer = async (data) => {
    const ticketInfoObj = {
      ...ticketInfo,
      body: data.body,
      replyTo: ticketInfo._id,
      isFromUserPanel: true,
    };
    const result = await sendAnswer(ticketInfoObj);
    if (result.status === 201) {
      reset();
    }
  };

  return (
    <>
      <div className="bg-white rounded-md  p-[18px] shadow h-full">
        <h3 className="text-xl font-DanaDemiBold border-b border-b-gray-200 pb-4">
          {ticketInfo?.title}
        </h3>
        {/* start question box */}
        <div className="mt-7 space-y-5">
          <AnswerBox {...ticketInfo} key={crypto.randomUUID()} />
        </div>
        {/* start answer box  */}
        {answers?.length > 0 ? (
          <div className="mt-5 space-y-5">
            {answers?.map((answer) => (
              <AnswerBox key={answer._id} {...answer} />
            ))}
          </div>
        ) : (
          <div>هنوز پاسخی ارسال نشده است</div>
        )}
        {/* reply answer */}

        <form
          onSubmit={handleSubmit(sendTicketAnswer)}
          id="reply-ticket"
          className="mt-10"
        >
          <textarea
            rows="6"
            className="block w-full p-3 md:p-5 text-sm md:text-base text-slate-500 dark:text-gray-500 focus:text-zinc-700 dark:focus:text-white bg-gray-100 dark:bg-gray-700 border border-transparent focus:border-gray-200 dark:focus:border-slate rounded-2xl placeholder:font-danaLight transition-colors"
            name="text"
            required=""
            placeholder="پاسخ ..."
            {...register("body", {
              required: "متن پاسخ را وارد کنید !!!",
            })}
          ></textarea>
          <div className="flex gap-x-2 justify-end mt-2.5">
            <button
              className="bg-blue-600 text-white py-2 px-5 rounded-md shadow-blue"
              type="submit"
            >
              {isAnswering ? "در حال ارسال ..." : "ارسال"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AnswerTicket;
