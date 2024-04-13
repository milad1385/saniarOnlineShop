import * as Yup from "yup";

const discountSchema = Yup.object().shape({
  code: Yup.string().required("کد تخفیف را وارد کنید ..."),
  percent: Yup.string().required("درصد کد تخفیف را وارد کنید ..."),
  maxUsage: Yup.string().required("حداکثر تعداد استفاده را وارد کنید ..."),
  product: Yup.string().required("محصول را انتخاب کنید"),
});

export { discountSchema };
