import * as Yup from "yup";

const featureSchema = Yup.object().shape({
  featureName: Yup.string()
    .min(2, "نام ویژگی حداقل باید 3 کاراکتر داشته باشه")
    .max(30, "نام ویژگی حداکثر باید 30 کاراکتر داشته باشه")
    .required("نام ویژگی را وارد نمایید"),
  featureValue: Yup.string()
    .min(2, "مقدار ویژگی حداقل باید 3 کاراکتر داشته باشه")
    .max(48, "مقدار ویژگی حداکثر باید 16 کاراکتر داشته باشه")
    .required("مقدار ویژگی را وارد نمایید"),
  product: Yup.string().required("نام محصول را انتخاب کنید"),
});

export { featureSchema };
