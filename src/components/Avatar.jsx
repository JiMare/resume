import React from "react";

export const Avatar = ({ url }) => {
  return (
    <div className="avatar">
      <div className="userBlock">
        <div className="profile">
          <img src={url} alt="avatar" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};
