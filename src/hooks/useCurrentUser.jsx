import { useState, useEffect } from "react";

export const useCurrentUser = (userId) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  }, [userId]);

  return { currentUser, setCurrentUser };
};
