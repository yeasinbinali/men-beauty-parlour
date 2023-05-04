import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUser = () => {
  const url = "http://localhost:5000/users";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(users);
  return (
    <div className="my-10">
        <h2 className='text-3xl text-center mb-4'>All <strong className='text-primary font-bold'>Users</strong></h2>
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length === 0 ? (
            <p className="text-center text-2xl">No user</p>
          ) : (
            users.map((user, i) => {
                console.log(user);
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
