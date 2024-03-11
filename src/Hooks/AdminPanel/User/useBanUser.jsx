import { useMutation } from "react-query";
import { banUser } from "../../../services/userApi";

function useBanUser(setSuccessInfo, info) {
  return useMutation({
    mutationFn: banUser,
    onSuccess: () => {
      info.onClose();
      setSuccessInfo({
        title: "کاربر با موفقیت بن شد",
      });
    },
  });
}

export default useBanUser;
