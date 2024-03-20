import Image from "next/image";
import Link from "next/link";
import API_URL from "@/pages/constant";
import API_KEY from "@/pages/constant";
import {useEffect, useState} from "react";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import { Row, Col } from 'reactstrap'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRouter } from "next/router";
import PaginationBatch from "@/components/Common/Pagination";

const AllBatches = () => {
    const REACT_APP = API_URL
    const [getBatchData, setBatchData] = useState([])
    const [getbatchcount, setbatchcount] = useState(0)
    const [getcategoryData, setcategoryData] = useState([])
    const [getcategoryLevel, setcategoryLevel] = useState([])
    const [showAllCategories, setShowAllCategories] = useState(false);
    const maxVisibleCategories = 4
    const [gettutorList, settutorList ] = useState([])
    const [getshowFilter, setshowFilter] = useState(false)
    const [value, setValue] = useState([0, 400]);
    const [getGridView, setGridView] = useState(false)
    const [getListView, setListView] = useState(true)
    const [activeView, setActiveView] = useState('List');
    const router = useRouter()
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [getrecordsPerPage, setrecordsPerPage] = useState(2);

    const path = router.pathname;


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
                    // console.log(res.data)
                    if (res.data.length !== 0) {
                        setBatchData(res.data)
                        setbatchcount(res.data[0]['remain_course_count'])
                        if(res.data.length > 5) {
                            const indexOfFirstRecord = ((page - 1) * getrecordsPerPage) + 1
                            const indexOfLastRecord = indexOfFirstRecord + getrecordsPerPage - 1
                            const currentRecords = res.data.slice(indexOfFirstRecord - 1, indexOfLastRecord)
                            setBatchData(currentRecords)
                            setTotalPages(Math.ceil(getBatchData.length / getrecordsPerPage));
                        }


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
                // console.log(res.data)
                if (res.data.length !== 0) {
                    settutorList(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }
    const showFilter = () => {
        setshowFilter(true)
    }
    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };
    const handleBatchView = (view) => {
        setActiveView(view);
    };
    const handleClick = (num) => {
        setPage(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                                        <h1 className="title mb--0">All Batches</h1>
                                        <a href="#" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            {getBatchData.length} Batches
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
                                                    <button className={activeView === 'Grid' ? 'rbt-grid-view active' : 'rbt-grid-view'} title="Grid Layout"  onClick={() => handleBatchView('Grid')}>
                                                        <i className="feather-grid"></i>
                                                        <span className="text">Grid</span>
                                                    </button>
                                                </li>
                                                <li className="course-switch-item">
                                                    <button className={activeView === 'List' ? 'rbt-list-view active' : 'rbt-list-view'} title="List Layout"  onClick={() => handleBatchView('List')}>
                                                        <i className="feather-list"></i>
                                                        <span className="text">List</span>
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
                                                <button onClick={showFilter}
                                                        className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round">
                                                    Filter
                                                    <i className="feather-filter"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {getshowFilter ? <div className="filter-inner" style={{marginTop: '70px'}}>
                                <hr color={'#e6e3f14f'} style={{opacity: '0.2'}}></hr>
                                <Row>
                                    <Col>
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
                                    </Col>
                                    <Col>
                                        <div className="filter-select-option">
                                            <div className="filter-select rbt-modern-select">
                                                <span className="select-label d-block">Select Author</span>
                                                <select>
                                                    <option>Janin Afsana</option>
                                                    <option>Joe Biden</option>
                                                    <option>Fatima Asrafy</option>
                                                    <option>Aysha Baby</option>
                                                    <option>Mohamad Ali</option>
                                                    <option>Jone Li</option>
                                                    <option>Alberd Roce</option>
                                                    <option>Zeliski Noor</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
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
                                    </Col>
                                    <Col>
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
                                    </Col>
                                    <Col>
                                        <div className="filter-select-option">
                                            <div className="filter-select">
                                                <span className="select-label d-block">Price Range</span>

                                                <div className="price_filter s-filter clear">
                                                    <form action="#" method="GET">
                                                        <div id="slider-range">
                                                            <Slider
                                                                min={0}
                                                                max={500}
                                                                range
                                                                value={value}
                                                                onChange={handleSliderChange}
                                                                trackStyle={{backgroundColor: "#2f57ef"}}
                                                                handleStyle={{
                                                                    borderColor: "#2f57ef",
                                                                    backgroundColor: "#2f57ef",
                                                                    opacity: "1",
                                                                    boxShadow: "none",
                                                                    outline: "0",
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="slider__range--output">
                                                            <div className="price__output--wrap">
                                                                <div className="price--output">
                                                                    <span>Price :</span>
                                                                    <input
                                                                        type="text"
                                                                        id="amount"
                                                                        value={`₹${value[0]} - ₹${value[1]}`}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="price--filter">
                                                                    <a className="rbt-btn btn-gradient btn-sm" href="#">
                                                                        Filter
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>


                            </div> : ''}


                        </div>
                    </div>

                </div>
            </div>


            {activeView === 'Grid' ? (
                <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                    <div className="container">
                        <div className="rbt-course-grid-column list-column-half active-list-view">
                            {getBatchData && getBatchData.map((data, index) => {
                                const startHour = parseInt(data.sBatchStartTime[0])
                                const endHour = parseInt(data.sBatchEndTime[0])

                                // Calculate the difference in hours
                                const hoursDifference = endHour - startHour
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-5">
                                            <div className="rbt-card variation-01 rbt-hover" style={{ margin: '10px' }}>
                                                <div className="rbt-card-img">
                                                    <a href="course-details.html">
                                                        <img src={data.batchimg} style={{ height: '300px' }} alt="Card image"/>
                                                    </a>
                                                </div>
                                                <div className="rbt-card-body">
                                                    <div className="rbt-category">
                                                        <a href="#">{data.sCategory}</a>
                                                    </div>
                                                    <h4 className="rbt-card-title">
                                                        <a href="course-details.html">
                                                            {data.sCourseTitle}
                                                        </a>
                                                    </h4>

                                                    <span className="lesson-number mb-1">By <span
                                                        className={'text-dark'}><b>{data.sFName} {data.sLName}</b></span></span>
                                                    <br></br>
                                                    <span className="lesson-number">{data.batchdays} days <span
                                                        className="lesson-time">({data.batchdays * hoursDifference} hrs)</span></span>
                                                    <p className="rbt-card-text m-0">
                                                    <span
                                                        className={'mr-2'}>{new Date(data.batchstartdatenew).getDate()} {new Date(data.batchstartdatenew).toLocaleString('default', {month: 'short'})} - {new Date(data.dBatchEndDate).getDate()} {new Date(data.dBatchEndDate).toLocaleString('default', {month: 'short'})}</span> |
                                                        <span
                                                            className={'ms-2'}>{data.sBatchStartTime} to {data.sBatchEndTime}</span>
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

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            ) : (
                <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                    <div className="container">

                        <div className={`rbt-course-grid-column list-column-half active-list-view`}>

                            {getBatchData && getBatchData.map((data, index) => {
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
                                                    <a href="course-details.html">
                                                        <img src={data.batchimg} alt="Card image"/>
                                                    </a>
                                                </div>
                                                <div className="rbt-card-body">
                                                    <div className="rbt-category">
                                                        <a href="#">{data.sCategory}</a>
                                                    </div>
                                                    <h4 className="rbt-card-title">
                                                        <a href="course-details.html">
                                                            {data.sCourseTitle}
                                                        </a>
                                                    </h4>
                                                    <span className="lesson-number mb-1">By <span
                                                        className={'text-dark'}><b>{data.sFName} {data.sLName}</b></span></span>
                                                    <span className="lesson-number">{data.batchdays} days <span
                                                        className="lesson-time">({data.batchdays * hoursDifference} hrs)</span></span>
                                                    <p className="rbt-card-text m-0">
                                                    <span
                                                        className={'mr-2'}>{new Date(data.batchstartdatenew).getDate()} {new Date(data.batchstartdatenew).toLocaleString('default', {month: 'short'})} - {new Date(data.dBatchEndDate).getDate()} {new Date(data.dBatchEndDate).toLocaleString('default', {month: 'short'})}</span> |
                                                        <span
                                                            className={'ms-2'}>{data.sBatchStartTime} to {data.sBatchEndTime}</span>
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
            )}

            {getBatchData.length > 2 ? (
                <div className="row">
                    <div className="col-lg-12 mt--60">
                        <PaginationBatch
                            nPages={totalPages}
                            currentPage={page}
                            handlePageChange={handleClick}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default AllBatches;
