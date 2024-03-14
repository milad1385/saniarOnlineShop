import { useMutation, useQueryClient } from "react-query";
import { sendNewContact } from "../../../services/contact";

function useSend() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendNewContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}

export default useSend;
