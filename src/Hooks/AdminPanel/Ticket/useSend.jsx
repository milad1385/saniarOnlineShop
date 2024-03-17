import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { sendNewTicket } from "../../../services/ticket";

function useSend() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendNewTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [""] });
    },
  });
}

export default useSend;
