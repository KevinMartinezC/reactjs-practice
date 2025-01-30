import { useEffect, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.actions";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsersAction(1).then((users) => setUsers(users));
  }, []);

  return { users };
};

export default useUser;
