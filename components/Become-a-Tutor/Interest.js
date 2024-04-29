import Link from "next/link";
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "./Dashboard-Section/widgets/CourseWidget";
import React, {useState, useCallback, useEffect} from "react";
import { ReactTags } from 'react-tag-autocomplete'
import API_URL from '@/pages/constant'
import Axios from "axios";
<<<<<<< HEAD
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import { useRouter } from "next/router";
import {DecryptData} from "@/components/services/encrypt-decrypt";
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {Button, CardText} from "reactstrap";
import interest from "@/pages/become-a-tutor/interest";


const UserValidationSchema = Yup.object().shape({
    sFName: Yup.string()
        .required('This field is required'),
    sLName: Yup.string()
        .required('This field is required'),
    sMobile: Yup.string()
        .required('This field is required')
})
=======
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


>>>>>>> main
const Interest = () => {
    const REACT_APP = API_URL
    const [category, setCategory] = useState([])

<<<<<<< HEAD
    const [Interest, setInterest] = useState([])
    const [selfCourse, setselfCourse] = useState('')
    const [content, setContent] = useState('')

    const handleChangeInterest = (e, values) => {
        // console.log(values)
        setInterest(values)
    }

    const handleChangeSelfCourse = (e) => {
        setselfCourse(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }
=======

    const data = [
        { label: "Java language" },
        { label: "Python language" },
        { label: "C++ language" },
        { label: "C language" },
        { label: "Go language" },
        { label: "JavaScript language" },
        { label: "SQL" },
        { label: "MySQL" },
        { label: "HTML" },
        { label: "CSS" },
        { label: "Nextjs " },
        { label: "ReactJS " },
        { label: "VueJS " },
        { label: "Angular " },
        { label: "Angular JS " },
        { label: "PHP language" },
        { label: "R language" },
        { label: "Objective C language" },
        { label: "Cobol language" },
        { label: "Perl language" },
        { label: "Pascal language" },
        { label: "LISP language" },
        { label: "Fortran language" },
        { label: "Swift language" },
        { label: "Ruby language" },
        { label: "Algol language" },
        { label: "Scala language" },
        { label: "Rust language" },
        { label: "TypeScript language" },
        { label: "Dart language" },
        { label: "Matlab language" },
        { label: "Ada language" },
        { label: ".NET language" },
        { label: "Bash language" },
    ];
>>>>>>> main


    const getCategory = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursecategory/GetCourseCategory`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
<<<<<<< HEAD
                // console.log(res.data)
=======
                console.log(res.data)
>>>>>>> main
                if (res.data.length !== 0) {
                    setCategory(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }

            })
    }
    useEffect(() => {
        getCategory()
    }, []);
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Interests</h4>
          </div>
<<<<<<< HEAD
                <Formik
                    validationSchema={UserValidationSchema}
                    initialValues={{
                        // nRegId : regId,
                        // sFName: sFname ? sFname : tutorDetail.sFName,
                        // sLName: sLname ? sLname : tutorDetail.sLName,
                        // sEmail: sEmail ? sEmail : tutorDetail.sEmail,
                        // sMobile: sMobile ? sMobile : tutorDetail.sMobile,
                        // dDOB : dDOB ? dDOB : '',
                        // sGender: sGender ? sGender : tutorDetail.sGender,
                        // nCountryId: countryId ? countryId : tutorDetail.nCountryId,
                        // nStateId: stateId ? stateId : tutorDetail.nStateId,
                        // nCityId: cityId ? cityId : tutorDetail.nCityId,
                        // IsAdded: isAdded
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, {resetForm}) => {
                        // console.log(values)
                        await Axios.post(`${REACT_APP.API_URL}/api/TutorBasics/AddTutor`, values, {
                            headers: {
                                ApiKey: `${REACT_APP.API_KEY}`
                            }
                        }).then(res => {
                            console.log(res.data)
                            const retData = JSON.parse(res.data)
                            localStorage.removeItem('verify_uname')
                            // console.log(retData)
                            resetForm({})
                            if(retData.success === '1') {
                                router.push('/become-a-tutor/profile-photo')
                            }
                        })
                            .catch(err => {
                                {
                                    ErrorDefaultAlert(JSON.stringify(err.response))
                                }
                            })
                    }}
                >
                    {({errors, touched}) => {
                        return (
                            <>
                                <Form>
                                    <div className={'row'}>
                                        <div className={'col-lg-6'}>
                                            <label>
                                                Select the field of interest for teaching
                                            </label>

                                            <div className={'mt-3'}
                                                 style={{
                                                     flexDirection: "column",
                                                     alignItems: "center",
                                                     justifyContent: "center"
                                                 }}>
                                                <Autocomplete
                                                    multiple
                                                    limitTags={3} // displays only 3 max tags of autocomplete when not in focus
                                                    options={category}
                                                    onChange={handleChangeInterest}
                                                    getOptionLabel={(option) => option.sCategory}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            classes={'border-transparent'}
                                                            {...params}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <label>
                                                Are you interested in creating your own course?
                                            </label>
                                            <div className="form-group d-flex">
                                                <div>
                                                    <input onChange={handleChangeSelfCourse} value={'yes'} id="yes" type="radio" name="course"/>
                                                    <label htmlFor="no">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className={"ms-3"}>
                                                    <input onChange={handleChangeSelfCourse} value={'no'} id="no" type="radio" name="course"/>
                                                    <label htmlFor="no">
                                                        No
                                                    </label>
                                                </div>

                                                <span className="focus-border"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label>
                                                Do you have content to create a course?
                                            </label>
                                            <div className="form-group d-flex">
                                                <div>
                                                    <input id="yes" type="radio" onChange={handleChangeContent} value={'yes'} name="rbt-radio"/>
                                                    <label htmlFor="yes">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className={"ms-3"}>
                                                    <input onChange={handleChangeContent} value={'no'} id="no" type="radio" name="rbt-radio"/>
                                                    <label htmlFor="no">
                                                        No
                                                    </label>
                                                </div>

                                                <span className="focus-border"></span>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-5">
                                            <div className="form-submit-group">
                                                <button
                                                    type="submit"
                                                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                                                >
                                                    <Link href={"/become-a-tutor/time-availability"}
                                                          className={'text-white'}>
=======
            <div className={'row'}>

                <div className={'col-lg-6'}>
                    <label>
                        Select the field of interest for teaching
                    </label>

                    <div className={'mt-3'}
                         style={{
                             // display: "flex",
                             // marginTop: 30,
                             flexDirection: "column",
                             alignItems: "center",
                             justifyContent: "center"
                         }}>
                        <Autocomplete
                            multiple
                            limitTags={3} // displays only 3 max tags of autocomplete when not in focus
                            options={category}
                            getOptionLabel={(option) => option.sCategory}
                            renderInput={(params) => (
                                <TextField
                                    classes={'border-transparent'}
                                    {...params}
                                    // label="Select language"
                                    // placeholder="Programming languages"
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <label>
                        Are you interested in creating your own course?
                    </label>
                    <div className="form-group d-flex">
                        <div>
                            <input id="cat-radio-1" type="radio" name="rbt-radio"/>
                            <label htmlFor="cat-radio-1">
                                Yes
                            </label>
                        </div>
                        <div className={"ms-3"}>
                            <input id="cat-radio-2" type="radio" name="rbt-radio"/>
                            <label htmlFor="cat-radio-2">
                                No
                            </label>
                        </div>

                        <span className="focus-border"></span>
                    </div>
                </div>
                <div className="col-lg-6 mt-3">
                    <label>
                        Do you have content to create a course?
                    </label>
                    <div className="form-group d-flex">
                        <div>
                            <input id="cat-radio-2" type="radio" name="rbt-radio"/>
                            <label htmlFor="cat-radio-2">
                                Yes
                            </label>
                        </div>
                        <div className={"ms-3"}>
                            <input id="cat-radio-3" type="radio" name="rbt-radio"/>
                            <label htmlFor="cat-radio-3">
                                No
                            </label>
                        </div>

                        <span className="focus-border"></span>
                    </div>
                </div>

                <div className="col-lg-12 mt-5">
                    <div className="form-submit-group">
                        <button
                            type="submit"
                            className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                        >
                            <Link href={"/become-a-tutor/time-availability"} className={'text-white'}>
>>>>>>> main

                     <span className="icon-reverse-wrapper">
                      <span className="btn-text">Continue</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
<<<<<<< HEAD
                                                    </Link>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>

                            </>
                        )
                    }}


                </Formik>
=======
                            </Link>

                        </button>
                    </div>
                </div>

            </div>
>>>>>>> main

        </div>
      </div>
    </>
  );
};

export default Interest;
