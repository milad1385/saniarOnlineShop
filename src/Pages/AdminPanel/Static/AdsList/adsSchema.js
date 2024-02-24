import * as Yup from "yup";

const advertismentSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان شعار حداقل باید 3 کاراکتر داشته باشه")
    .max(20, "عنوان شعار حداکثر باید 20 کاراکتر داشته باشه")
    .required("عنوان شعار را وارد نمایید"),
  desc: Yup.string()
    .min(3, "توضیحات شعار حداقل باید 3 کاراکتر داشته باشه")
    .max(20, "توضیحات شعار حداکثر باید 20 کاراکتر داشته باشه")
    .required("توضیحات شعار را وارد نمایید"),
});

export { advertismentSchema };
