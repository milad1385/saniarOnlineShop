import React, { useState } from "react";
import Rateing from "../../Components/Rateing/Rateing";
import Button from "../../Components/Button/Button";
function ArticleComment() {
  const [userRating, setUserRating] = useState(null);
  return (
    <>
      <div className="">
        <Rateing
          onUserRate={userRating}
          maxRating={5}
          color="#fcc419"
          defaultValue={2}
          message={["خیلی بد", "متوسط", "خوب", "خیلی خوب", "عالی"]}
        />
      </div>
      <textarea
        className="bg-gray-100 outline-none w-full h-56 p-4 focus:border focus:border-blue-600 transition-all rounded-md"
        placeholder="نظر خود را وارد کنید..."
      ></textarea>
      <Button title={"ارسال کامنت"} icon={"plane"} />
    </>
  );
}

export default ArticleComment;
