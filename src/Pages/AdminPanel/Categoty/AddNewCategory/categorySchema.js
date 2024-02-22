import * as Yup from "yup";

const categorySchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان دسته بندی حداقل باید 3 کاراکتر داشته باشه")
    .max(30, "عنوان دسته بندی حداکثر باید 30 کاراکتر داشته باشه")
    .required("عنوان دسته بندی را وارد نمایید"),
  link: Yup.string()
    .min(3, "لینک حداقل باید 3 کاراکتر داشته باشه")
    .max(48, "لینک حداکثر باید 16 کاراکتر داشته باشه")
    .required("لینک را وارد نمایید"),
});

export { categorySchema };
