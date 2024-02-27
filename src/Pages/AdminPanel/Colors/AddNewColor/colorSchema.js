import * as Yup from "yup";

const colorSchema = Yup.object().shape({
  colorName: Yup.string()
    .min(3, "نام رنگ حداقل باید 3 کاراکتر داشته باشه")
    .max(20, "نام رنگ حداکثر باید 20 کاراکتر داشته باشه")
    .required("نام رنگ را وارد نمایید"),
  colorCode: Yup.string().required("کد رنگ را وارد نمایید"),
  product : Yup.string().required("لطفا محصول را برای ایجاد رنگ انتخاب کنید")
});

export { colorSchema };
