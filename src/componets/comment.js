import React from "react";
const Comments = ({ val }) => (
    val.map(data => <div className="comment">
        <div className="user">
        <div className="title">{data.name}</div>
            <p>{data.email}</p>
        </div>
        <p>{data.body}</p>
    </div>)
);


export default Comments