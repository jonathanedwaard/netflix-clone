import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-10">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl mb-4 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <p className="text-white">
        Copyright © 2024 by NETFLIX. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
