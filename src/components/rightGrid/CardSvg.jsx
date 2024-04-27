import { tailwindEffect } from "../../data/data";
import React from "react";

const CardSvg = ({name, code, date}) => {
  return (
    <svg
    className={`${tailwindEffect} hover:rotate-[360deg]`}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 850 850"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlnsXodm="http://www.corel.com/coreldraw/odm/2003"
  >
    <defs>
      {/* ... font definitions ... */}
      <clipPath id="id0">
        <path d="M108.11 197.08l633.77 0c27.96,0 50.84,22.88 50.84,50.84l0 354.17c0,27.96 -22.88,50.84 -50.84,50.84l-633.77 0c-27.96,0 -50.84,-22.88 -50.84,-50.84l0 -354.17c0,-27.96 22.88,-50.84 50.84,-50.84z" />
      </clipPath>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <path
        fill="#00C3F8"
        d="M108.11 197.08l633.77 0c27.96,0 50.84,22.88 50.84,50.84l0 354.17c0,27.96 -22.88,50.84 -50.84,50.84l-633.77 0c-27.96,0 -50.84,-22.88 -50.84,-50.84l0 -354.17c0,-27.96 22.88,-50.84 50.84,-50.84z"
      />
      <g clipPath="url(#id0)">
        <g id="_2604826930384" transform="scale(0.12)">
          <path
            id="1"
            fill="#FFC005"
            d="M-1130.29 3733.15c1291.28,-321.97 2910.76,619.26 4441.01,437.57 2412.56,-286.44 4649.07,-563.37 4989.32,951.99l-482.96 2236.84 -8896.53 0 -50.84 -3626.4z"
          />
          <path
            fill="#3326AE"
            d="M-689.69 1970.8c1443.06,-568.29 1676.2,864.28 2446.33,1246.83 944.35,469.11 1993.89,300.83 2634.27,1483.13 247.79,457.48 153.39,1828.45 104.81,2438.5l-1525.12 1142.98 -3660.28 -1101.48 0 -5209.96z"
          />
        </g>
      </g>
      <path
        fill="white"
        fillOpacity="0.549020"
        d="M136.66 267l91.81 0c5.04,0 9.17,4.13 9.17,9.17l0 52.84c0,5.04 -4.13,9.17 -9.17,9.17l-91.81 0c-5.04,0 -9.17,-4.13 -9.17,-9.17l0 -52.84c0,-5.04 4.13,-9.17 9.17,-9.17z"
      />
      <g id="_2604826928128">
        <circle fill="white" cx="142.85" cy="455.68" r="6.34" />
        <circle fill="white" cx="176.94" cy="455.68" r="6.34" />
        <circle fill="white" cx="206.94" cy="455.68" r="6.34" />
        <circle fill="white" cx="236.94" cy="455.68" r="6.34" />
      </g>
      <g id="_2604826928032">
        <circle fill="white" cx="296.93" cy="455.68" r="6.34" />
        <circle fill="white" cx="331.01" cy="455.68" r="6.34" />
        <circle fill="white" cx="361.01" cy="455.68" r="6.34" />
        <circle fill="white" cx="391.01" cy="455.68" r="6.34" />
      </g>
      <g id="_2604826927936">
        <circle fill="white" cx="451" cy="455.68" r="6.34" />
        <circle fill="white" cx="485.08" cy="455.68" r="6.34" />
        <circle fill="white" cx="515.08" cy="455.68" r="6.34" />
        <circle fill="white" cx="545.08" cy="455.68" r="6.34" />
      </g>
      <text
        x="612.12"
        y="467.46"
        fill="white"
        fontWeight="bold"
        fontSize="33.33px"
        fontFamily="Arial"
      >
        {code}
      </text>
      <text
        x="618.61"
        y="573.67"
        fill="white"
        fontWeight="bold"
        fontSize="33.33px"
        fontFamily="Arial"
      >
        {date}
      </text>
      <text
        x="136.52"
        y="573.7"
        fill="white"
        fontWeight="bold"
        fontSize="30.56px"
        fontFamily="Arial"
      >
        {name}
      </text>
    </g>
  </svg>
  );
};

export default CardSvg;
