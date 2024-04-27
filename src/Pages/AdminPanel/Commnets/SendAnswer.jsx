import React from "react";
import useCreate from "../../../Hooks/AdminPanel/Comment/useCreate";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./commentSchema";
import { useForm } from "react-hook-form";

function SendAnswer({ onClose, onInfo, comment }) {
  const { mutateAsync: sendComment, isLoading: isSending } = useCreate(
    onClose,
    onInfo
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(commentSchema) });

  const sendAnswerToComment = async (data) => {
    const commentInfo = {
      body: data.answer,
      product: comment.product._id,
      replyId: comment._id,
      isReply: 1,
    };
    await sendComment(commentInfo);
  };
  return (
    <form
      onSubmit={handleSubmit(sendAnswerToComment)}
      className="bg-white w-[350px] md:w-[380px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold"
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

export default SendAnswer;
