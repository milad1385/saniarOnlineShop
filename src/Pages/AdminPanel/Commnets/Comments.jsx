import React, { useContext, useEffect, useState } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useGetAll from "../../../Hooks/AdminPanel/Comment/useGetAll";
import Loader from "../../../Components/Loader/Loader";
import useAcceptOrDecline from "../../../Hooks/AdminPanel/Comment/useAcceptOrDecline";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../Hooks/AdminPanel/Comment/useDelete";
import Modal from "../../../Components/Modal/Modal";
import AnswerModal from "./AnswerModal";
import ConfirmModal from "../../../Components/ConfirmModal/ConfirmModal";
import CommentText from "./CommentText";
import SendAnswer from "./sendAnswer";
import TButton from "../../../Components/AdminPanel/TButton/TButton";

function Comments() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [successInfo, setSuccessInfo] = useState({});

  const { data: comments, isLoading } = useGetAll();
  const { mutateAsync: deleteHandler, isLoading: isDeleting } =
    useDelete(setSuccessInfo);
  const { mutateAsync: acceptOrDeclineComment, isLoading: isWorking } =
    useAcceptOrDecline(setSuccessInfo, successInfo);

  const setAcceptOrDeclineComment = async (statusMode, id) => {
    await acceptOrDeclineComment({
      id,
      status: statusMode === "accept" ? 1 : 0,
    });
  };

  const deleteCommentHandler = async (id) => {
    await deleteHandler(id);
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
                  <td>وضعیت</td>
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
                      <Modal>
                        <Modal.Open name={"commentBody"}>
                          <TButton
                            title={"مشاهده"}
                            className={"bg-amber-500"}
                          />
                        </Modal.Open>
                        <Modal.Page name={"commentBody"}>
                          <CommentText text={comment.body} />
                        </Modal.Page>
                      </Modal>
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
                        <Modal>
                          <Modal.Open name={"answer"}>
                            <TButton
                              title={"پاسخ"}
                              className={"bg-orange-800"}
                            />
                          </Modal.Open>
                          <Modal.Page name={"answer"}>
                            <SendAnswer
                              onInfo={setSuccessInfo}
                              comment={comment}
                            />
                          </Modal.Page>
                        </Modal>
                      )}
                    </td>
                    <td>
                      <Modal>
                        {comment.isAccept ? (
                          <>
                            <Modal.Open name={"accept"}>
                              <TButton title={"رد"} className={"bg-gray-600"} />
                            </Modal.Open>
                            <Modal.Page name={"accept"}>
                              <ConfirmModal
                                title={"آیا از رد کردن اطمینان دارید ؟"}
                                onInfo={setSuccessInfo}
                                disable={isDeleting}
                                isConfirming={isDeleting}
                                onConfirm={() =>
                                  setAcceptOrDeclineComment(
                                    "decline",
                                    comment._id
                                  )
                                }
                              />
                            </Modal.Page>
                          </>
                        ) : (
                          <>
                            <Modal.Open name={"accept"}>
                              <TButton
                                title={"تایید"}
                                className={"bg-green-600"}
                              />
                            </Modal.Open>
                            <Modal.Page name={"accept"}>
                              <ConfirmModal
                                title={"آیا از تایید کردن اطمینان دارید ؟"}
                                onInfo={setSuccessInfo}
                                disable={isDeleting}
                                isConfirming={isDeleting}
                                onConfirm={() =>
                                  setAcceptOrDeclineComment(
                                    "accept",
                                    comment._id
                                  )
                                }
                              />
                            </Modal.Page>
                          </>
                        )}
                      </Modal>
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open name={"delete"}>
                          <TButton title={"حذف"} className={"bg-red-600"} />
                        </Modal.Open>
                        <Modal.Page name={"delete"}>
                          <ConfirmModal
                            title={"آیا از حذف کردن اطمینان دارید ؟"}
                            disable={isDeleting}
                            isConfirming={isDeleting}
                            onConfirm={() => deleteCommentHandler(comment._id)}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                    <td>
                      <Modal>
                        <Modal.Open name={"edit"}>
                          <TButton title={"ویرایش"} className={"bg-blue-600"} />
                        </Modal.Open>
                        <Modal.Page name={"edit"}>
                          <AnswerModal
                            comment={comment}
                            onSuccessInfo={setSuccessInfo}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>

      {successInfo.title && (
        <StatusModal
          onClose={setSuccessInfo}
          title={successInfo.title}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setSuccessInfo(false)}
        />
      )}
    </>
  );
}

export default Comments;
