import React from "react";

export const InfoBox = ({ title, img, description }) => {
  return (
    <div className="InfoBox">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="bottom-area">
          <p>Last updated 3 mins ago</p>
          <div className="heart-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <div className="profile-icon">
              <p>SA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};