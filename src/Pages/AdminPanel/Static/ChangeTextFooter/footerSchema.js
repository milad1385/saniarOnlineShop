import * as Yup from "yup";

const footerSchema = Yup.object().shape({
  text: Yup.string()
    .min(20, "متن فوتر حداقل باید 20 کاراکتر داشته باشه")
    .max(1000, "متن فوتر حداکثر باید 1000 کاراکتر داشته باشه")
    .required("متن فوتر را وارد نمایید"),
});

export { footerSchema };
