import { useRouter } from "next/router";
import SidebarData from "../../data/dashboard/instructor/siderbar.json";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import API_URL from "@/pages/constant";

const InstructorDashboardSidebar = ({ url }) => {
  const router = useRouter();
  const path = router.pathname;
  const [fname, setfname] = useState('')
  const REACT_APP = API_URL
  const [enableMenu,setenableMenu] = useState(false)
  const [tutorcnt, settutorcnt] = useState('')

  const [postId, setpostID] = useState('')
  useEffect(() => {
    const url = window.location.href
    const parts = url.split("/");
    const currentPostId = parts[parts.length - 1];
    // console.log(postId)
    // setUrl(postId)
    setpostID(currentPostId);

    const element = document.getElementById('other-sidebar')
    // if (element.classList.contains('blur-bg') && currentPostId === 'basics') {
    //   // Remove 'active' class
    //   element.classList.remove('blur-bg');
    // } else if(element.classList.contains('blur-bg') && currentPostId === 'profile-photo') {
    //   element.classList.remove('blur-bg');
    // }
    // console.log(postId)
    // if(postId === 'basics'){
    //   alert('basics')
    // }
    if(localStorage.getItem('userData')) {
      const fname = JSON.parse(localStorage.getItem('userData')).fname
      setfname(fname)
      Axios.get(`${REACT_APP.API_URL}/api/TutorBasics/GetTutorProfile/${JSON.parse(localStorage.getItem('userData')).regid}`, {
        headers: {
          ApiKey: `${REACT_APP.API_KEY}`
        }
      })
          .then(res => {
            // console.log(res.data)
            // if(res.data.)
            settutorcnt(res.data[0].cnt)
            setenableMenu()
          })
          .catch(err => {
            { ErrorDefaultAlert(err) }
          })
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

              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  {SidebarData &&
                      SidebarData.siderbar.map((data, index) => {
                          return (
                              <>
                                {tutorcnt === 0 ? <>
                                  {index === 0 ? <>
                                    <li className="nav-item" key={index} role="presentation">
                                      <Link
                                          className={`${path === data.link ? "active" : "blur-bg"}`}
                                          href={data.link}
                                      >
                                        <i className={data.icon}/>
                                        <span>{data.text}</span>
                                      </Link>
                                      {/*<i className={data.icon2}/>*/}
                                    </li>
                                  </> : <>
                                    <li className="nav-item" key={index} role="presentation">
                                    <span id={'other-sidebar'}
                                          className={`${path === data.link ? "active" : "blur-bg"} `}
                                    >
                                      <i className={data.icon}/>
                                      <span>{data.text}</span>
                                    </span>
                                      {/*<i className={data.icon2}/>*/}
                                    </li>
                                  </>}
                                </> : <>
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
                                </>}

                              </>
                          )

                      })}
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
