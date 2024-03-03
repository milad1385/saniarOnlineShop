import * as Yup from "yup";

const articleSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان مقاله حداقل باید 3 کاراکتر داشته باشه")
    .max(60, "عنوان مقاله حداکثر باید 60 کاراکتر داشته باشه")
    .required("عنوان مقاله را وارد نمایید"),
  link: Yup.string()
    .min(3, "لینک مقاله حداقل باید 3 کاراکتر داشته باشه")
    .max(14, " لینک مقاله حداکثر باید 14 کاراکتر داشته باشه")
    .required(" لینک مقاله را وارد نمایید"),
  readingTime: Yup.string().required("مدت زمان خواندن مقاله را وارد نمایید"),
  category: Yup.string().required("دسته بندی را انتخاب کنید"),
});

export { articleSchema };
