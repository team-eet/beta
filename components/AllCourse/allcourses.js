import Image from "next/image";
import Link from "next/link";
import API_URL from "@/pages/constant";
import API_KEY from "@/pages/constant";

import {useEffect, useState} from "react";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import Pagination from "@/components/Common/Pagination";

const AllCourses = () => {
    const REACT_APP = API_URL
    const [getcourseData, setcourseData] = useState([])
    const [getcoursecount, setcoursecount] = useState(0)
    const [getcategoryData, setcategoryData] = useState([])
    const [getcategoryLevel, setcategoryLevel] = useState([])
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [activeView, setActiveView] = useState('Grid');
    const maxVisibleCategories = 4

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const indexOfLastRecord = currentPage * recordsPerPage;
    // console.log(indexOfLastRecord)
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = getcourseData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(getcourseData.length / recordsPerPage)


    const [gettutorList, settutorList ] = useState([])

    useEffect(() => {
        getCourse();
        bindCourseCategory();
        bindLevel();
        bindTutor();
    }, [])
    const getCourse = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursemain/GetCoursesMem/2`, {
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

    const handleCourseView = (view) => {
        setActiveView(view);
    };
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
                                            {getcoursecount} Courses
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
                                                    <button
                                                        className={activeView === 'Grid' ? 'rbt-grid-view active' : 'rbt-grid-view'}
                                                        title="Grid Layout" onClick={() => handleCourseView('Grid')}>
                                                        <i className="feather-grid"></i>
                                                        <span className="text">Grid</span>
                                                    </button>
                                                </li>
                                                <li className="course-switch-item">
                                                    <button
                                                        className={activeView === 'List' ? 'rbt-list-view active' : 'rbt-list-view'}
                                                        title="List Layout" onClick={() => handleCourseView('List')}>
                                                        <i className="feather-list"></i>
                                                        <span className="text">List</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-short-item">
                                            <span className="course-index">Showing {indexOfFirstRecord + 1}-{indexOfLastRecord} of {getcourseData.length} results</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                <div
                                        className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                        <div className="rbt-short-item">
                                            <div className="filter-select">
                                                <span className="select-label d-block">Short By</span>
                                                <div className="filter-select rbt-modern-select search-by-category">
                                                    <select data-size="7">
                                                        <option>Default</option>
                                                        <option>Latest</option>
                                                        <option>Popularity</option>
                                                        <option>Trending</option>
                                                        <option>Price: low to high</option>
                                                        <option>Price: high to low</option>
                                                    </select>
                                                </div>
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
                    <div className="row row--30 gy-5">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <aside className="rbt-sidebar-widget-wrapper">

                                <div className="rbt-single-widget rbt-widget-search">
                                    <div className="inner">
                                        <form action="#" className="rbt-search-style-1">
                                            <input type="text" placeholder="Search Courses"/>
                                            <button className="search-btn"><i className="feather-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="rbt-single-widget rbt-widget-categories has-show-more">
                                    <div className="inner">
                                        <h4 className="rbt-widget-title">Categories</h4>
                                        {/*<ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">*/}
                                        {/*    {getcategoryData && getcategoryData.map((data, index) => {*/}
                                        {/*        return (*/}
                                        {/*            <>*/}
                                        {/*                <li className="rbt-check-group" key={index}>*/}
                                        {/*                    <input id="cat-list-1" type="checkbox" name="cat-list-1"/>*/}
                                        {/*                    <label htmlFor="cat-list-1">{data.sCategory}<span*/}
                                        {/*                        className="rbt-lable count">{data.courrsecnt}</span></label>*/}
                                        {/*                </li>*/}
                                        {/*            </>*/}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*</ul>*/}
                                        <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                                            {getcategoryData && getcategoryData.slice(0, showAllCategories ? getcategoryData.length : maxVisibleCategories).map((data, index) => {
                                                return (
                                                    <li className="rbt-check-group" key={index}>
                                                        <input id={`cat-list-${index}`} type="checkbox"
                                                               name={`cat-list-${index}`}/>
                                                        <label htmlFor={`cat-list-${index}`}>{data.sCategory}<span
                                                            className="rbt-lable count">{data.courrsecnt}</span></label>
                                                    </li>
                                                )
                                            })}
                                            {getcategoryData && getcategoryData.length > maxVisibleCategories &&
                                                <li onClick={() => setShowAllCategories(!showAllCategories)}
                                                    className="show-more text-primary">
                                                    {/*{showAllCategories ?*/}
                                                    {/*    <div className="rbt-show-more-btn">Show Less</div> :*/}
                                                    {/*    <div className="rbt-show-more-btn">Show More</div>}*/}
                                                    {showAllCategories ?
                                                        'Show Less' :
                                                        'Show More'
                                                    }
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                    {/*<div className="rbt-show-more-btn">Show More</div>*/}
                                </div>

                                <div className="rbt-single-widget rbt-widget-rating">
                                    <div className="inner">
                                        <h4 className="rbt-widget-title">Ratings</h4>
                                        <ul className="rbt-sidebar-list-wrapper rating-list-check">
                                            <li className="rbt-check-group">
                                                <input id="cat-radio-1" type="radio" name="rbt-radio"/>
                                                <label htmlFor="cat-radio-1">
                                            <span className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                                                    <span className="rbt-lable count">5</span>
                                                </label>
                                            </li>
                                            <li className="rbt-check-group">
                                                <input id="cat-radio-2" type="radio" name="rbt-radio"/>
                                                <label htmlFor="cat-radio-2">
                                            <span className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                        </span>
                                                    <span className="rbt-lable count">4</span>
                                                </label>
                                            </li>
                                            <li className="rbt-check-group">
                                                <input id="cat-radio-3" type="radio" name="rbt-radio"/>
                                                <label htmlFor="cat-radio-3">
                                            <span className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                        </span>
                                                    <span className="rbt-lable count">3</span>
                                                </label>
                                            </li>
                                            <li className="rbt-check-group">
                                                <input id="cat-radio-4" type="radio" name="rbt-radio"/>
                                                <label htmlFor="cat-radio-4">
                                            <span className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                        </span>
                                                    <span className="rbt-lable count">2</span>
                                                </label>
                                            </li>

                                            <li className="rbt-check-group">
                                                <input id="cat-radio-5" type="radio" name="rbt-radio"/>
                                                <label htmlFor="cat-radio-5">
                                            <span className="rating">
                            <i className="fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                            <i className="off fas fa-star"></i>
                        </span>
                                                    <span className="rbt-lable count">1</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/*<div className="rbt-single-widget rbt-widget-instructor">*/}
                                {/*    <div className="inner">*/}
                                {/*        <h4 className="rbt-widget-title">Instructors</h4>*/}
                                {/*        <ul className="rbt-sidebar-list-wrapper instructor-list-check">*/}
                                {/*            <li className="rbt-check-group">*/}
                                {/*                <input id="ins-list-1" type="checkbox" name="ins-list-1"/>*/}
                                {/*                <label htmlFor="ins-list-1">Slaughter <span*/}
                                {/*                    className="rbt-lable count">15</span></label>*/}
                                {/*            </li>*/}
                                {/*            <li className="rbt-check-group">*/}
                                {/*                <input id="ins-list-2" type="checkbox" name="ins-list-2"/>*/}
                                {/*                <label htmlFor="ins-list-2">Patrick <span*/}
                                {/*                    className="rbt-lable count">20</span></label>*/}
                                {/*            </li>*/}
                                {/*            <li className="rbt-check-group">*/}
                                {/*                <input id="ins-list-3" type="checkbox" name="ins-list-3"/>*/}
                                {/*                <label htmlFor="ins-list-3">Angela <span*/}
                                {/*                    className="rbt-lable count">10</span></label>*/}
                                {/*            </li>*/}
                                {/*            <li className="rbt-check-group">*/}
                                {/*                <input id="ins-list-4" type="checkbox" name="ins-list-4"/>*/}
                                {/*                <label htmlFor="ins-list-4">Fatima Asrafy <span*/}
                                {/*                    className="rbt-lable count">15</span></label>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="rbt-single-widget rbt-widget-prices">
                                    <div className="inner">
                                        <h4 className="rbt-widget-title">Prices</h4>
                                        <ul className="rbt-sidebar-list-wrapper prices-list-check">
                                            <li className="rbt-check-group">
                                                <input id="prices-list-1" type="checkbox" name="prices-list-1"/>
                                                <label htmlFor="prices-list-1">All <span
                                                    className="rbt-lable count">15</span></label>
                                            </li>
                                            <li className="rbt-check-group">
                                                <input id="prices-list-2" type="checkbox" name="prices-list-2"/>
                                                <label htmlFor="prices-list-2">Free <span
                                                    className="rbt-lable count">0</span></label>
                                            </li>
                                            <li className="rbt-check-group">
                                                <input id="prices-list-3" type="checkbox" name="prices-list-3"/>
                                                <label htmlFor="prices-list-3">Paid <span
                                                    className="rbt-lable count">10</span></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="rbt-single-widget rbt-widget-lavels">
                                    <div className="inner">
                                        <h4 className="rbt-widget-title">Levels</h4>
                                        <ul className="rbt-sidebar-list-wrapper lavels-list-check">
                                            {getcategoryLevel && getcategoryLevel.map((data, index) => {
                                                return (
                                                    <>
                                                        <li className="rbt-check-group">
                                                            <input id="lavels-list-1" type="checkbox"
                                                                   name="lavels-list-1"/>
                                                            <label htmlFor="lavels-list-1">{data.sLevel}<span
                                                                className="rbt-lable count">{data.clcnt}</span></label>
                                                        </li>
                                                    </>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>


                            </aside>
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            {activeView === "Grid" ? <>
                                <div className="rbt-course-grid-column">
                                    {currentRecords.map((data, index) => {
                                        return (
                                            <>
                                                <div className="course-grid-3">
                                                    <Link href={`/course-details/${data.nCId}`}>
                                                        <div className="rbt-card variation-01 rbt-hover">
                                                        <div className="rbt-card-img">
                                                            {/*<a href="course-details.html">*/}
                                                                <img src={data.sImagePath}
                                                                     alt="Card image"/>
                                                                {/*<div className="rbt-badge-3 bg-white">*/}
                                                                {/*    <span>-40%</span>*/}
                                                                {/*    <span>Off</span>*/}
                                                                {/*</div>*/}
                                                            {/*</a>*/}
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
                                                                    ({data.user_rate_cnt} Reviews)
                                                                </div>
                                                                <div className="rbt-bookmark-btn">
                                                                    <a className="rbt-round-btn" title="Bookmark"
                                                                       href="#"><i
                                                                        className="feather-bookmark"></i></a>
                                                                </div>
                                                            </div>

                                                            <h4 className="rbt-card-title">
                                                                {/*<a href="course-details.html">*/}
                                                                    {data.sCourseTitle}
                                                                {/*</a>*/}
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
                                                            <div className="rbt-author-meta mb--10">
                                                                {/*<div className="rbt-avater">*/}
                                                                {/*    <a href="#">*/}
                                                                {/*        <img src="assets/images/client/avatar-02.png"*/}
                                                                {/*             alt="Sophia Jaymes"/>*/}
                                                                {/*    </a>*/}
                                                                {/*</div>*/}
                                                                <div className="rbt-author-info">
                                                                    By <a
                                                                    href="profile.html">{data.sFName} {data.sLName}</a> In <a
                                                                    href="#">{data.sCategory}</a>
                                                                </div>
                                                            </div>
                                                            <div className="rbt-card-bottom">
                                                                {data.bIsAccosiateModule === 'no' ? <>
                                                                    <div className="rbt-price">
                                                                    <span
                                                                        className="current-price">₹{data.dAmount}</span>
                                                                        <span
                                                                            className="off-price">₹{data.nCourseAmount}</span>
                                                                    </div>
                                                                    <a className="rbt-btn-link"
                                                                       href="course-details.html">Learn More<i
                                                                        className="feather-arrow-right"></i></a>
                                                                </> : <>
                                                                    <div className="read-more-btn m-auto">
                                                                        <a className="rbt-moderbt-btn" href="#">
                                                                            <span className="moderbt-btn-text">View Packages</span>
                                                                            <i className="feather-arrow-right"></i>
                                                                        </a>
                                                                    </div>
                                                                </>}


                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </> : <>
                                <div className="rbt-course-grid-column">
                                    {currentRecords.map((data, index) => {
                                        return (
                                            <>
                                                <div className="course-grid-12 mt-5" key={index} data-sal-delay="150"
                                                     data-sal="data-up"
                                                     data-sal-duration="800">
                                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                                        <div className="rbt-card-img">
                                                            <a href="course-details.html">
                                                                <img src={data.sImagePath} alt="Card image"/>
                                                            </a>
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
                                                                    ({data.user_rate_cnt} Reviews)
                                                                </div>
                                                                <div className="rbt-bookmark-btn">
                                                                    <a className="rbt-round-btn" title="Bookmark"
                                                                       href="#"><i
                                                                        className="feather-bookmark"></i></a>
                                                                </div>
                                                            </div>
                                                            <h4 className="rbt-card-title">
                                                                <a href="course-details.html">
                                                                    {data.sCourseTitle}
                                                                </a>
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
                                                            <div className="rbt-author-meta mb--10">
                                                                {/*<div className="rbt-avater">*/}
                                                                {/*    <a href="#">*/}
                                                                {/*        <img src="assets/images/client/avatar-02.png"*/}
                                                                {/*             alt="Sophia Jaymes"/>*/}
                                                                {/*    </a>*/}
                                                                {/*</div>*/}
                                                                <div className="rbt-author-info">
                                                                    By <a
                                                                    href="profile.html">{data.sFName} {data.sLName}</a> In <a
                                                                    href="#">{data.sCategory}</a>
                                                                </div>
                                                            </div>
                                                            <div className="rbt-card-bottom">
                                                                {data.bIsAccosiateModule === 'no' ? <>
                                                                    <div className="rbt-price">
                                                                    <span
                                                                        className="current-price">₹{data.dAmount}</span>
                                                                        <span
                                                                            className="off-price">₹{data.nCourseAmount}</span>
                                                                    </div>
                                                                    <a className="rbt-btn-link m-auto"
                                                                       href="course-details.html">Learn
                                                                        More<i className="feather-arrow-right"></i></a>
                                                                </> : <>
                                                                    <div className="read-more-btn m-auto">
                                                                        <a className="rbt-moderbt-btn" href="#">
                                                                        <span
                                                                            className="moderbt-btn-text">View Packages</span>
                                                                            <i className="feather-arrow-right"></i>
                                                                        </a>
                                                                    </div>
                                                                </>}


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    })}
                                </div>
                            </>}

                            <div className="row">
                                <div className="col-lg-12 mt--60">
                                    <Pagination
                                        nPages={nPages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCourses;
