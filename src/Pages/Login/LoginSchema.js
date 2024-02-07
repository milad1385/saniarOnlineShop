import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "نام کاربری حداقل باید 3 کاراکتر داشته باشه")
    .max(18, "نام کاربری حداکثر باید 18 کاراکتر داشته باشه")
    .required("نام کاربری را وارد نمایید"),
  password: yup
    .string()
    .min(8, "رمز عبور حداقل باید 11 کاراکتر داشته باشه")
    .required("شماره را وارد نمایید"),
});

export { loginSchema };
