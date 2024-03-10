import React, { useState } from "react";
import useEdit from "../../../Hooks/AdminPanel/Comment/useEdit";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";
function AnswerModal({ comment, onClose, onSuccessInfo }) {
  const {
    mutate: updateComment,
    isLoading: isUpdating,
    isSuccess,
  } = useEdit(onClose, onSuccessInfo);
  const [body, setBody] = useState(comment.body);

  const updateCommentText = async (e) => {
    e.preventDefault();
    if (!body.length) return;
    updateComment({ id: comment._id, body });
  };

  return (
    <form
      onSubmit={updateCommentText}
      className="bg-white w-[380px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold"
    >
      <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
        متن ویرایش را بنویسید
      </h3>
      <div className="relative flex items-center justify-between bg-gray-100 py-2 px-3">
        <textarea
          onChange={(e) => setBody(e.target.value)}
          type="text"
          value={body}
          placeholder="متن پاسخ را وارد کنید ..."
          className="outline-none w-full h-36 bg-gray-100 font-DanaMedium"
        ></textarea>
      </div>
      <button className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl">
        {isUpdating ? "در حال ویرایش ..." : "ویرایش پاسخ"}
      </button>
    </form>
  );
}

export default AnswerModal;
