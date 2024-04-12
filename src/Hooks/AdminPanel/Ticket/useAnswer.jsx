import { useMutation, useQueryClient } from "react-query";
import { sendAnswerToTicket } from "../../../services/ticket";
function useAnswer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendAnswerToTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allTickets"] });
      queryClient.invalidateQueries({ queryKey: ["ticket-answers"] });
    },
  });
}

export default useAnswer;
