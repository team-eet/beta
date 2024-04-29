import Link from "next/link";
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "../Instructor/Dashboard-Section/widgets/CourseWidget";
import Axios from "axios";
import API_URL from '@/pages/constant'
import {useEffect, useState} from "react";

const EnrolledCourses = () => {
  const REACT_APP = API_URL
  const [getCourse, setcourse] = useState([]);
  useEffect(() => {
    getPurchasedCourse()
  }, [])
  const getPurchasedCourse = () => {
    if (localStorage.getItem('userData')) {
      const udata = JSON.parse(localStorage.getItem('userData')).regid
      // console.log('api called')
      Axios.get(`${REACT_APP.API_URL}/api/purchasedCourse/GetPurchasedCourse/${udata}`, {
        headers: {
          ApiKey: `${REACT_APP.API_KEY}`
        }
      })
          .then(res => {
            // console.log('api called 2')
            if (res.data) {
              console.log('My Learning', res.data)
              setcourse(res.data)
            } else {

            }
          })
          .catch(err => {
            { ErrorDefaultAlert(err) }
          })
    }
  }
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Enrolled Courses</h4>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="home-4"
              role="tabpanel"
              aria-labelledby="home-tab-4"
            >
              <div className="row g-5">
                {getCourse.map((slide, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={`course-enrolled-${index}`}
                  >
                    <CourseWidgets
                      data={slide}
                      courseStyle="two"
                      isProgress={true}
                      isCompleted={false}
                      isEdit={false}
                      showDescription={false}
                      showAuthor={false}
                    />
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
