import * as Yup from "yup";

const commentSchema = Yup.object().shape({
  answer: Yup.string()
    .min(3, "کامنت حداقل باید 3 کاراکتر داشته باشه")
    .max(400, "کامنت حداکثر باید 400 کاراکتر داشته باشه")
    .required("کامنت را وارد نمایید"),
});

export { commentSchema };
