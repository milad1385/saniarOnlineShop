import * as Yup from "yup";

const banerSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان بنر حداقل باید 3 کاراکتر داشته باشه")
    .max(48, "عنوان بنر حداکثر باید 48 کاراکتر داشته باشه")
    .required("عنوان بنر را وارد نمایید"),
});

export { banerSchema };
