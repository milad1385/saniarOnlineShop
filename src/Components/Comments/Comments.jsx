import React, { useContext, useState } from "react";
import Rateing from "../Rateing/Rateing";
import CommentBox from "../CommentBox/CommentBox";
import Button from "../Button/Button";
import useCreate from "../../Hooks/AdminPanel/Comment/useCreate";
import { isLogin } from "../../Utils/Funcs/utils";
import { Link } from "react-router-dom";
import useGetAll from "../../Hooks/AdminPanel/Comment/useGetAll";
import { AppContext } from "../../App";
import StatusModal from "../SuccessModal/SuccessModal";
import EmptyError from "../UserPanel/EmptyError/EmptyError";

function Comments({ productID, comments }) {
  const context = useContext(AppContext);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [proves, setProves] = useState([]);
  const [cons, setCons] = useState([]);
  const [proveText, setProveText] = useState("");
  const [consText, setConsText] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);
  const [isShowAddNewCommentForm, setIsShowAddNewCommentForm] = useState(false);
  const [replyInfo, setReplyInfo] = useState(null);

  const { mutateAsync: sendComment, isLoading: isSending } = useCreate();
  // functions
  const addProves = (e) => {
    if (e.code === "Enter") {
      const newProveObj = {
        id: proves.length + 1,
        title: proveText,
      };
      setProves((prevState) => [...prevState, newProveObj]);
      setProveText("");
    }
  };

  const addCons = (e) => {
    if (e.code === "Enter") {
      const newConsObj = {
        id: cons.length + 1,
        title: consText,
      };
      setCons((prevState) => [...prevState, newConsObj]);
      setConsText("");
    }
  };

  const deleteProves = (proveID) => {
    const newProves = proves.filter((prove) => prove.id !== proveID);
    setProves(newProves);
  };

  const deleteCons = (conID) => {
    const newCons = cons.filter((con) => con.id !== conID);
    setCons(newCons);
  };

  const sendNewComment = async () => {
    if (!body || !proves.length || !cons.length) return;
    const commentInfo = {
      advantage: proves,
      disAdvantage: cons,
      body,
      score,
      product: productID,
      replyId: replyInfo ? replyInfo._id : null,
      isReply: replyInfo ? 1 : 0,
    };
    const result = await sendComment(commentInfo);
    console.log(result);
    if (result.status === 202) {
      clearInput();
      setIsShowSuccessModal(true);
      setIsShowAddNewCommentForm(false);
    }
  };

  const clearInput = () => {
    setBody("");
    setProves([]);
    setCons([]);
    setProveText("");
    setConsText("");
  };
  return (
    <>
      {isLogin() ? (
        <>
          <div className="flex items-center justify-between">
            <p className="font-DanaDemiBold text-base md:text-3xl">نظرات</p>
            <Button
              title={"ایجاد نظر جدید"}
              onClick={() => {
                setIsShowAddNewCommentForm(true);
                setReplyInfo(null);
              }}
            />
          </div>
          {isShowAddNewCommentForm && (
            <>
              <div className="flex items-center gap-x-3 mb-3">
                <div className="flex-center bg-white rounded-full w-[60px] h-[60px] shadow">
                  <img
                    src={
                      context?.userInfo.image
                        ? `http://localhost:3001/uploads/covers/${context?.userInfo.image}`
                        : "/images/user.png"
                    }
                    alt="user-image"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div className="flex gap-1 flex-col font-DanaDemiBold">
                  <span className="text-sm md:text-lg">
                    {context?.userInfo.name}
                  </span>
                  <span className="text-xs text-gray-600">
                    {replyInfo
                      ? `در پاسخ به ${replyInfo.creator.name}`
                      : "ثبت نظر جدید"}
                  </span>
                </div>
              </div>
              <div className="">
                <Rateing
                  maxRating={5}
                  onUserRate={setScore}
                  color="#fcc419"
                  defaultValue={2}
                  message={["خیلی بد", "متوسط", "خوب", "خیلی خوب", "عالی"]}
                />
              </div>
              <textarea
                className="bg-gray-100 outline-none w-full h-56 p-4 focus:border focus:border-blue-600 transition-all rounded-md"
                placeholder="نظر خود را وارد کنید..."
                value={body}
                disabled={isSending}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-3 gap-y-4">
                <div>
                  <label
                    htmlFor="proves"
                    className="text-green-500 font-DanaDemiBold "
                  >
                    نقاط قوت
                  </label>
                  <div className="bg-gray-100 transition-all flex-wrap  focus:border focus:border-green-500 rounded-md mt-1 flex items-center  px-2 py-0.5">
                    <div className="flex items-center flex-wrap gap-2">
                      {proves.map((prove) => (
                        <div className="flex items-center gap-x-1 bg-green-300 text-green-700 p-1 rounded-md">
                          {prove.title}
                          <svg
                            className="w-4 h-4"
                            onClick={() => deleteProves(prove.id)}
                          >
                            <use href="#x-mark"></use>
                          </svg>
                        </div>
                      ))}
                    </div>
                    <input
                      id="proves"
                      type="text"
                      disabled={isSending}
                      placeholder="با کلید اینتر اضافه کنید ..."
                      className="outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
                      onKeyDown={(e) => addProves(e)}
                      onChange={(e) => setProveText(e.target.value)}
                      value={proveText}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cons"
                    className="text-red-500 font-DanaDemiBold "
                  >
                    نقاط ضعف
                  </label>
                  <div className="bg-gray-100 transition-all  focus:border focus:border-green-500 rounded-md mt-1 flex items-center flex-wrap  px-2 py-0.5">
                    <div className="flex items-center flex-wrap gap-2">
                      {cons.map((con) => (
                        <div className="flex items-center gap-x-1 bg-red-300 text-red-700 p-1 rounded-md">
                          {con.title}
                          <svg
                            className="w-4 h-4"
                            onClick={() => deleteCons(con.id)}
                          >
                            <use href="#x-mark"></use>
                          </svg>
                        </div>
                      ))}
                    </div>
                    <input
                      id="cons"
                      type="text"
                      disabled={isSending}
                      placeholder="با کلید اینتر اضافه کنید ..."
                      className=" outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
                      onKeyDown={(e) => addCons(e)}
                      onChange={(e) => setConsText(e.target.value)}
                      value={consText}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2 mt-5">
                <Button
                  title={"ارسال کامنت"}
                  icon={"plane"}
                  onClick={sendNewComment}
                />
                <Button
                  title={"لغو"}
                  onClick={() => {
                    setIsShowAddNewCommentForm(false);
                    clearInput();
                  }}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <div className="bg-blue-600 text-white flex-center gap-x-3 py-6 md:py-8 rounded-md shadow mt-3">
          <p className="text-sm md:text-xl font-DanaDemiBold">
            برای ثبت کامنت ابتدا در سایت <Link to={"/login"}>لاگین</Link> کنید
          </p>
          <svg className="w-6 md:w-10 h-6 md:h-10">
            <use href="#chat-bubble-left-right"></use>
          </svg>
        </div>
      )}
      {/* show user comments */}
      <div>
        {comments?.length ? (
          comments?.map((comment) => (
            <CommentBox
              key={comment._id}
              comment={comment}
              onReplyInfo={setReplyInfo}
              onShow={setIsShowAddNewCommentForm}
            />
          ))
        ) : (
          <div className="mt-16">
            <EmptyError
              msg={"تاکنون هیچ کامنتی برای این محصول ایجاد نشده است 🤐"}
              className={"py-16 bg-blue-600"}
            />
          </div>
        )}
      </div>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"کامنت با موفقیت ارسال شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}
    </>
  );
}

export default Comments;
