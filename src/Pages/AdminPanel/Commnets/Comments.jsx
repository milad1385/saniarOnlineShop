import React, { useContext, useEffect, useState } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useGetAll from "../../../Hooks/AdminPanel/Comment/useGetAll";
import Loader from "../../../Components/Loader/Loader";
import DetailModal from "../../../Components/DetailModal/DetailModal";
import useAcceptOrDecline from "../../../Hooks/AdminPanel/Comment/useAcceptOrDecline";
import DeleteModal from "../../../Components/DeleteModal/DeleteModal";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../Hooks/AdminPanel/Comment/useDelete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./commentSchema";
import Input from "../../../Components/AdminPanel/Input/Input";
import useCreate from "../../../Hooks/AdminPanel/Comment/useCreate";
import useEdit from "../../../Hooks/AdminPanel/Comment/useEdit";

function Comments() {
  // states
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [isShowActiveModal, setIsShowActiveModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAnswerModal, setIsShowAnswerModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [commentId, setCommentId] = useState(null);
  const [msg, setMsg] = useState("");
  const [statusMode, setStatus] = useState("");
  const [commentBody, setCommentBody] = useState("");

  // react query
  const { data: comments, isLoading } = useGetAll();
  const { mutateAsync: deleteHandler, isLoading: isDeleting } = useDelete();
  const { mutateAsync: acceptOrDeclineComment, isLoading: isWorking } =
    useAcceptOrDecline();
  const { mutateAsync: sendComment, isLoading: isSending } = useCreate();
  const { mutateAsync: updateComment, isLoading: isUpdating } = useEdit();

  // react hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(commentSchema) });

  // functions
  const setAcceptOrDeclineComment = async () => {
    const result = await acceptOrDeclineComment({
      id: commentId,
      status: statusMode === "accept" ? 1 : 0,
    });
    if (result.status === 202) {
      setIsShowSuccessModal(true);
      setIsShowActiveModal(false);
      setMsg(`کامنت با موفقیت ${statusMode === "accept" ? "تایید" : "رد"} شد`);
    }
  };

  const deleteCommentHandler = async () => {
    const result = await deleteHandler(commentId);
    if (result.status === 202) {
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
      setMsg("کامنت با موفقیت حذف شد");
    }
  };

  const sendAnswerToComment = async (data) => {
    const commentInfo = {
      body: data.answer,
      product: commentId.productId,
      replyId: commentId.commentId,
      isReply: 1,
    };
    const result = await sendComment(commentInfo);
    console.log(result);
    if (result.status === 202) {
      setIsShowAnswerModal(false);
      setMsg("متن پاسخ با موفقیت ارسال شد");
      setIsShowSuccessModal(true);
    }
  };

  const editCommentText = async (e) => {
    e.preventDefault();
    const result = await updateComment({ id: commentId, body: answerText });
    if (result.status === 202) {
      setIsShowEditModal(false);
      setIsShowSuccessModal(true);
      setMsg("کامنت با موفقیت ویرایش شد");
    }
  };

  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="container">
        <div className="pb-6">
          <Table title={"لیست"} main={"کامنت ها"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>نام</td>
                  <td>محصول</td>
                  <td>تاریخ</td>
                  <td>امتیاز</td>
                  <td>نوع</td>
                  <td>مشاهده</td>
                  <td>پاسخ</td>
                  <td>تایید</td>
                  <td>حذف</td>
                  <td>ویرایش</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {comments?.map((comment, index) => (
                  <tr className="child:p-4 text-center font-DanaMedium">
                    <td
                      className={`text-white ${
                        comment.isAccept ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {index + 1}
                    </td>
                    <td>{comment.creator.name}</td>
                    <td>{comment.product.title}</td>
                    <td>{comment.date}</td>
                    <td className="flex items-center justify-center gap-x-0.5">
                      {Array(5 - comment.score)
                        .fill(0)
                        .map((score) => (
                          <svg
                            className="w-5 md:w-6 h-5 md:h-6 text-gray-400"
                            key={crypto.randomUUID()}
                          >
                            <use href="#star"></use>
                          </svg>
                        ))}
                      {Array(comment.score)
                        .fill(0)
                        .map((score) => (
                          <svg
                            className="w-5 md:w-6 h-5 md:h-6 text-yellow-400"
                            key={crypto.randomUUID()}
                          >
                            <use href="#star"></use>
                          </svg>
                        ))}
                    </td>
                    <td>{comment.isReply ? "رپلای" : "اصلی"}</td>
                    <td>
                      <button
                        className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setCommentBody(comment.body);
                        }}
                      >
                        مشاهده
                      </button>
                    </td>
                    <td className="flex items-center justify-center">
                      {comment.isReply ? (
                        <button
                          className="bg-orange-800 flex-center h-[36px] text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          disabled={true}
                        >
                          <svg className="w-6 h-6">
                            <use href="#check-mark"></use>
                          </svg>
                        </button>
                      ) : (
                        <button
                          className="bg-orange-800 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setIsShowAnswerModal(true);
                            setCommentId({
                              commentId: comment._id,
                              productId: comment.product._id,
                            });
                          }}
                        >
                          پاسخ
                        </button>
                      )}
                    </td>
                    <td>
                      {comment.isAccept ? (
                        <button
                          className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setStatus("decline");
                            setIsShowActiveModal(true);
                            setCommentId(comment._id);
                          }}
                        >
                          رد
                        </button>
                      ) : (
                        <button
                          className="bg-green-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setStatus("accept");
                            setIsShowActiveModal(true);
                            setCommentId(comment._id);
                          }}
                        >
                          تایید
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setCommentId(comment._id);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setCommentId(comment._id);
                          setIsShowEditModal(true);
                          setAnswerText(comment.body);
                        }}
                      >
                        ویرایش
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>
      {commentBody.length > 0 && (
        <DetailModal onClose={setCommentBody}>
          <div className="bg-white w-[93%] md:w-[400px] pb-8 pt-4 px-5">
            <h3 className="font-MorabbaBold text-lg md:text-3xl text-center mt-3">
              متن کامنت
            </h3>
            <div className="mt-4 bg-gray-100 px-2 py-1">
              <p className="font-DanaMedium leading-7">{commentBody}</p>
            </div>
            <div className="flex items-center justify-center gap-x-5 mt-8">
              <button
                className={`bg-blue-600 w-full text-white font-MorabbaBold px-16 py-4 text-lg md:text-xl`}
                onClick={() => setCommentBody("")}
              >
                مشاهده کردم
              </button>
            </div>
          </div>
        </DetailModal>
      )}

      {isShowActiveModal && (
        <DeleteModal
          onClose={setIsShowActiveModal}
          onClick={setAcceptOrDeclineComment}
          title={
            statusMode === "accept"
              ? "آیا از فعال کردن اطمینان دارید ؟"
              : "آیا از غیر فعال کردن اطمینان دارید ؟"
          }
          isLoading={isWorking}
        />
      )}

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={msg}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          onClose={setIsShowDeleteModal}
          onClick={deleteCommentHandler}
          title={"آیا از حذف کردن اطمینان دارید ؟"}
          isLoading={isDeleting}
        />
      )}

      {isShowAnswerModal && (
        <DetailModal onClose={setIsShowAnswerModal}>
          <form
            onSubmit={handleSubmit(sendAnswerToComment)}
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
            <button className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl">
              {isSending ? "در حال ارسال ..." : "ارسال پاسخ"}
            </button>
          </form>
        </DetailModal>
      )}

      {isShowEditModal && (
        <DetailModal onClose={setIsShowEditModal}>
          <form className="bg-white w-[380px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold">
            <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
              متن ویرایش را بنویسید
            </h3>
            <div className="relative flex items-center justify-between bg-gray-100 py-2 px-3">
              <textarea
                type="text"
                onChange={(e) => setAnswerText(e.target.value)}
                value={answerText}
                placeholder="متن پاسخ را وارد کنید ..."
                className="outline-none w-full h-36 bg-gray-100 font-DanaMedium"
              ></textarea>
            </div>
            <button
              className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
              onClick={editCommentText}
            >
              {isUpdating ? "در حال ویرایش ..." : "ویرایش پاسخ"}
            </button>
          </form>
        </DetailModal>
      )}
    </>
  );
}

export default Comments;
