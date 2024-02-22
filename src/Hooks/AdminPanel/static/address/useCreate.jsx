import React from "react";
import { useMutation } from "react-query";
import { createSiteAdress } from "../../../../services/static";

function useCreate() {
  return useMutation({
    mutationFn: createSiteAdress,
  });
}

export default useCreate;
