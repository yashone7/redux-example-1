import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteUser, fetchAllUsers } from "../redux/actions/userAction";

export const User = ({ users, fetchAllUsers, deleteUser }) => {
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  console.log(users);

  const handleDelete = (id) => {
    console.log("button clicked", id);
    deleteUser(id);
  };

  return (
    <div className="container">
      {users.length > 0 &&
        users.map((user) => {
          return (
            <div className="card m-5" key={user.id}>
              <div className="card-header">
                <p className="card-header-title">{user.name}</p>
              </div>
              <div className="card-footer m-2">
                <button
                  className="button is-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

export default connect(mapStateToProps, { fetchAllUsers, deleteUser })(User);
