import { useMutation, useQueryClient } from "react-query";
import { editUser } from "../../../services/userApi";

function useEdit(onClose, onInfo ) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      queryClient.invalidateQueries({ queryKey: ["lastestUser"] });
      onClose();
      onInfo({
        title: "کاربر با موفقیت ویرایش شد",
      });
    },
  });
}

export default useEdit;
