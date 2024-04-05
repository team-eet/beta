import Link from "next/link";
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "./Dashboard-Section/widgets/CourseWidget";
import React, {useState, useCallback, useEffect} from "react";
import { ReactTags } from 'react-tag-autocomplete'
import API_URL from '@/pages/constant'
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const Interest = () => {
    const REACT_APP = API_URL
    const [category, setCategory] = useState([])


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


    const getCategory = () => {
        Axios.get(`${REACT_APP.API_URL}/api/coursecategory/GetCourseCategory`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                console.log(res.data)
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

            </div>

        </div>
      </div>
    </>
  );
};

export default Interest;
