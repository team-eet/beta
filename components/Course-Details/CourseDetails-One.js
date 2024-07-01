import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Viedo from "./Course-Sections/Viedo";
import Axios from "axios";
import {EncryptData} from "@/components/services/encrypt-decrypt";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import {useEffect, useState} from "react";
import API_URL from "@/pages/constant";
import API_KEY from "@/pages/constant";
import {useRouter} from "next/router";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const CourseDetailsOne = ({ checkMatchCourses }) => {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 9000)
  }, []);
  console.log(checkMatchCourses)
  return (
    <>
      <div className="col-lg-8 mt-0">
        <div className="course-details-content">


          <div className="rbt-inner-onepage-navigation sticky-top">
            {isLoading ? <>
              <Skeleton height={50} />
            </> : <>
              <CourseMenu />
            </>}
          </div>


          {isLoading ? <>
            <Skeleton height={200} />
          </> : <>
            {checkMatchCourses && checkMatchCourses.sFullDesc ?
                <Overview checkMatchCourses={checkMatchCourses.sFullDesc} /> : ''
            }
          </>
          }


          <div
            className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
            id="coursecontent"
          >
            {isLoading ? <>
              <Skeleton height={200} />
            </> : <>
              <Content />
            </>}

          </div>

          <div
            className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
            id="details"
          >
            <div className="row g-5">
              {checkMatchCourses.sPrerequisite &&
                  <Requirements
                    checkMatchCourses={checkMatchCourses.sPrerequisite}
                  />
              }
            </div>
          </div>
          <div
            className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
            id="intructor"
          >
            {checkMatchCourses &&

                <Instructor checkMatchCourses={checkMatchCourses} />
            }
          </div>
          <div
            className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
            id="review"
          >
            <Review />
          </div>

          {/*{checkMatchCourses &&*/}
          {/*  checkMatchCourses.featuredReview.map((data, index) => (*/}
          {/*    <Featured {...data} key={index} coursesFeatured={data} />*/}
          {/*  ))}*/}
        </div>
        {/*<div className="related-course mt--60">*/}
        {/*  {checkMatchCourses &&*/}
        {/*    checkMatchCourses.relatedCourse.map((data, index) => (*/}
        {/*      <RelatedCourse {...data} key={index} checkMatchCourses={data} />*/}
        {/*    ))}*/}
        {/*</div>*/}
      </div>

      <div className="col-lg-4">

        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            {isLoading ? <>
              <Skeleton height={700} />
            </> : <>
              <Viedo checkMatchCourses={checkMatchCourses && checkMatchCourses} />
            </>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
