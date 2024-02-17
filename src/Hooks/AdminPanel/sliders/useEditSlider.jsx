import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editSlider } from "../../../services/slider";

function useEditSlider() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editSlider,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sliders"] });
    },
  });
}

export default useEditSlider;
