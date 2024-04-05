import { useEffect, useState } from "react";
import Link from "next/link";
import sal from "sal.js";
import CategoryOne from "../Category/CategoryOne";
import MainDemoBanner from "./MainDemoBanner";
import Card from "../Cards/Card";
import AboutTwo from "../Abouts/About-Two";

import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import EventCarouse from "../Events/EventCarouse";

import API_URL from "@/pages/constant";
import Axios from "axios";
import { SuccessAlert, SuccessAlert2, ErrorDefaultAlert } from "@/components/services/SweetAlert";
import userImg from '../../public/images/about/eetgirl.png'
import API_KEY from '../../pages/constant'
import Image from "next/image";

import NewsletterTwo from "../Newsletters/Newsletter-Two";

const MainDemo = () => {

  const REACT_APP = API_URL
  const [getcourseData, setcourseData] = useState([])
  const [getcoursecount, setcoursecount] = useState(0)
  const [getbatchData, setbatchData] = useState([])
  const [getbatchcount, setbatchcount] = useState(0)
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
    getCourse();
    getBatch();
  }, []);

  const getCourse = () => {
    Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetCoursesMem/1`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          if (res.data) {
            // console.log(res.data)
            if (res.data.length !== 0) {
              setcourseData(res.data)
              setcoursecount(res.data[0]['remain_course_count'])
            }
          }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }

  const getBatch = () => {
    Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetBatchCoursesMem/1`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          if (res.data) {
            // console.log(res.data)
            if (res.data.length !== 0) {
              setbatchData(res.data)
              setbatchcount(res.data[0]['remain_batch_count'])
            }
          }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner/>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row row--30 gy-5 align-items-center">
              <div className="col-lg-6 col-xl-5">
                <div className="thumbnail rbt-shadow-box">
                  <Image
                      src={userImg}
                      width={372}
                      height={396}
                      alt="Course Image"
                  />
                  {/*<img className="w-100 radius-10" src={userImg} alt="Card image"></img>*/}
                </div>
              </div>

              <div className="col-lg-6 col-xl-7">
                <div className="section-title">
                  <h2 className="title">What you will learn</h2>
                  <p className="b1 mt--15">Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.</p>
                </div>


                <div className="row g-5">

                  <div className="col-lg-6">
                    <div className="section-title subtitle mt-3 mb-3">
                      <h5 className="title">What Course Includes?</h5>
                    </div>
                    <ul className="rbt-list-style-1">
                      <li><i className="feather-check"></i>Self Learning.</li>
                      <li><i className="feather-check"></i>Recorded video sessions.</li>
                      <li><i className="feather-check"></i>Activity + Practice.</li>
                      <li><i className="feather-check"></i>Test for self-evaluation .</li>
                    </ul>
                    <div className="read-more-btn mt--40">
                      <a className="rbt-moderbt-btn" href="#">
                        <span className="moderbt-btn-text">Explore Courses</span>
                        <i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="section-title subtitle mt-3 mb-3">
                      <h5 className="title">What Batch Includes?</h5>
                    </div>
                    <ul className="rbt-list-style-1">
                      <li><i className="feather-check"></i>Learning with tutor.</li>
                      <li><i className="feather-check"></i>Live sessions.</li>
                      <li><i className="feather-check"></i>Activity + Practice.</li>
                      <li><i className="feather-check"></i>Test for self-evaluation.</li>
                    </ul>
                    <div className="read-more-btn mt--40">
                      <a className="rbt-moderbt-btn" href="#">
                        <span className="moderbt-btn-text">Explore Batches</span>
                        <i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="rbt-course-area bg-color-extra2 p-5">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br/> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              {getcourseData && getcourseData.map((data, index) => {
                return (
                    <>
                      <div
                          className={`col-lg-4 mt-3`}
                          data-sal-delay="150"
                          data-sal="data-up"
                          data-sal-duration="800"
                          key={index}
                      >
                        <div className="rbt-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <Link href={`/course-details/${data.nCId}`}>
                              <img src={data.sImagePath} alt="Card image"></img>
                              {/*{data.offPrice > 0 ? (*/}
                              {/*    <div className="rbt-badge-3 bg-white">*/}
                              {/*      <span>-{data.offPrice}%</span>*/}
                              {/*      <span>Off</span>*/}
                              {/*    </div>*/}
                              {/*) : (*/}
                              {/*    ""*/}
                              {/*)}*/}
                            </Link>
                          </div>
                          <div className="rbt-card-body">
                            <div className="rbt-card-top">
                              <div className="rbt-review">
                                <div className="rating">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <span className="rating-count">
                      ({data.user_rate_cnt} Reviews)
                    </span>
                              </div>
                              <div className="rbt-bookmark-btn">
                                <Link className="rbt-round-btn" title="Bookmark" href="#">
                                  <i className="feather-bookmark"></i>
                                </Link>
                              </div>
                            </div>

                            <h4 className="rbt-card-title">
                              <Link href={`/course-details/${data.nCId}`}>
                                {data.sCourseTitle}
                              </Link>
                            </h4>

                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>
                                {data.lesson_cnt} Lessons
                              </li>
                              <li>
                                <i className="feather-book"></i>
                                {data.section_cnt} Sections
                              </li>
                              <li>
                                <i className="feather-users"></i>
                                {data.enroll_cnt} Students
                              </li>
                            </ul>
                            {data.sShortDesc.length > 165 ?
                                <p className="rbt-card-text">{data.sShortDesc.substring(0, 110)}...</p> :
                                <p className="rbt-card-text">{data.sShortDesc}</p>
                            }
                            {/*{isUser ? (*/}
                            <div className="rbt-author-meta mb--10">
                              {/*<div className="rbt-avater">*/}
                              {/*  <Link href={`/profile/${data.nCId}`}>*/}
                              {/*    <Image*/}
                              {/*        src={data.userImg}*/}
                              {/*        width={33}*/}
                              {/*        height={33}*/}
                              {/*        alt="Sophia Jaymes"*/}
                              {/*    />*/}
                              {/*  </Link>*/}
                              {/*</div>*/}
                              <div className="rbt-author-info">
                                By{" "}
                                <Link href={`/profile/${data.nCId}`}>{data.sFName} {data.sLName}</Link>{" "}
                                In <Link href="#">{data.sCategory}</Link>
                              </div>
                            </div>
                            {/*) : (*/}
                            {/*    ""*/}
                            {/*)}*/}
                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price">₹{data.dAmount}</span>
                                <span className="off-price">₹{data.nCourseAmount}</span>
                              </div>
                              {/*{data.button ? (*/}
                              <Link
                                  className="rbt-btn-link left-icon"
                                  href={`/course-details/${data.nCId}`}
                              >
                                <i className="feather-shopping-cart"></i> Add To Cart
                              </Link>
                              {/*) : (*/}

                              {/*<Link*/}
                              {/*    className="rbt-btn-link"*/}
                              {/*    href={`/course-details/${data.nCId}`}*/}
                              {/*>*/}
                              {/*  Learn More<i className="feather-arrow-right"></i>*/}
                              {/*</Link>*/}
                              {/*)}*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                )
              })}


            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                      className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                      href="/all-course"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course ({getcoursecount})</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-course-area bg-color-extra2 p-5">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Batch
                  </span>
                  <h2 className="title">
                    Histudy Batch student <br/> can join with us.
                  </h2>
                </div>
              </div>
            </div>

            <div className="row row--15 mt-5">
              <div className="">
                <div className="container">
                  <div className="rbt-course-grid-column list-column-half active-list-view">
                    {getbatchData && getbatchData.map((data, index) => {
                      const startHour = parseInt(data.sBatchStartTime[0])
                      const endHour = parseInt(data.sBatchEndTime[0])

                      // Calculate the difference in hours
                      const hoursDifference = endHour - startHour
                      return (
                          <>
                            <div className="course-grid-4" data-sal-delay="150" data-sal="data-up"
                                 data-sal-duration="800">
                              <div className="rbt-card variation-01 rbt-hover card-list-2">
                                <div className="rbt-card-img">
                                  <Link href={`/batch-details/${data.nCId}/${data.nTBId}`}>
                                    <img src={data.batchimg} alt="Card image"/>
                                  </Link>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-category">
                                    <a href="#">{data.sCategory}</a>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <Link href={`/batch-details/${data.nCId}/${data.nTBId}`}>
                                      {data.sCourseTitle}
                                    </Link>
                                  </h4>
                                  <span className="lesson-number mb-1">By <span
                                      className={'text-dark'}><b>{data.sFName} {data.sLName}</b></span></span>
                                  <span className="lesson-number">{data.batchdays} days <span
                                      className="lesson-time">({data.batchdays * hoursDifference} hrs)</span></span>
                                  <p className="rbt-card-text m-0">
                                    <span
                                        className={'mr-2'}>{new Date(data.batchstartdatenew).getDate()} {new Date(data.batchstartdatenew).toLocaleString('default', {month: 'short'})} - {new Date(data.dBatchEndDate).getDate()} {new Date(data.dBatchEndDate).toLocaleString('default', {month: 'short'})}</span> |
                                    <span className={'ms-2'}>{data.sBatchStartTime} to {data.sBatchEndTime}</span>
                                  </p>
                                  <p className="rbt-card-text font-14 m-0">

                                  </p>
                                  <div className='d-flex mt-1 mb-5 mt-2'>

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Monday')) ? <>
                                      <div className='circle-fill-badge'><span>M</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>M</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Tuesday')) ? <>
                                      <div className='circle-fill-badge'><span>T</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>T</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Wednesday')) ? <>
                                      <div className='circle-fill-badge'><span>W</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>W</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Thursday')) ? <>
                                      <div className='circle-fill-badge'><span>T</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>T</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Friday')) ? <>
                                      <div className='circle-fill-badge'><span>F</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>F</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Saturday')) ? <>
                                      <div className='circle-fill-badge'><span>S</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>S</span></div>
                                    </>}

                                    {(JSON.parse(data.sDays).find(obj => obj === 'Sunday')) ? <>
                                      <div className='circle-fill-badge'><span>S</span></div>
                                    </> : <>
                                      <div className='circle-badge'><span>S</span></div>
                                    </>}

                                  </div>
                                  <div className="rbt-card-bottom">
                                    <div className="read-more-btn">
                                      <a className="rbt-moderbt-btn" href="#">
                                        <span className="moderbt-btn-text">Register Now</span>
                                        <i className="feather-arrow-right"></i>
                                      </a>
                                    </div>
                                    {/*<a className="transparent-button" href="course-details.html">Register Now<i>*/}
                                    {/*  <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*    <g stroke="#27374D" fill="none" fill-rule="evenodd">*/}
                                    {/*      <path d="M10.614 0l5.629 5.629-5.63 5.629"/>*/}
                                    {/*      <path stroke-linecap="square" d="M.663 5.572h14.594"/>*/}
                                    {/*    </g>*/}
                                    {/*  </svg>*/}
                                    {/*</i></a>*/}
                                  </div>
                                </div>
                              </div>
                            </div>

                          </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            {getbatchcount > 3 ? <>
              <div className="row mb-5">
                <div className="col-lg-12">
                  <div className="load-more-btn mt--60 text-center">
                    <Link
                        className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                        href="/all-batch"
                    >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Batch ({getbatchcount})</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </> : <>

            </>}

          </div>
        </div>

        <div className={'container mt-5'}>
          <div className={'row'}>
            <div className={'col-lg-4 mt-3'}>
              <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-1">
                <div className="inner">
                  <div className="content">
                    <h4 className="title"><a href="#">Be a Learner</a></h4>
                    <p>Get Free access to explore our english courses.</p>
                    <a className="transparent-button" href="#">Learn More
                      <i>
                        <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                          <g stroke="#27374D" fill="none" fill-rule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                            <path stroke-linecap="square" d="M.663 5.572h14.594"/>
                          </g>
                        </svg>
                      </i>
                    </a>
                  </div>
                  <div className="thumbnail text-center">
                    <img src={'/images/service/1.png'} className={"learner-img"} alt="Education Images"/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-lg-4 mt-3'}>
              <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-2">
                <div className="inner">
                  <div className="content">
                    <h4 className="title"><a href="#">Be a Tutor</a></h4>
                    <p>Make your English proficiency a career.</p>
                    <a className="transparent-button" href="#">Learn More<i>
                      <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#27374D" fill="none" fill-rule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                          <path stroke-linecap="square" d="M.663 5.572h14.594"/>
                        </g>
                      </svg>
                    </i></a>
                  </div>
                  <div className="thumbnail">
                    <img src={'images/service/2.png'} alt="Education Images"/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-lg-4 mt-3'}>
              <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-3">
                <div className="inner">
                  <div className="content">
                    <h4 className="title"><a href="#">Be an Institute Partener</a></h4>
                    <p>Grab an opportunity to make your institute online.</p>
                    <a className="transparent-button" href="#">Learn More<i>
                      <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#27374D" fill="none" fill-rule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                          <path stroke-linecap="square" d="M.663 5.572h14.594"/>
                        </g>
                      </svg>
                    </i></a>
                  </div>
                  <div className="thumbnail">
                    <img src={'images/service/3.png'} alt="Education Images"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <AboutTwo/>
          </div>
        </div>
        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  STIMULATED TO TAKE PART IN?
                </span>
                <h2 className="title color-white">Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EventCarouse/>
              </div>
            </div>
          </div>
        </div>


        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <NewsletterTwo/>
        </div>
      </main>
    </>
  );
};

export default MainDemo;
