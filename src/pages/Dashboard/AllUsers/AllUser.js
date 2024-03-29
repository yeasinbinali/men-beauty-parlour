import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const url = "https://men-beauty-server.vercel.app/users";

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you deleting ${user?.name}`);
    if (agree) {
      fetch(`https://men-beauty-server.vercel.app/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("User deleted successfully!");
            refetch();
          }
        });
    }
  };

  const handleAdmin = (id) => {
    fetch(`https://men-beauty-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Make admin successfully!");
          refetch();
        }
      });
  };

  return (
    <div className="my-5 px-3">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center mb-4">
        All <strong className="text-primary font-bold">Users</strong>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length === 0 ? (
              <p className="text-center text-2xl">No user</p>
            ) : (
              users.map((user, i) => {
                return (
                  <tr key={user._id}>
                    <td>{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user?.role !== "admin" ? (
                        <button
                          onClick={() => handleAdmin(user._id)}
                          className="btn btn-primary text-white btn-sm"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <p className="text-primary">Admin</p>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-accent text-white btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
