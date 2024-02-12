import { useQuery } from "react-query";
import { getAllUsers } from "../../../services/userApi";
import { getUserToken } from "../../../Utils/Funcs/utils";

function useGetUsers(page) {
  return useQuery(["users",page], () => getAllUsers(getUserToken() , page));
}

export default useGetUsers;
