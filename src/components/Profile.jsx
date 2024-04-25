import React, { useState } from "react";
import Avatar from "../assets/avatar1.png";


const Profile = ({viewProfile, setViewProfile, radius= "1rem"}) => {

    const showProfile = () => {
      setViewProfile(true);
    };
    const hideProfile = () => {
      setViewProfile(false);
    };
  return (
    <div
      onClick={viewProfile ? hideProfile : showProfile}
      className={` profile overflow-hidden   cursor-pointer bg-info  w-fit h-fit`}
     style={{borderRadius: `${radius}`}}>
      <img
        src={Avatar}
        width={50}
        height={50}
        className="object-cover object-center"
      />
      {viewProfile && (
        <div
          className={`bg-background shadow-md left-7 top-12 p-10 absolute`}
        ></div>
      )}
    </div>
  );
};

export default Profile;
