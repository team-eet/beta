
import { useRouter } from "next/router";
import SidebarData from "../../data/dashboard/student/siderbar.json";
<<<<<<< HEAD
import {useEffect, useState} from "react";
=======
>>>>>>> main

const StudentDashboardSidebar = () => {
    const router = useRouter();
    const path = router.pathname;
<<<<<<< HEAD
    const [sFname, setsFname] = useState('')
    const [sLname, setsLname] = useState('')

    useEffect(() => {
        if(localStorage.getItem('userData')) {
            setsFname(JSON.parse(localStorage.getItem('userData')).fname)
            setsLname(JSON.parse(localStorage.getItem('userData')).lname)
        }
    }, []);
=======
>>>>>>> main
  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
<<<<<<< HEAD
                <h6 className="rbt-title-style-2">Welcome, {sFname} {sLname}</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData && SidebarData.siderbar.map((data, index) => (
=======
                <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData.siderbar.slice(0, 7).map((data, index) => (
>>>>>>> main
                      <li className="nav-item" key={index} role="presentation">
                        <a
                          className={`${path === data.link ? "active" : ""}`}
                          href={data.link}
                        >
                          <i className={data.icon} />
                          <span>{data.text}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
<<<<<<< HEAD
=======

              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">User</h6>
              </div>

              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData.siderbar.slice(7, 10).map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className={`${path === data.link ? "active" : ""}`}
                        >
                          <i className={data.icon} />
                          <span>{data.text}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboardSidebar;
