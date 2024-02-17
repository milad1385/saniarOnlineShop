import * as Yup from "yup";

const sliderSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان بنر حداقل باید 3 کاراکتر داشته باشه")
    .max(48, "عنوان بنر حداکثر باید 48 کاراکتر داشته باشه")
    .required("عنوان بنر را وارد نمایید"),
  link: Yup.string()
    .min(3, "لینک حداقل باید 3 کاراکتر داشته باشه")
    .max(48, "لینک حداکثر باید 16 کاراکتر داشته باشه")
    .required("لینک را وارد نمایید"),
});

export { sliderSchema };
