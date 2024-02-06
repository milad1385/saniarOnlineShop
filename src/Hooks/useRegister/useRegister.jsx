import { useMutation } from "react-query";
import { registerNewUser } from "../../services/userApi";

function useRegister() {
  return useMutation({
    mutationFn: registerNewUser,
  });
}

export default useRegister;
