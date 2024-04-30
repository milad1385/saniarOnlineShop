import React from "react";

function CommentBox({ comment, onReplyInfo, onShow }) {
  return (
    <div className="border border-gray-200 rounded-md p-4 mt-10 shadow">
      <div>
        <div className="bg-[#eee] p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-x-3">
            <div className="flex-center bg-white rounded-full w-[60px] h-[60px] shadow">
              <img
                src={`https://shoppingmilad.liara.run/uploads/covers/${comment.userImage}`}
                alt={comment.userImage}
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div className="flex gap-1 flex-col font-DanaDemiBold">
              <span className="text-sm md:text-lg">{comment.creator.name}</span>
              <span className="text-xs text-gray-600">{comment.date}</span>
            </div>
          </div>
          <div className="flex gap-x-0.5 flex-row-reverse grow">
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
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
          {comment.body}
        </p>
        <div className="text-sm mt-4">
          <ul className="space-y-3 font-DanaDemiBold text-gray-700">
            {comment.advantage.map((items) => (
              <li className="flex items-center gap-x-1" key={items._id}>
                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                  <use href="#plus"></use>
                </svg>
                <span>{items.title}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
            {comment.disAdvantage.map((items) => (
              <li className="flex items-center gap-x-1" key={items._id}>
                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                  <use href="#minus"></use>
                </svg>
                <span>{items.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5"
          onClick={() => {
            const { _id, creator } = comment;
            onReplyInfo({ _id, creator });
            onShow(true);
            window.scroll(0, 1300);
          }}
        >
          پاسخ
        </button>
        {/* start comment answer */}
        {comment.replies &&
          comment.replies.map((reply) => (
            <div
              className={`border border-gray-200  rounded-md p-4 mt-10 shadow`}
            >
              <div className="bg-[#eee] p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-x-3">
                  <div className="flex-center bg-gray-200 rounded-full w-[60px] h-[60px] shadow">
                    <img
                      src={`https://shoppingmilad.liara.run/uploads/covers/${reply.userImage}`}
                      alt="user-image"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div className="flex gap-1 flex-col font-DanaDemiBold">
                    <span className="text-sm md:text-lg">
                      {reply.creator.name}
                    </span>
                    <span className="text-xs text-gray-600">{reply.date}</span>
                  </div>
                </div>
                <div className="flex gap-x-0.5 flex-row-reverse grow">
                  {Array(5 - reply.score)
                    .fill(0)
                    .map((score) => (
                      <svg
                        className="w-5 md:w-6 h-5 md:h-6 text-gray-400"
                        key={crypto.randomUUID()}
                      >
                        <use href="#star"></use>
                      </svg>
                    ))}
                  {Array(reply.score)
                    .fill(0)
                    .map((score) => (
                      <svg
                        className="w-5 md:w-6 h-5 md:h-6 text-yellow-400"
                        key={crypto.randomUUID()}
                      >
                        <use href="#star"></use>
                      </svg>
                    ))}
                </div>
              </div>
              <p className={`mt-4 text-sm/[28px] md:text-base/[32px]`}>
                {reply.body}
              </p>
              <div className="text-sm mt-4">
                <ul className="space-y-3 font-DanaDemiBold text-gray-700">
                  {reply.advantage.map((items) => (
                    <li className="flex items-center gap-x-1" key={items._id}>
                      <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                        <use href="#plus"></use>
                      </svg>
                      <span>{items.title}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
                  {reply.disAdvantage.map((items) => (
                    <li className="flex items-center gap-x-1" key={items._id}>
                      <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                        <use href="#minus"></use>
                      </svg>
                      <span>{items.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentBox;
