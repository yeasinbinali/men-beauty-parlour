import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const uid = user?.user.uid;
    const userEmail = user?.user?.email;
    const userPhoto = user?.user.photoURL;
    const currentUser = {
      uid: uid,
      userEmail: userEmail,
      userPhoto: userPhoto,
    };
    if (uid) {
      fetch(`https://men-beauty-server.vercel.app/users/${userEmail}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.accessToken;

          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          console.log(data);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
