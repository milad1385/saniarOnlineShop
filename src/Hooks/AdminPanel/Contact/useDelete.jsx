import { useMutation, useQueryClient } from "react-query";
import { deleteContact } from "../../../services/contact";

function useDelete(onInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });

      onInfo({
        title: "پیغام با موفقیت حذف شد",
      });
    },
  });
}

export default useDelete;
