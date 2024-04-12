import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import useDepartment from "../../../Hooks/AdminPanel/Ticket/useDepartment";
import Input from "../../../Components/AdminPanel/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ticketSchema } from "./ticketSchema";
import useSend from "../../../Hooks/AdminPanel/Ticket/useSend";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";

function SendTicket() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: departments } = useDepartment();
  const { mutateAsync: sendTicket, isLoading: isSending } = useSend();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketSchema),
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const sendNewTicketHandler = async (data) => {
    const result = await sendTicket(data);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
      reset();
    }
  };
  return (
    <>
      <PageTitle title={"ارسال تیکت"} icon={"plane"} />
      <form
        onSubmit={handleSubmit(sendNewTicketHandler)}
        className="bg-white  rounded-md shadow p-[18px] mt-6 space-y-6"
      >
        <div className="relative flex flex-col">
          <label htmlFor="department" className="font-DanaDemiBold text-lg">
            دپارتمان
          </label>
          <select
            id="department"
            {...register("department")}
            className="outline-none bg-gray-100 mt-3 text-gray-500 rounded-md py-3 px-4"
          >
            <option value="">دپارتمان مورد نظر ...</option>
            {departments?.map((department) => (
              <option value={department.title}>{department.title}</option>
            ))}
          </select>
          {errors.department && (
            <span className="absolute text-xs md:text-sm text-red-600 top-[90px] font-DanaDemiBold ">
              {errors.department.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="font-DanaDemiBold text-lg">
            موضوع تیکت
          </label>
          <Input
            register={register}
            errors={errors}
            placeholder={"موضوع تیکت را وارد کنید ..."}
            name={"title"}
            type={"text"}
            className={"mt-3"}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="font-DanaDemiBold text-lg">
            متن تیکت
          </label>
          <Input
            register={register}
            errors={errors}
            placeholder={"متن  تیکت را وارد کنید ..."}
            name={"body"}
            type={"text"}
            className={"mt-3"}
            isTextArea={true}
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-600 p-3 rounded-md text-white shadow-blue flex-center gap-x-2">
            ارسال تیکت
            <svg className="w-5 h-5 rotate-180">
              <use href="#plane"></use>
            </svg>
          </button>
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"تیکت شما با موفقیت ارسال شد"}
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

export default SendTicket;
