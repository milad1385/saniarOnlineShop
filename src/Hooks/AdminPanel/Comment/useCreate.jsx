import { useMutation, useQueryClient } from "react-query";
import { createNewComment } from "../../../services/comment";

function useCreate(onClose, onInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      onClose?.();
      onInfo?.({
        title: "پاسخ با موفقیت ارسال شد",
      });
    },
  });
}

export default useCreate;
