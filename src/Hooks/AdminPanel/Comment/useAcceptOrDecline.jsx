import { useMutation, useQueryClient } from "react-query";
import { setAcceptOrDeclineComment } from "../../../services/comment";

function useAcceptOrDecline(setInfo, info) {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => setAcceptOrDeclineComment(id, status),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["comments"] });
      info.onClose();

      setInfo({
        title: "وضعیت کامنت با موفقیت تغییر کرد",
      });
    },
  });
}

export default useAcceptOrDecline;
