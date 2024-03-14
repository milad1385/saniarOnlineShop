import { useMutation, useQueryClient } from "react-query";
import { sendAnswerToMsg } from "../../../services/contact";

function useAnswer(onInfo, onClose) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendAnswerToMsg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      onClose();
      onInfo({
        title: "پاسخ با موفقیت ارسال شد",
      });
    },
  });
}

export default useAnswer;
