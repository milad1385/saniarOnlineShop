import { useMutation, useQueryClient } from "react-query";
import { registerNewUser } from "../../services/userApi";

function useRegister() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export default useRegister;
