import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { setAcceptOrDeclineBaner } from "../../../services/banerApi";

function useAcceptOrDecline() {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: setAcceptOrDeclineBaner,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["baners"] });
    },
  });
}

export default useAcceptOrDecline;
