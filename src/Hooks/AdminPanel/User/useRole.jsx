import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { changeUserRole } from "../../../services/userApi";

function useRole(onClose, onInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUserRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["lastestUser"] });
      onClose();
      onInfo({
        title: "نقش با موفقیت ویرایش شد",
      });
    },
  });
}

export default useRole;
