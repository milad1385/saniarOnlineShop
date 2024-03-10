import { useMutation, useQueryClient } from "react-query";
import { editCommentBody } from "../../../services/comment";
import toast from "react-hot-toast";

function useEdit(onClose, onSuccessInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ body, id }) => editCommentBody(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      onClose();
      // setMsg("کامنت با موفقیت آپدیت شد");
      // setSuccess(true);
      onSuccessInfo({
        title: "کامنت با موفقیت آپدیت شد",
      });
    },
  });
}

export default useEdit;
