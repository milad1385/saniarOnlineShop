import * as Yup from "yup";

const ticketSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "عنوان تیکت حداقل باید 3 کاراکتر داشته باشه")
    .max(40, "عنوان تیکت حداکثر باید 40 کاراکتر داشته باشه")
    .required("عنوان تیکت را وارد نمایید"),
  body: Yup.string()
    .min(3, "متن تیکت حداقل باید 3 کاراکتر داشته باشه")
    .max(800, "متن تیکت حداکثر باید 800 کاراکتر داشته باشه")
    .required("متن تیکت را وارد نمایید"),
  department: Yup.string().required("دپارتمان مورد نظر را انتخاب کنید"),
});

export { ticketSchema };
