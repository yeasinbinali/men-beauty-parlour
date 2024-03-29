import { useState, useEffect } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://men-beauty-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.isAdmin) {
            console.log(data.isAdmin);
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        });
    }
  }, [email]);
  return [isAdmin];
};

export default useAdmin;
