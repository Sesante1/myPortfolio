import React from "react";

const Footer = () => {
  return (
    <footer className="my-10 md:mt-20 mt-10 text-white-50 px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Jomel Sesante. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
