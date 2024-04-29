import Link from "next/link";

import { useSelector } from "react-redux";

import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";
import localFont from "next/dist/compiled/@next/font/dist/local";
import UserData from "@/data/user.json";
import {useEffect, useState} from "react";

const HeaderRightTwo = ({ btnClass, btnText, userType }) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();

  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [profile, setprofile] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  useEffect(() => {
    if(localStorage.getItem('userData')) {
      setShowLogin(false)
      // alert('hello')
      const fname = JSON.parse(localStorage.getItem('userData')).fname
      const lname = JSON.parse(localStorage.getItem('userData')).lname
      const profile = JSON.parse(localStorage.getItem('userData')).profile

      setfname(fname)
      setlname(lname)
      setprofile(profile)
    } else {
      setShowLogin(true)
    }

  },[])

  const { total_items } = useSelector((state) => state.CartReducer);

  return (
    <div className="header-right">
      <ul className="quick-access">
        <li className="access-icon">
          <Link
            className={`search-trigger-active rbt-round-btn ${
              search ? "" : "open"
            }`}
            href="#"
            onClick={() => setSearch(!search)}
          >
            <i className="feather-search"></i>
          </Link>
        </li>

        <li className="access-icon rbt-mini-cart">
          <Link
            className="rbt-cart-sidenav-activation rbt-round-btn"
            href="#"
            onClick={() => setCart(!cartToggle)}
          >
            <i className="feather-shopping-cart"></i>
            <span className="rbt-cart-count">{total_items}</span>
          </Link>
        </li>

        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          {!showLogin ? <>
            <Link className={`${btnClass}`} href="">
              {fname.length > 10 ? <>
              <span data-text={`${btnText}`}> <i className="feather-user"></i>{fname.substr(0, 10)} ...
                 </span>
              </> : <>
                 <span data-text={`${btnText}`}><i className="feather-user"></i>{fname}
            </span>
              </>}

            </Link>
            <User fname={fname} lname={lname} profile={profile}/>
          </> : <>
            <Link className={`rbt-btn btn-border-gradient  ${btnClass}`} href="/login">
              <span data-text={`${btnText}`}>{userType}</span>
            </Link>
          </>}

        </li>

        {/*<li className="access-icon rbt-user-wrapper d-block d-xl-none">*/}
        {/*  <Link className="rbt-round-btn" href="#">*/}
        {/*    <i className="feather-user"></i>*/}
        {/*  </Link>*/}
        {/*  <User />*/}
        {/*</li>*/}
      </ul>

      {!showLogin ? <></> : <>
        <div className="rbt-btn-wrapper d-none d-xl-block">
          <Link className={`rbt-btn btn-gradient hover-icon-reverse radius-round ${btnClass}`} href="/register">
            <span data-text={`${btnText}`}>{btnText}</span>
          </Link>
        </div>
      </>}


      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
              className="hamberger-button rbt-round-btn"
              onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightTwo;
