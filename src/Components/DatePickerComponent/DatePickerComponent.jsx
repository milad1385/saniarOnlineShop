import React from "react";
import DatePicker from "react-multi-date-picker";
import { useForm, Controller } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
function DatePickerComponent({ onSubmit, setDate, setTime }) {
  const { control, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div>
        <Controller
          control={control}
          name="date"
          rules={{ required: true }} //optional
          render={({
            field: { onChange, name, value },
            fieldState: { invalid, isDirty }, //optional
            formState: { errors },
          }) => (
            <>
              <DatePicker
                value={value || ""}
                onChange={(date, value) => {
                  onChange(date?.isValid ? date : "");
                  const fullInfoArr = value.validatedValue[0].split(" ");
                  setDate(fullInfoArr[0]);
                  setTime(fullInfoArr[1]);
                }}
                plugins={[<TimePicker hideSeconds  position="bottom" />]}
                format={"YYYY/MM/DD HH:mm"}
                calendar={persian}
                locale={persian_fa}
              />
              {errors && errors[name] && errors[name].type === "required" && (
                <span>your error message !</span>
              )}
            </>
          )}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white mt-5 w-full font-DanaMedium p-2 rounded-md shadow-blue"
      >
        تایید تاریخ
      </button>
    </form>
  );
}

export default DatePickerComponent;
