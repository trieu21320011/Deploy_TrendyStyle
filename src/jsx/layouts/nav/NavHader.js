import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            <img className="logo-abbr" src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/330925347_1070758440522634_2582025164604326166_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=45n5hD3GGZcAX-K2ZiZ&tn=HFOK8Ti_JPQI2wtH&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDxSA0cP_FaFwc92enxSEtplOxNOhAgLgQuxvUQyub0lg&oe=63F24C74" alt="" />
         </Link>

         <div className="nav-control" onClick={() => setToggle(!toggle)}>
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
