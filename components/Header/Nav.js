import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import {useEffect, useState} from "react";

import MenuData from "../../data/MegaMenu";

import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";

import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const router = useRouter();
<<<<<<< HEAD
  const [showDashboard, setshowDashboard] = useState(false)
=======
>>>>>>> main

  const isActive = (href) => router.pathname === href;

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setshowDashboard(true)
    }
  }, []);

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="">
          <Link
            className={`${activeMenuItem === "courses" ? "open" : ""}`}
            // onClick={() => toggleMenuItem("home")}
            href="/all-course"
          >
            Courses

          </Link>
        </li>

        <li className="">
          <Link
            className={`${activeMenuItem === "batches" ? "open" : ""}`}
            href="/all-batch"
          >
            Batches
          </Link>

        </li>
        <li className="">
          <Link
            className={`${activeMenuItem === "tutor" ? "open" : ""}`}
            href="/become-a-teacher"
          >
            Become a Tutor
          </Link>
        </li>
        <li className="">
          <Link
<<<<<<< HEAD
            href="/blog-list"
=======
            href="#"
>>>>>>> main
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
          >
            Blog
          </Link>
<<<<<<< HEAD
=======
        </li>
        <li className="">
          <Link
            href="#"
            className={`${activeMenuItem === "about" ? "open" : ""}`}
          >
            About
          </Link>
>>>>>>> main
        </li>
        <li className="">
          <Link
            href="#"
            className={`${activeMenuItem === "about" ? "open" : ""}`}
          >
            About
          </Link>
        </li>
        {showDashboard ? <li className="">
          <Link
              href="/student/student-dashboard"
              className={`${activeMenuItem === "about" ? "open" : ""}`}
          >
            My Dashboard
          </Link>
        </li> : ''}
      </ul>
    </nav>
  );
};
export default Nav;
