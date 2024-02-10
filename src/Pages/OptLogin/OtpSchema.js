import * as Yup from "yup";

const otpSchema = Yup.object().shape({
  phone: Yup.string()
    .min(11, "شماره حداقل باید 11 کاراکتر داشته باشه")
    .max(11, "شماره حداکثر باید 11 کاراکتر داشته باشه")
    .required("شماره را وارد نمایید"),
  email: Yup.string()
    .email("ایمیل وارد شده معتبر نمی‌باشد")
    .min(10, "ایمیل حداقل باید 10 کاراکتر داشته باشه")
    .max(30, "ایمیل حداکثر باید 30 کاراکتر داشته باشه")
    .required("ایمیل را وارد نمایید"),
});

export { otpSchema };
