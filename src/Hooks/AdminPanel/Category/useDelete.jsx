import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteCategory } from "../../../services/categoryApi";

function useDelete(onInfo) {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["categories"] });
      onInfo({
        title: "دسته بندی با موفقیت حذف شد",
      });
    },
  });
}

export default useDelete;
