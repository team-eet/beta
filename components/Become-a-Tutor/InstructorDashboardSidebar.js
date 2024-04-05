import { useRouter } from "next/router";
import SidebarData from "../../data/dashboard/instructor/siderbar.json";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const InstructorDashboardSidebar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [fname, setfname] = useState('')
  useEffect(() => {
    if(localStorage.getItem('userData')) {
      const fname = JSON.parse(localStorage.getItem('userData')).fname
      setfname(fname)
    }

      const interval = setInterval(() => {
        setPercentages((prevPercentages) => {
          const updatedPercentages = { ...prevPercentages };

          if (updatedPercentages.percentage1 < 80) {
            updatedPercentages.percentage1 += 1;
          }

          return updatedPercentages;
        });
      }, 50);

      return () => clearInterval(interval);

  }, [])

  const [percentage, setPercentages] = useState({
    percentage1: 0
  });
  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <div className={'row justify-content-between'}>
                  <div className={'col-lg-6 align-items-center'}>
                    <h6 className="rbt-title-style-2 mt-4">Welcome, {fname}</h6>
                  </div>
                  <div className={'col-lg-5'}>
                    <div className="">
                      <div
                          className=""
                      >
                        <CircularProgressbar
                            className="circle-text count"
                            strokeWidth={5}
                            value={percentage.percentage1}
                            text={`${percentage.percentage1}%`}
                            styles={buildStyles({
                              textColor: "#6b7385",
                              pathColor: "#059DFF",
                              trailColor: "#F6F6F6",
                            })}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/*<div className="col-lg-3 col-md-6 col-sm-6 mt--30 col-12">*/}
                {/*</div>*/}
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  {SidebarData &&
                      SidebarData.siderbar.map((data, index) => (
                          <li className="nav-item" key={index} role="presentation">
                            <Link
                                className={`${path === data.link ? "active" : ""}`}
                                href={data.link}
                            >
                              <i className={data.icon}/>
                              <span>{data.text}</span>
                            </Link>
                            {/*<i className={data.icon2}/>*/}
                          </li>
                      ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardSidebar;
