import React, { useState } from "react";
import Input from "../../../../Components/AdminPanel/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { footerSchema } from "./footerSchema";
import useCreate from "../../../../Hooks/AdminPanel/static/footer/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import Button from "../../../../Components/AdminPanel/Button/Button";
import useGetText from "../../../../Hooks/AdminPanel/static/footer/useGetText";

function ChangeTextFooter() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(footerSchema) });

  const { mutateAsync: createFooter, isLoading } = useCreate();
  const { data: footerText} = useGetText();
  console.log(footerText);

  const createFooterText = async (data) => {
    const result = await createFooter(data.text);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(createFooterText)}
        className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
          تغییر متن <span className="text-blue-600">فوتر</span>
        </h3>
        <div className="bg-gray-100 relative py-2 px-3 rounded-lg">
          <Input
            isTextArea={true}
            register={register}
            errors={errors}
            placeholder={"متن جدید فوتر را بنویسید ...."}
            name={"text"}
            type={"text"}
            icon={"square"}
            value={footerText?.length ? footerText[0].text : ""}
          />
        </div>
        <Button title={"تغییر متن فوتر"} isLoading={isLoading} />
      </form>
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={" متن فوتر با موفقیت ساخته شد"}
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

export default ChangeTextFooter;
