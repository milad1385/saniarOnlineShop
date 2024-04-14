import * as Yup from "yup";

const menuSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "نام منو حداقل باید 3 کاراکتر داشته باشه")
    .max(35, "نام منو حداکثر باید 35 کاراکتر داشته باشه")
    .required("نام منو را وارد نمایید"),
  link: Yup.string()
    .min(3, "لینک منو حداقل باید 3 کاراکتر داشته باشه")
    .max(35, "لینک منو حداکثر باید 35 کاراکتر داشته باشه")
    .required("لینک منو را وارد نمایید"),
});

export { menuSchema };
