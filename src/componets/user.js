import React, { Fragment } from "react";
const Userpro = ({ user }) => (
    <Fragment>
        <div className="profile">
            <img
                src="https://via.placeholder.com/150/24f355"
                alt={user.name}
            />
        </div>
        <div class="user-specs">
            <h3>{user.name}</h3>
            <p>{user.username}</p>
        </div>
    </Fragment>
);


export default Userpro