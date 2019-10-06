import React from "react";

const Users = ({ users }) => {
  return (
    <div className="row">
      {users
        ? users.map(user => (
            <div className="card col-md-3">
              <img
                src={
                  user.photos.small
                    ? user.photos.small
                    : "https://images.assetsdelivery.com/compings_v2/4zevar/4zevar1604/4zevar160400009.jpg"
                }
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <button className="btn btn-primary">Follow</button>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Users;
