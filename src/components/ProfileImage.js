import React from "react";

const ProfileImage = (props) => {
  return (
    <div>
      <img src={props.image} className="profile" alt="dog2" />
    </div>
  );
};

export default ProfileImage;
