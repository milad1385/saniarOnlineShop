import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./../../../Pages/AdminPanel/Commnets/commentSchema";
import { useForm } from "react-hook-form";
import useAnswer from "../../../Hooks/AdminPanel/Contact/useAnswer";

function SendContactAnswer({ onClose, onInfo, email }) {
  const { mutateAsync: sendAnswer, isLoading: isSending } = useAnswer(
    onInfo,
    onClose
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(commentSchema) });

  const sendAnswerToContact = async (data) => {
    const contactInfo = {
      body: data.answer,
      email,
    };
    await sendAnswer(contactInfo);
  };
  return (
    <form
      onSubmit={handleSubmit(sendAnswerToContact)}
      className="bg-white w-[380px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold"
    >
      <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
        متن پاسخ را بنویسید
      </h3>
      <div className="relative flex items-center justify-between bg-gray-100 py-2 px-3">
        <textarea
          type="text"
          placeholder="متن پاسخ را وارد کنید ..."
          {...register("answer")}
          className="outline-none w-full h-36 bg-gray-100 font-DanaMedium"
        ></textarea>
        {errors.answer && (
          <span className="absolute text-xs md:text-sm text-red-600 right-0 top-[42px] md:top-[160px] font-DanaDemiBold ">
            {errors.answer.message}
          </span>
        )}
      </div>
      <button
        className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
        disabled={isSending}
      >
        {isSending ? "در حال ارسال ..." : "ارسال پاسخ"}
      </button>
    </form>
  );
}

export default SendContactAnswer;
