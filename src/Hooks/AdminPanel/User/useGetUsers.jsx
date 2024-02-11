import { useQuery } from "react-query";
import { getAllUsers } from "../../../services/userApi";
import { getUserToken } from "../../../Utils/Funcs/utils";

function useGetUsers() {
  return useQuery(["users"], () => getAllUsers(getUserToken()));
}

export default useGetUsers;
