import Image from "next/image";
import Link from "next/link";
import API_URL from "@/pages/constant";
import API_KEY from "@/pages/constant";

import {useEffect, useState} from "react";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";

const AllBatches = () => {
    const REACT_APP = API_URL
    const [getBatchData, setBatchData] = useState([])
    const [getbatchcount, setbatchcount] = useState(0)
    const [getcategoryData, setcategoryData] = useState([])
    const [getcategoryLevel, setcategoryLevel] = useState([])
    const [showAllCategories, setShowAllCategories] = useState(false);
    const maxVisibleCategories = 4
    const [gettutorList, settutorList ] = useState([])

    useEffect(() => {
        getCourse();
        bindCourseCategory();
        bindLevel();
        bindTutor();
    }, [])
    const getCourse = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetBatchCoursesMem/0`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    if (res.data.length !== 0) {
                        setBatchData(res.data)
                        setbatchcount(res.data[0]['remain_course_count'])
                    }
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }

    const bindCourseCategory = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetCourseCategory`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                if (res.data.length !== 0) {
                    // console.log(res.data)
                    setcategoryData(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }

    const bindLevel = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetCourseLevelCount`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                // console.log(res)
                if (res.data.length !== 0) {
                    setcategoryLevel(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }

    const  bindTutor = () => {
        Axios.get(`${REACT_APP.API_URL}/api/student/BindTutor`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    settutorList(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }
    return (
        <>
            <div className="rbt-page-banner-wrapper">

                <div className="rbt-banner-image"></div>

                <div className="rbt-banner-content">
                    <div className="rbt-banner-content-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li>
                                            <div className="icon-right"><i className="feather-chevron-right"></i></div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">All Courses</li>
                                    </ul>

                                    <div className=" title-wrapper">
                                        <h1 className="title mb--0">All Courses</h1>
                                        <a href="#" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            50 Courses
                                        </a>
                                    </div>

                                    <p className="description">Courses that help beginner designers become true
                                        unicorns. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-course-top-wrapper mt--40">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                                        <div className="rbt-short-item switch-layout-container">
                                            <ul className="course-switch-layout">
                                                <li className="course-switch-item">
                                                    <button className="rbt-grid-view" title="Grid Layout"><i
                                                        className="feather-grid"></i> <span className="text">Grid</span>
                                                    </button>
                                                </li>
                                                <li className="course-switch-item">
                                                    <button className="rbt-list-view active" title="List Layout"><i
                                                        className="feather-list"></i> <span className="text">List</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-short-item">
                                            <span className="course-index">Showing 1-9 of 19 results</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div
                                        className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                        <div className="rbt-short-item">
                                            <form action="#" className="rbt-search-style me-0">
                                                <input type="text" placeholder="Search Your Course.."/>
                                                <button type="submit" className="rbt-search-btn rbt-round-btn">
                                                    <i className="feather-search"></i>
                                                </button>
                                            </form>
                                        </div>

                                        <div className="rbt-short-item">
                                            <div className="view-more-btn text-start text-sm-end">
                                                <button
                                                    className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round">Filter<i
                                                    className="feather-filter"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="default-exp-wrapper default-exp-expand">
                                <div className="filter-inner">
                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By</span>
                                            <select>
                                                <option>Default</option>
                                                <option>Latest</option>
                                                <option>Popularity</option>
                                                <option>Trending</option>
                                                <option>Price: low to high</option>
                                                <option>Price: high to low</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Author</span>
                                            <select data-live-search="true" title="Select Author" multiple data-size="7"
                                                    data-actions-box="true" data-selected-text-format="count > 2">
                                                <option data-subtext="Experts">Janin Afsana</option>
                                                <option data-subtext="Experts">Joe Biden</option>
                                                <option data-subtext="Experts">Fatima Asrafy</option>
                                                <option data-subtext="Experts">Aysha Baby</option>
                                                <option data-subtext="Experts">Mohamad Ali</option>
                                                <option data-subtext="Experts">Jone Li</option>
                                                <option data-subtext="Experts">Alberd Roce</option>
                                                <option data-subtext="Experts">Zeliski Noor</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Offer</span>
                                            <select>
                                                <option>Free</option>
                                                <option>Paid</option>
                                                <option>Premium</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Category</span>
                                            <select data-live-search="true">
                                                <option>Web Design</option>
                                                <option>Graphic</option>
                                                <option>App Development</option>
                                                <option>Figma Design</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select">
                                            <span className="select-label d-block">Price Range</span>

                                            <div className="price_filter s-filter clear">
                                                <form action="#" method="GET">
                                                    <div id="slider-range"></div>
                                                    <div className="slider__range--output">
                                                        <div className="price__output--wrap">
                                                            <div className="price--output">
                                                                <span>Price :</span><input type="text" id="amount"/>
                                                            </div>
                                                            <div className="price--filter">
                                                                <a className="rbt-btn btn-gradient btn-sm"
                                                                   href="#">Filter</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">

                    <div className="rbt-course-grid-column list-column-half active-list-view">


                        <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="rbt-card variation-01 rbt-hover card-list-2">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-list-01.jpg" alt="Card image"/>
                                    </a>
                                </div>
                                <div className="rbt-card-body">
                                    <div className="rbt-category">
                                        <a href="#">Design</a>
                                        <a href="#">Development</a>
                                    </div>
                                    <h4 className="rbt-card-title"><a href="course-details.html">Difficult Things About
                                        Education.</a>
                                    </h4>
                                    <span className="lesson-number">12 lessons <span className="lesson-time">(4 hours total)</span></span>
                                    <p className="rbt-card-text">It is a long established fact that a reader will be
                                        distracted.</p>
                                    <div className="rbt-card-bottom">
                                        <a className="transparent-button" href="course-details.html">Learn
                                            More<i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fill-rule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                        <path stroke-linecap="square" d="M.663 5.572h14.594"/>
                                                    </g>
                                                </svg>
                                            </i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="rbt-card variation-01 rbt-hover card-list-2">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-list-02.jpg" alt="Card image"/>
                                    </a>
                                </div>
                                <div className="rbt-card-body">
                                    <div className="rbt-category">
                                        <a href="#">Online</a>
                                        <a href="#">English</a>
                                    </div>
                                    <h4 className="rbt-card-title"><a href="course-details.html">Here's What People Are
                                        Education.</a>
                                    </h4>
                                    <span className="lesson-number">12 lessons <span className="lesson-time">(4 hours total)</span></span>
                                    <p className="rbt-card-text">Here's What People Are Saying that a reader will be
                                        distracted.</p>
                                    <div className="rbt-card-bottom">
                                        <a className="transparent-button" href="course-details.html">Learn
                                            More<i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fill-rule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                        <path stroke-linecap="square" d="M.663 5.572h14.594"/>
                                                    </g>
                                                </svg>
                                            </i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default AllBatches;
