import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/AdminPanel/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./ContactShema";
import useSend from "../../Hooks/AdminPanel/Contact/useSend";
import StatusModal from "../../Components/SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const { mutateAsync: sendNewMessage, isLoading } = useSend();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const sendMessage = async (data) => {
    const result = await sendNewMessage(data);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
    }
  };

  let style =
    "flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2";

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body overflow-x-hidden">
        <div className="flex-center">
          <div className="form-wrapper relative md:relative md:z-20 shadow bg-white rounded-md  flex-center flex-col mt-10 p-8">
            <h1 className="font-DanaDemiBold text-base md:text-2xl">
              ارتباط با ما
            </h1>
            <h4 className="font-DanaDemiBold text-sm text-gray-600 mt-1">
              نظر یا انتقادتو بنویس برامون :)
            </h4>
            <form
              className="mt-6 space-y-6 w-[25rem]"
              onSubmit={handleSubmit(sendMessage)}
            >
              <Input
                register={register}
                errors={errors}
                icon={"user"}
                name={"name"}
                type={"text"}
                placeholder={"نام و نام خانوادگی"}
                InputStyle={style}
              />
              <Input
                register={register}
                errors={errors}
                icon={"envelope"}
                name={"email"}
                type={"text"}
                placeholder={"ایمیل"}
                InputStyle={style}
              />
              <Input
                register={register}
                errors={errors}
                icon={"phone"}
                name={"phone"}
                type={"text"}
                placeholder={"شماره تلفن"}
                InputStyle={style}
              />
              <Input
                register={register}
                errors={errors}
                name={"body"}
                type={"text"}
                isTextArea={true}
                placeholder={"متن پیغام را وارد کنید ..."}
                InputStyle={style}
              />
              <div className="bg-blue-600 relative text-white font-DanaDemiBold p-3 flex-center text-lg rounded-md shadow-blue cursor-pointer">
                <button className="form-fildes__btn " id="login">
                  {isLoading ? "در حال ارسال ..." : "ارسال پیغام"}
                </button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#plane"></use>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isShowSuccessModal && (
        <StatusModal
          onClose={() => navigate("/")}
          title={"پیغام با موفقیت ارسال شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => navigate("/")}
        />
      )}
      <Footer />
    </>
  );
}

export default ContactUs;
