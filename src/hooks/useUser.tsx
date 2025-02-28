import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.actions";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersAction(1).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsersAction(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const users = await loadUsersAction(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,
    
    // actions
    nextPage,
    prevPage,
  };
};

export default useUser;
