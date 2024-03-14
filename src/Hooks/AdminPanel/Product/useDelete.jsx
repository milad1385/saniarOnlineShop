import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "../../../services/product";

function useDelete(onInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onInfo({
        title: "محصول با موفقیت حذف شد",
      });
    },
  });
}

export default useDelete;
