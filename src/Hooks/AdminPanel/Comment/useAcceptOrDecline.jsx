import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { setAcceptOrDeclineComment } from "../../../services/comment";

function useAcceptOrDecline() {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => setAcceptOrDeclineComment(id, status),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

export default useAcceptOrDecline;
