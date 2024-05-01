import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import CommentBox from "../../../Components/UserPanel/CommentBox/CommentBox";
import useGetMain from "../../../Hooks/AdminPanel/Comment/useGetMain";
import Pagination from "../../../Components/Pagination/Pagination";
import { getSearchParam } from "../../../Utils/Funcs/utils";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";
import Loader from "../../../Components/Loader/Loader";
function Comments() {
  const { data: comments, isLoading } = useGetMain();
  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  if (isLoading) return <Loader />;
  return (
    <div>
      <PageTitle title={"کامنت های من"} icon={"chat-bubble-left-right"} />
      <div className="bg-white mt-6">
        <p className="bg-gray-200 font-DanaDemiBold p-2 rounded-tl-md  rounded-tr-md">
          دیدگاه ها
        </p>
        <div className="p-[18px] space-y-8 divide-y-2">
          {comments?.mainComments.length ? (
            comments?.mainComments?.map((comment) => (
              <CommentBox key={comment._id} {...comment} />
            ))
          ) : (
            <EmptyError msg={"هیچ کامنتی ثبت نشده است ✌️"} className={"my-2"} />
          )}
        </div>
      </div>
      {comments?.mainComments.length > 0 && (
        <Pagination
          count={comments?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Comments;
