import Image from "next/image";

import UserData from "../../../data/user.json";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import nouser from '../../../public/images/testimonial/default-avatar-profile-icon-of-social-media-user-vector.jpg'

const User = ({fname, lname, profile}) => {
  // console.log(UserData)
  const router = useRouter()

const handleLogout = () =>{
  localStorage.removeItem('userData')
  localStorage.removeItem('userUpdateData')

  router.push('/login')
}
  return (
    <div className="rbt-user-menu-list-wrapper">
      {UserData &&
        UserData.user.map((person, index) => (
          <div className="inner">
            <div className="rbt-admin-profile">
              <div className="admin-thumbnail">
                {profile === "" ? <>

                  <Image
                      src={nouser}
                        width={43}
                        height={43}
                      // alt="User Images"
                  />
                </> : <>
                  <Image
                      src={profile}
                      width={43}
                      height={43}
                      // alt="User Images"
                  />
                </>}

              </div>
              <div className="admin-info">
                <span className="name">{fname} {lname}</span>
                <Link
                  className="rbt-btn-link color-primary"
                  href="/instructor/instructor-profile"
                >
                  View Profile
                </Link>
              </div>
            </div>
            {/*<ul className="user-list-wrapper">*/}
            {/*  {person.userList.map((list, innerIndex) => (*/}
            {/*    <li key={innerIndex}>*/}
            {/*      <Link href={list.link}>*/}
            {/*        <i className={list.icon}></i>*/}
            {/*        <span>{list.text}</span>*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  ))}*/}
            {/*</ul>*/}
            <hr className="mt--10 mb--10" />
            <ul className="user-list-wrapper">
              <li>
                <Link href="#">
                  <i className="feather-book-open"></i>
                  <span>Getting Started</span>
                </Link>
              </li>
            </ul>
            <hr className="mt--10 mb--10" />
            <ul className="user-list-wrapper">
              <li>
                <Link href="/instructor/instructor-settings">
                  <i className="feather-settings"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleLogout}>
                  <i className="feather-log-out"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default User;
