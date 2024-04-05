import Link from "next/link";
import React, {useEffect, useState} from "react";
import API_URL from '@/pages/constant'
import Axios from "axios";

const Experience = () => {
  const [fields, showFields] = useState(false)
  const REACT_APP = API_URL
  const defaultValue = new Date().getFullYear();
  const [selectedYear, SetselectedYear] = useState(new Date().getFullYear());
  const [thisYear, setthisYear] = useState(defaultValue);
  const minOffset = 0;
  const maxOffset = 53;

  const [country, setCountry] = useState([]);

  const bindCountry = () => {
    Axios.get(`${REACT_APP.API_URL}/api/registration/BindCountry`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          // console.log(res.data)
          if (res.data.length !== 0) {
            setCountry(res.data)
          }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }
  const handleChange = (e) => {
    // console.log(e.target.checked)
    if(e.target.value === 'experience') {
      showFields(true)
    } else {
      showFields(false)
    }
  }

  const  handleChangeCountry = (e) => {
    if (e.target.value) {
      setcountryId(e.target.value)
      Axios.get(`${REACT_APP.API_URL}/api/registration/BindState/${e.target.value}`, {
        headers: {
          ApiKey: `${REACT_APP.API_KEY}`
        }
      })
          .then(res => {
            // console.log(res.data)
            if (res.data.length !== 0) {
              setState(res.data)
            }
          })
          .catch(err => {
            { ErrorDefaultAlert(err) }
          })
    }
  }


  const onHandleChange = (e) => {
    // alert(e.target.value),
    // console.clear(),
    localStorage.setItem("currentYear", e.target.value);
    SetselectedYear(e.target.value);
    console.log(e.target.value);
  };

  const options = [];

  for (let i = minOffset; i <= maxOffset; i++) {
    const year = defaultValue - i;
    options.push(
        <option key={year} value={year}>
          {year}
        </option>
    );
  }
  {
    console.log();
  }

  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [cancelButton, setCancelButton] = useState(false);

  const handleAddEducation = () => {
    const newId = educationFields.length + 1;
    setEducationFields([...educationFields, { id: newId }]);
    setCancelButton(true)
  };

  const handleCancelEducation = (id) => {
    setEducationFields(educationFields.filter(field => field.id !== id));
  };
  useEffect(() => {
    bindCountry()
  }, []);
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Teaching Experience</h4>
          </div>
          <div className={'row'}>
            <div className={'col-lg-12'}>
              <label style={{fontSize: '16px'}}>
                Are you a fresher or an experienced teacher?
              </label>
              <div className={'d-flex'}>
                <div>
                  <input id="fresher" value={'fresher'} onChange={handleChange} type="radio" name="rbt-radio1"
                         className="custom-radio"/>
                  <label htmlFor="fresher">
                    Fresher
                  </label>
                </div>
                <div className={"ms-3"}>
                  <input id="experience" value={'experience'} onChange={handleChange} type="radio" name="rbt-radio1"/>
                  <label htmlFor="experience">
                    Experience
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className={'row'}>

            {fields ? <>
              {educationFields.map((education, index) => {
                return (
                    <>
                      <div className={'col-lg-6 mt-4'}>
                        <label style={{fontSize: '15px'}}>
                          How many years of total experience in teaching?
                        </label>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Total experience"
                                 aria-label="Total experience" aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                            <span style={{fontSize: '16px'}} className="input-group-text h-100"
                                  id="basic-addon2">years</span>
                          </div>
                        </div>
                      </div>
                      <div className={'col-lg-6 mt-4'}>
                        <label style={{fontSize: '16px'}}>
                          Out of total how many years of online teaching experience?
                        </label>
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="online experience"
                                 aria-label="online experience" aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                            <span style={{fontSize: '14px'}} className="input-group-text h-100"
                                  id="basic-addon2">years</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label style={{fontSize: '16px'}}>
                          Country of experience
                        </label>
                        {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                        <select className="w-100" onChange={handleChangeCountry}>
                          {country.map((item, index) => {
                            return (
                                <>
                                  <option key={index} value={item.nCountryId}>{item.sCountryname}</option>
                                </>
                            )
                          })}
                        </select>
                      </div>
                      <div className={'col-lg-6 mt-3'}>
                        <label style={{fontSize: '16px'}}>
                          Organization
                        </label>
                        <div className="form-group">
                          <input name="con_email" type="text" placeholder="Organization"/>
                          <span className="focus-border"></span>
                        </div>
                      </div>
                      <div className={'col-lg-6 mt-3'}>
                        <label style={{fontSize: '16px'}}>
                          Position
                        </label>
                        <div className="form-group">
                          <input name="con_email" type="text" placeholder="Organization"/>
                          <span className="focus-border"></span>
                        </div>
                      </div>
                      <div className={'col-lg-6 mt-3'}>
                        <label style={{fontSize: '16px'}}>
                          Year of study from
                        </label>
                        <select value={selectedYear} onChange={onHandleChange}>
                          {options}
                        </select>
                      </div>
                      <div className={'col-lg-6 mt-3'}>
                        <label style={{fontSize: '16px'}}>
                          Year of study to
                        </label>
                        <select value={selectedYear} onChange={onHandleChange}>
                          <option>Present</option>
                          {options}
                        </select>
                      </div>
                      {cancelButton ? <div className="col-lg-12 text-end mt-2">
                        <button type={'button'} className="btn btn-danger"
                                onClick={() => handleCancelEducation(education.id)}>Cancel
                        </button>
                      </div> : ''}
                    </>
                )
              })}
              <div className={'col-lg-12 mt-5 mb-5'}>
                <button
                    type={'button'}
                    className="rbt-btn-link left-icon border-0 bg-white"
                    onClick={handleAddEducation}
                >
                  <i className="feather-plus"></i>Add Certification
                </button>
              </div>
            </> : ''}
          </div>


          <div className="col-lg-12 mt-5">
            <div className="form-submit-group">
              <button
                  type="submit"
                  className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <Link href={"/become-a-tutor/description"} className={'text-white'}>
                                     <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Continue</span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                      </span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                      </span>
                                    </span>
                </Link>

              </button>
            </div>
          </div>

          {/*<div className="advance-tab-button mb--30">*/}
          {/*  <ul*/}
          {/*    className="nav nav-tabs tab-button-style-2 justify-content-start"*/}
          {/*    id="reviewTab-4"*/}
          {/*    role="tablist"*/}
          {/*  >*/}
          {/*    <li role="presentation">*/}
          {/*      <Link*/}
          {/*        href="#"*/}
          {/*        className="tab-button active"*/}
          {/*        id="received-tab"*/}
          {/*        data-bs-toggle="tab"*/}
          {/*        data-bs-target="#received"*/}
          {/*        role="tab"*/}
          {/*        aria-controls="received"*/}
          {/*        aria-selected="true"*/}
          {/*      >*/}
          {/*        <span className="title">Received</span>*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li role="presentation">*/}
          {/*      <Link*/}
          {/*        href="#"*/}
          {/*        className="tab-button"*/}
          {/*        id="given-tab"*/}
          {/*        data-bs-toggle="tab"*/}
          {/*        data-bs-target="#given"*/}
          {/*        role="tab"*/}
          {/*        aria-controls="given"*/}
          {/*        aria-selected="false"*/}
          {/*      >*/}
          {/*        <span className="title">Given</span>*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          {/*<div className="tab-content">*/}
          {/*  <div*/}
          {/*    className="tab-pane fade active show"*/}
          {/*    id="received"*/}
          {/*    role="tabpanel"*/}
          {/*    aria-labelledby="received-tab"*/}
          {/*  >*/}
          {/*    <div className="rbt-dashboard-table table-responsive mobile-table-750">*/}
          {/*      <table className="rbt-table table table-borderless">*/}
          {/*        <thead>*/}
          {/*          <tr>*/}
          {/*            <th>Student</th>*/}
          {/*            <th>Date</th>*/}
          {/*            <th>Feedback</th>*/}
          {/*          </tr>*/}
          {/*        </thead>*/}
          {/*        <tbody>*/}
          {/*          <tr>*/}
          {/*            <th>John Due</th>*/}
          {/*            <td>January 30, 2021</td>*/}
          {/*            <td>*/}
          {/*              <span className="b3">*/}
          {/*                Course: <Link href="#">Speaking Korean for Beginners</Link>*/}
          {/*              </span>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (9 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b2">Good</p>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*          <tr>*/}
          {/*            <th>John Due</th>*/}
          {/*            <td>June 30, 2022</td>*/}
          {/*            <td>*/}
          {/*              <span className="b3">*/}
          {/*                Course: <Link href="#">PHP for Beginners</Link>*/}
          {/*              </span>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (5 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b3">Awesome</p>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*          <tr>*/}
          {/*            <th>John Due</th>*/}
          {/*            <td>April 30, 2022</td>*/}
          {/*            <td>*/}
          {/*              <span className="b3">*/}
          {/*                Course: <Link href="#">WordPress for Beginners</Link>*/}
          {/*              </span>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (10 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b3">Nice Course</p>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*          <tr>*/}
          {/*            <th>John Due</th>*/}
          {/*            <td>March 30, 2022</td>*/}
          {/*            <td>*/}
          {/*              <span className="b3">*/}
          {/*                Course: <Link href="#">Design for Beginners</Link>*/}
          {/*              </span>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (15 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b3">-</p>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*        </tbody>*/}
          {/*      </table>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div*/}
          {/*    className="tab-pane fade"*/}
          {/*    id="given"*/}
          {/*    role="tabpanel"*/}
          {/*    aria-labelledby="given-tab"*/}
          {/*  >*/}
          {/*    <div className="rbt-dashboard-table table-responsive mobile-table-750">*/}
          {/*      <table className="rbt-table table table-borderless">*/}
          {/*        <thead>*/}
          {/*          <tr>*/}
          {/*            <th>Course Title</th>*/}
          {/*            <th>Review</th>*/}
          {/*            <th></th>*/}
          {/*          </tr>*/}
          {/*        </thead>*/}
          {/*        <tbody>*/}
          {/*          <tr>*/}
          {/*            <th>Course: How to Write Your First Novel</th>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (9 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b3">Good</p>*/}
          {/*            </td>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-button-group">*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-edit" /> Edit*/}
          {/*                </Link>*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-trash-2" /> Delete*/}
          {/*                </Link>*/}
          {/*              </div>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*          <tr>*/}
          {/*            <th>Course: How to Web Design</th>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (9 Reviews)</span>*/}
          {/*              </div>*/}
          {/*              <p className="b3">Awesome Course</p>*/}
          {/*            </td>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-button-group">*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-edit" /> Edit*/}
          {/*                </Link>*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-trash-2" /> Delete*/}
          {/*                </Link>*/}
          {/*              </div>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*          <tr>*/}
          {/*            <th>Course: English</th>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-review">*/}
          {/*                <div className="rating">*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                  <i className="off fas fa-star" />*/}
          {/*                </div>*/}
          {/*                <span className="rating-count"> (9 Reviews)</span>*/}
          {/*              </div>*/}
          {/*            </td>*/}
          {/*            <td>*/}
          {/*              <div className="rbt-button-group">*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-edit" /> Edit*/}
          {/*                </Link>*/}
          {/*                <Link className="rbt-btn-link left-icon" href="#">*/}
          {/*                  <i className="feather-trash-2" /> Delete*/}
          {/*                </Link>*/}
          {/*              </div>*/}
          {/*            </td>*/}
          {/*          </tr>*/}
          {/*        </tbody>*/}
          {/*      </table>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};

export default Experience;
