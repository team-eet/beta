import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
// import sal from "sal.js";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
// import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";
import PageHead from "@/pages/Head";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import API_URL from "@/pages/constant";
import API_KEY from "@/pages/constant";
import {EncryptData} from "@/components/services/encrypt-decrypt";

const SingleCourse = () => {
  const router = useRouter();
  // const postId = parseInt(router.query.courseId);
  const [getcourseData, setcourseData] = useState([])
  const[getsectionItems, setsectionItems] = useState([])
  const REACT_APP = API_URL
  // let getCourse;

  const getCourse = () => {
    const url = window.location.href
    const parts = url.split("/");
    const courseId = parts[parts.length - 1];
    Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetCoursesView/${EncryptData(parseInt(courseId))}`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          if (res.data) {
            // console.log(res.data)
            if (res.data.length !== 0) {
                  setcourseData(res.data)
              }
            }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }
  // getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

  const checkMatch = getcourseData.length !== 0 ? getcourseData[0] : ''
  // console.log(checkMatch)
  // console.log(EncryptData(postId), EncryptData(0))


  const courseContentMatch = getsectionItems.length !== 0 ? getsectionItems : ''


  useEffect(() => {
      getCourse();
      // getcourseContent();
    // console.log(postId, checkMatch)
    // if (postId && checkMatch === undefined) {
    //   router.push("/course-filter-one-toggle");
    // }

    // sal({
    //   threshold: 0.01,
    //   once: true,
    // });
  }, []);

  return (
    <>
      <PageHead title="Course Details - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />
          <Cart />

          <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <CourseHead
              checkMatch={checkMatch !== undefined ? checkMatch : ""}
            />
          </div>

          <div className="rbt-course-details-area ptb--60">
            <div className="container">
              <div className="row g-5">
                <CourseDetailsOne
                  checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
                />
              </div>
            </div>
          </div>

          <CourseActionBottom
            checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
          />

          <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            <SimilarCourses
              checkMatchCourses={
                checkMatch !== undefined ? checkMatch.similarCourse : ""
              }
            />
          </div>

          <BackToTop />
          {/*<Separator />*/}
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourse;
