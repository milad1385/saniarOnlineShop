import React, { useState } from "react";
import Rateing from "../Rateing/Rateing";
import CommentBox from "../CommentBox/CommentBox";
import Button from "../Button/Button";

function Comments() {
  const [proves, setProves] = useState([]);
  const [cons, setCons] = useState([]);
  const [proveText, setProveText] = useState("");
  const [consText, setConsText] = useState("");
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
  return (
    <>
      <div className="">
        <Rateing
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-3 gap-y-4">
        <div>
          <label htmlFor="proves" className="text-green-500 font-DanaDemiBold ">
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
              placeholder="با کلید اینتر اضافه کنید ..."
              className="outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
              onKeyDown={(e) => addProves(e)}
              onChange={(e) => setProveText(e.target.value)}
              value={proveText}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cons" className="text-red-500 font-DanaDemiBold ">
            نقاط ضعف
          </label>
          <div className="bg-gray-100 transition-all  focus:border focus:border-green-500 rounded-md mt-1 flex items-center flex-wrap  px-2 py-0.5">
            <div className="flex items-center flex-wrap gap-2">
              {cons.map((con) => (
                <div className="flex items-center gap-x-1 bg-red-300 text-red-700 p-1 rounded-md">
                  {con.title}
                  <svg className="w-4 h-4" onClick={() => deleteCons(con.id)}>
                    <use href="#x-mark"></use>
                  </svg>
                </div>
              ))}
            </div>
            <input
              id="cons"
              type="text"
              placeholder="با کلید اینتر اضافه کنید ..."
              className=" outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
              onKeyDown={(e) => addCons(e)}
              onChange={(e) => setConsText(e.target.value)}
              value={consText}
            />
          </div>
        </div>
      </div>
      <Button title={'ارسال کامنت'} icon={'plane'} />
      {/* show user comments */}
      <div>
        <CommentBox />
      </div>
    </>
  );
}

export default Comments;
