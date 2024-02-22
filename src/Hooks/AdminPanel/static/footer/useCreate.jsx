import React from "react";
import { useMutation } from "react-query";
import { createFooterText } from "../../../../services/static";

function useCreate() {
  return useMutation({
    mutationFn: createFooterText,
    onSuccess : () =>{
        
    }
  });
}

export default useCreate;
