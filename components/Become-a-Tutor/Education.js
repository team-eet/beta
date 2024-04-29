import Link from "next/link";
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "./Dashboard-Section/widgets/CourseWidget";
import React, {useState, useEffect} from "react";
import Axios from "axios";
import API_URL from "@/pages/constant";
<<<<<<< HEAD
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import { useRouter } from "next/router";
import {Button, CardText} from "reactstrap";
import {DecryptData, EncryptData} from "@/components/services/encrypt-decrypt";
import img from "@/public/images/others/thumbnail-placeholder.svg";

const Education = () => {
    const router = useRouter()
    const [country, setCountry] = useState([]);
    const [sEdu_Image, setsEdu_Image] = useState('')
    const [regId, setregId] = useState('')
    const [hideFields, sethideFields] = useState(true)
    const [getedu_data, setedu_data] = useState([])
    const [tutorcnt, setTutorcnt] = useState('')
    const minOffset = 0;
    const maxOffset = 53;
    const [drid, setdrid] = useState('')

    const EducationList = []
    const [educationFields, setEducationFields] = useState([
        {
            nCountryId:0,
            sUniversity:'',
            sDegree:'',
            sSpecialization:'',
            sEdu_imagePath:'',
            sEdu_Image: '',
            sFrom_year:'',
            sTo_year:''
        }
    ]);

    EducationList.push(educationFields);

    const handleChangeCountry = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].nCountryId = parseInt(value);
        setEducationFields(updatedFields);
    };

    const handleChangeUniversity = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].sUniversity = value;
        setEducationFields(updatedFields);
    };

    const handleChangeDegree = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].sDegree = value;
        setEducationFields(updatedFields);
    };

    const handleChangeSpecialization = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].sSpecialization = value;
        setEducationFields(updatedFields);
    };

    const [isEducation, setisEducation] = useState('')
    const handleIsEducation= (e) => {
        // console.log(e.target.checked)
        setisEducation(e.target.checked)
        // console.log(e.target.checked)
        if(e.target.checked){
            sethideFields(false)
        } else {
            sethideFields(true)
        }
    }
    const getBase64 = (file) => {
        return new Promise((resolve) => {
            // Make new FileReader
            const reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load something...
            reader.onload = () => {
                const baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleChangeImage = (event, index) => {
        const file = event.target.files[0];
        const updatedFields = [...educationFields];

        const fileext = ['image/jpeg', 'image/jpg', 'image/png'];

        if (event.target.files[0].size < 5000000) {
            if (fileext.includes(event.target.files[0].type)) {
                // console.log(event.target.files[0])
                getBase64(event.target.files[0])
                    .then((result) => {
                        const updatedFields = [...educationFields];
                        updatedFields[index].sEdu_imagePath = result;
                        // updatedFields[index].sEdu_imagePath = result
                        setEducationFields(updatedFields);
                    })
                    .catch((err) => {
                        console.error('Error converting image to base64:', err);
                    });

                const updatedFields = [...educationFields];
                updatedFields[index].sEdu_Image = URL.createObjectURL(event.target.files[0]);
                setEducationFields(updatedFields);
                // setsEdu_Image(URL.createObjectURL(event.target.files[0]));
            } else {
                alert('Please select only image file types (jpeg/jpg/png)');
            }
        } else {
            alert('Please upload a file less than 5MB');
        }
    };

    const handleYearFromChange = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].sFrom_year = value;
        setEducationFields(updatedFields);
    };

    const handleYearToChange = (e, index) => {
        const { value } = e.target;
        const updatedFields = [...educationFields];
        updatedFields[index].sTo_year = value;
        setEducationFields(updatedFields);
    };

    const handleAddEducation = () => {
        const newId = educationFields.length + 1;
        const newEducation = {
            nTEId: 0,
            nCountryId:'',
            sUniversity:'',
            sDegree:'',
            sSpecialization:'',
            sEdu_imagePath:'',
            sEdu_Image:'',
            sFrom_year:'',
            sTo_year:''
        };
        setEducationFields([...educationFields, newEducation]);
    };


    const handleRemoveEducation = (id) => {
        const updatedFields = educationFields.filter((field) => field.nTEId !== id);
        // console.log(updatedFields)
        setEducationFields(updatedFields);

        const deletedFields = educationFields.filter((field) => field.nTEId === id);
        // console.log('deletedFields', deletedFields)

        const deletedarray = deletedFields.map((item) => {
            return item.nTEId
        })
        console.log('deletedArray', deletedarray)
        setdeletedArray(deletedarray)

        const originalArray = updateArray;

        const elementsToRemove = deletedarray;

// Use filter() to create a new array excluding elements to remove
        const filteredArray = originalArray.filter((element) => !elementsToRemove.includes(element));
        // console.log(originalArray)
        // console.log(filteredArray)
        setUpdatearray(filteredArray)
        Axios.delete(`${REACT_APP.API_URL}/api/TutorEducation/DeleteTutorEduc/${EncryptData(deletedarray[0])}`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
               console.log(res.data)
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    };
=======

const Education = () => {
    const [country, setCountry] = useState([]);
    const [countryId, setcountryId] = useState('')
    const [hideFields, sethideFields] = useState(true)
    const [RepeatFields, setRepeatFields] = useState(false)
    const defaultValue = new Date().getFullYear();
    const [selectedYear, SetselectedYear] = useState(new Date().getFullYear());
    const [thisYear, setthisYear] = useState();
    const [selectedYearFrom, setSelectedYearFrom] = useState();
    const [selectedYearTo, setSelectedYearTo] = useState();
    const minOffset = 0;
    const maxOffset = 53;
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // const onHandleChange = (e) => {
    //     // alert(e.target.value),
    //     // console.clear(),
    //     localStorage.setItem("currentYear", e.target.value);
    //     SetselectedYear(e.target.value);
    //     console.log(e.target.value);
    // };
    // console.log("selectedYearFrom:", selectedYearFrom);
    // console.log("selectedYearTo:", selectedYearTo);
    const handleYearFromChange = (e) => {
        const selectedFromYear = parseInt(e.target.value);
        setSelectedYearFrom(selectedFromYear);
        // If the selected "Year of study from" is greater than the selected "Year of study to",
        // update the selected "Year of study to" to match the selected "Year of study from"
        if (selectedFromYear > selectedYearTo) {
            setSelectedYearTo(selectedFromYear);
        }
    };

    const handleYearToChange = (e) => {
        setSelectedYearTo(parseInt(e.target.value));
    };



    const options = [];

    for (let i = minOffset; i <= maxOffset; i++) {
        const year = defaultValue - i;
        // console.log(year)
        // options.push(
        //     <option key={year} value={year} disabled={year < selectedYearFrom}>
        //         {year}
        //     </option>
        // );
        // if (year > selectedYearFrom || year === selectedYearTo) {
            options.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        // }
    }
    // console.log(options)
    {
        // console.log();
    }
>>>>>>> main

    const REACT_APP = API_URL
    const bindCountry = () => {
        Axios.get(`${REACT_APP.API_URL}/api/registration/BindCountry`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                if (res.data.length !== 0) {
                    setCountry(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
    }
<<<<<<< HEAD



    const options = [];
    const defaultValue = new Date().getFullYear();
    for (let i = minOffset; i <= maxOffset; i++) {
        const year = defaultValue - i;
        options.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }

    const [updateArray, setUpdatearray] = useState([])
    const [deletedArray, setdeletedArray] = useState([])
    const [verifySts, setverifySts] = useState()

    useEffect(() => {
        Axios.get(`${REACT_APP.API_URL}/api/TutorEducation/GetTutorEducationVerify/${JSON.parse(localStorage.getItem('userData')).regid}`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                // console.log("GetTutorEducationVerify",res.data)
                if (res.data.length !== 0) {
                    setverifySts(res.data[0].sEducation_verify)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })


        const rid = DecryptData(JSON.parse(localStorage.getItem('userData')).regid)
        // console.log(rid)
        setdrid(rid)
        if(localStorage.getItem('userData')) {
            setregId(JSON.parse(localStorage.getItem('userData')).regid)
        }

        Axios.get(`${REACT_APP.API_URL}/api/TutorBasics/GetTutorProfile/${JSON.parse(localStorage.getItem('userData')).regid}`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                // console.log(res.data)
                if(res.data[0].cnt !== 0) {
                    setTutorcnt(res.data[0].cnt)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })

        Axios.get(`${REACT_APP.API_URL}/api/TutorEducation/GetTutorEducation/${JSON.parse(localStorage.getItem('userData')).regid}`, {
            headers: {
                ApiKey: `${REACT_APP.API_KEY}`
            }
        })
            .then(res => {
                // console.log(res.data)
                const array = res.data.map((item, index) => {
                    return item.nTEId
                })

                // console.log(array)
                setUpdatearray(array)

                // console.log(array)
                // ---------------------
                    if(res.data.length !== 0) {
                        setEducationFields(res.data)
                    } else {
                        setEducationFields(...educationFields)
                    }
                // ---------------------

            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
        // const updatedFields = [...educationFields];
        // console.log(updatedFields)
        bindCountry()
    }, []);

    return (
        <>
            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                <div className="content">
                    <Formik
                        initialValues={{
                            nRegId : regId,
                            sEducation : EducationList[0]
                        }}
                        enableReinitialize={true}
                        onSubmit={async (values, {resetForm}) => {
                            // console.log([values])

                            if(verifySts === 0 || verifySts === 2) {

                                if(tutorcnt !== 0) {
                                    //if tutorcnt is not equal to 0 the call update tutor education api

                                    if (hideFields === false) {
                                        //no education
                                        const noEducation = {
                                            nRegid : regId,
                                            sIsEducation : "true"
                                        }
                                        // console.log(noEducation)
                                        await Axios.post(`${REACT_APP.API_URL}/api/TutorEducation/InsertTutorBasicEducation`, noEducation, {
                                            headers: {
                                                ApiKey: `${REACT_APP.API_KEY}`
                                                // 'Content-Type' : 'application/json'
                                            }
                                        }).then(res => {
                                            // console.log(res.data)
                                            const retData = JSON.parse(res.data)
                                            resetForm({})
                                            if(retData.success === '1') {
                                                router.push('/become-a-tutor/certification')
                                            }
                                        })
                                            .catch(err => {
                                                {
                                                    ErrorDefaultAlert(JSON.stringify(err.response))
                                                }
                                            })
                                    } else {
                                        // alert('yes education')

                                        const updateValues = [{
                                            nRegId : regId,
                                            updateId: updateArray,
                                            deleteId: deletedArray,
                                            sEducation : EducationList[0]
                                        }]
                                        console.log(updateValues)
                                        await Axios.put(`${REACT_APP.API_URL}/api/TutorEducation/UpdateTutorEducation`, updateValues, {
                                            headers: {
                                                ApiKey: `${REACT_APP.API_KEY}`
                                            }
                                        }).then(res => {
                                            console.log(res.data)
                                            const retData = JSON.parse(res.data)
                                            // localStorage.removeItem('verify_uname')
                                            // console.log(retData)
                                            resetForm({})
                                            if(retData.success === '1') {
                                                // router.push('/become-a-tutor/certification')
                                            }
                                        })
                                            .catch(err => {
                                                {
                                                    ErrorDefaultAlert(JSON.stringify(err.response))
                                                }
                                            })
                                    }
                                } else {
                                    //if tutorcnt is equal to 0 the call insert tutor education api

                                    if (hideFields === false) {
                                        //no education
                                        const noEducation = {
                                            nRegid : regId,
                                            sIsEducation : "true"
                                        }
                                        // console.log(noEducation)
                                        await Axios.post(`${REACT_APP.API_URL}/api/TutorEducation/InsertTutorBasicEducation`, noEducation, {
                                            headers: {
                                                ApiKey: `${REACT_APP.API_KEY}`
                                                // 'Content-Type' : 'application/json'
                                            }
                                        }).then(res => {
                                            // console.log(res.data)
                                            const retData = JSON.parse(res.data)
                                            resetForm({})
                                            if(retData.success === '1') {
                                                router.push('/become-a-tutor/certification')
                                            }
                                        })
                                            .catch(err => {
                                                {
                                                    ErrorDefaultAlert(JSON.stringify(err.response))
                                                }
                                            })
                                    } else {
                                        // alert('yes education')
                                        await Axios.post(`${REACT_APP.API_URL}/api/TutorEducation/InsertTutorEducation`, [values], {
                                            headers: {
                                                ApiKey: `${REACT_APP.API_KEY}`
                                            }
                                        }).then(res => {
                                            // console.log(res.data)
                                            const retData = JSON.parse(res.data)
                                            // localStorage.removeItem('verify_uname')
                                            // console.log(retData)
                                            resetForm({})
                                            if(retData.success === '1') {
                                                router.push('/become-a-tutor/certification')
                                            }
                                        })
                                            .catch(err => {
                                                {
                                                    ErrorDefaultAlert(JSON.stringify(err.response))
                                                }
                                            })
                                    }
                                }
                            } else {
                                router.push('/become-a-tutor/certification')
                            }



                        }}
                    >
                        {({errors, touched}) => {
                            return (
                                <>
                                    <Form>
                                        <div className="section-title mb-3">
                                            <h4 className="rbt-title-style-3">Education</h4>
                                            <p>Let us know about the highest education or ongoing degree</p>
                                            <input id="education" type="checkbox" value={isEducation} name="isEducation" onChange={handleIsEducation}/>
                                            <label htmlFor="education">
                                                I have not pursued any professional degree
                                            </label>

                                        </div>
                                        <div className={'row'}>
                                            {hideFields ? <>
                                                {educationFields && educationFields.map((education, index) => (
                                                    <div key={education.nTEId}>
                                                        {/*{console.log(education)}*/}
                                                        <div className={'row'}>
                                                            <div className={'col-lg-6'}>
                                                                <input type={'hidden'} value={education.nTEId} />
                                                                <label>Country of Education</label>
                                                                <select
                                                                    readOnly={verifySts === 1}
                                                                    value={education.nCountryId}
                                                                    onChange={(e) => handleChangeCountry(e, index)}
                                                                >
                                                                    {country.map((item, index) => {
                                                                        return (
                                                                            <>
                                                                                <option key={index}
                                                                                        value={item.nCountryId}>{item.sCountryname}</option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                            <div className={'col-lg-6'}>
                                                                <label>University</label>
                                                                <input
                                                                    // Disable if verifycount is 1
                                                                    readOnly={verifySts === 1} // Make readonly if verifycount is
                                                                    type="text"
                                                                    value={education.sUniversity}
                                                                    onChange={(e) => handleChangeUniversity(e, index)}
                                                                />
                                                            </div>
                                                            <div className={'col-lg-6'}>
                                                                <label>Degree</label>
                                                                <input
                                                                    type="text"
                                                                    readOnly={verifySts === 1}
                                                                    value={education.sDegree}
                                                                    onChange={(e) => handleChangeDegree(e, index)}
                                                                />
                                                            </div>
                                                            <div className={'col-lg-6'}>
                                                                <label>Specialization</label>
                                                                <input
                                                                    type="text"
                                                                    readOnly={verifySts === 1}
                                                                    value={education.sSpecialization}
                                                                    onChange={(e) => handleChangeSpecialization(e, index)}
                                                                />
                                                            </div>
                                                            <div className={'col-lg-6'}>
                                                                <label>Year of study from</label>
                                                                <select value={education.sFrom_year}
                                                                        readOnly={verifySts === 1}
                                                                        onChange={(e) => handleYearFromChange(e, index)}>
                                                                    {options}
                                                                </select>
                                                            </div>
                                                            <div className={'col-lg-6'}>
                                                                <label>Year of study to</label>
                                                                <select readOnly={verifySts === 1} value={education.sTo_year}
                                                                        onChange={(e) => handleYearToChange(e, index)}>
                                                                    <option value="Present">Present</option>
                                                                    {options}
                                                                </select>

                                                            </div>
                                                            <div className={'col-lg-12 mt-5 mb-3'}>
                                                                <div className={'rounded-2 p-3'}
                                                                     style={{background: "#f4f4f8"}}>
                                                                    <h5>Get a qualification verified badge</h5>
                                                                    <small>Upload your diploma to boost your
                                                                        credibility! Our team will review it and add the badge to
                                                                        your profile. Once reviewed, your files will be deleted.
                                                                        JPG or PNG format; maximum size of 2MB</small>
                                                                    <input type="file" className={'p-0 mt-3'}
                                                                           onChange={(e) => handleChangeImage(e, index)}/>

                                                                    {education.sEdu_imagePath && (
                                                                        <img src={education.sEdu_imagePath} alt=""
                                                                             style={{width: 100}}/>
                                                                    )}
                                                                </div>
                                                                {/*<div className={'col-lg-12'}>*/}
                                                                {/*    <label>Upload Image</label>*/}
                                                                {/*    <input*/}
                                                                {/*        type="file"*/}
                                                                {/*        onChange={(e) => handleChangeImage(e, index)}*/}
                                                                {/*    />*/}
                                                                {/*</div>*/}
                                                                {/*{education.eduImage && (*/}
                                                                {/*    <img src={education.eduImage} alt="Uploaded" style={{width: 100}}/>*/}
                                                                {/*)}*/}
                                                            </div>

                                                            {verifySts === 0 || verifySts == 2 ? <>
                                                                <div className="col-lg-12 text-end mt-2">
                                                                    <button type={'button'} className="btn btn-danger"
                                                                            onClick={() => handleRemoveEducation(education.nTEId)}>Remove
                                                                    </button>
                                                                </div>
                                                            </> : <></>}

                                                            {/*<button onClick={() => handleRemoveEducation(education.id)}>Remove</button>*/}
                                                        </div>
                                                    </div>
                                                ))}
                                                {verifySts === 0 || verifySts == 2 ? <>
                                                    <div className={'col-lg-5 mt-5 mb-5'}>
                                                        <button type={'button'}
                                                                className="rbt-btn-link left-icon border-0 bg-white"
                                                                onClick={handleAddEducation}>
                                                            <i className="feather-plus"></i>Add More Education
                                                        </button>
                                                    </div>
                                                </> : <>

                                                </>}

                                            </> : <></>}


                                            <div className="col-lg-12 mt-5">
                                                <div className="form-submit-group">
                                                    <button type="submit"
                                                            className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                                         <span className="icon-reverse-wrapper">
                                                           <span className="btn-text">Continue</span>
                                                           <span className="btn-icon">
                                                             <i className="feather-arrow-right"></i>
                                                           </span>
                                                           <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                           </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                    </Form>

                                </>
                            )
                        }}


                    </Formik>


                </div>
            </div>
        </>
    );
};


=======
    const  handleChangeCountry = (e) => {
        if (e.target.value) {
            setcountryId(e.target.value)
        }
    }

    const handlechange= (e) => {
        // console.log(e.target.checked)
        if(e.target.checked){
            sethideFields(false)
        } else {
            sethideFields(true)

        }
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

    const [fromYear, setFromYear] = useState(2000);
    const [toYear, setToYear] = useState(new Date().getFullYear());

    const years = [];
    for (let i = toYear; i >= 2000; i--) {
        years.push(i);
    }

    // const handleFromYearChange = (e) => {
    //     setFromYear(parseInt(e.target.value));
    // };
    const handleFromYearChange = (e) => {
        const selectedYear = parseInt(e.target.value);
        setFromYear(selectedYear);
        // // Update "to year" to ensure it's not less than the selected "from year"
        // if (toYear < selectedYear) {
        //     setToYear(selectedYear);
        // }
    }

    const handleToYearChange = (e) => {
        const selectedYear = parseInt(e.target.value);
        setToYear(selectedYear);
        // Update "to year" to ensure it's not less than the selected "from year"
        if (toYear < selectedYear) {
            setToYear(selectedYear);
        }
        // setToYear(parseInt(e.target.value));
    };
    useEffect(() => {
        bindCountry()
    }, []);
    return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
              <div className="section-title">
                  <h4 className="rbt-title-style-3">Education</h4>
                  <p>Let us know about the highest education or ongoing degree</p>
                  <input id="cat-list-1" type="checkbox" name="cat-list-1" onChange={handlechange}/>
                  <label htmlFor="cat-list-1">
                      I have not pursued any professional degree
                  </label>
              </div>

                  <form action="#" className="row row--15 mt-5">
                      {hideFields ? <>
                          {educationFields.map((education, index) => {
                              return (
                                  <>
                                      <div className="col-lg-6">
                                          <label>
                                              Country of Education
                                          </label>
                                          {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                                          <select className="w-100" onChange={handleChangeCountry}>
                                              {country.map((item, index) => {
                                                  return (
                                                      <>
                                                          <option key={index}
                                                                  value={item.nCountryId}>{item.sCountryname}</option>
                                                      </>
                                                  )
                                              })}
                                          </select>
                                      </div>
                                      <div className="col-lg-6">
                                          <label>
                                              University
                                          </label>
                                          <div className="form-group">
                                              <input name="con_name" type="text" placeholder="University"/>
                                              <span className="focus-border"></span>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 mt-3">
                                          <label>
                                              Degree
                                          </label>
                                          <div className="form-group">
                                              <input
                                                  name="con_lastname"
                                                  type="text"
                                                  placeholder="Degree"
                                              />

                                              <span className="focus-border"></span>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 mt-3">
                                          <label>
                                              Specialization
                                          </label>
                                          <div className="form-group">
                                              <input
                                                  name="con_lastname"
                                                  type="text"
                                                  placeholder="Specialization"
                                              />

                                              <span className="focus-border"></span>
                                          </div>
                                      </div>
                                      {/*<div className={'col-lg-6'}>*/}
                                      {/*    <label>*/}
                                      {/*        Year of study from*/}
                                      {/*    </label>*/}
                                      {/*    <select value={selectedYear} onChange={onHandleChange}>*/}
                                      {/*        {options}*/}
                                      {/*    </select>*/}
                                      {/*</div>*/}
                                      {/*<div className={'col-lg-6'}>*/}
                                      {/*    <label>*/}
                                      {/*        Year of study to*/}
                                      {/*    </label>*/}
                                      {/*    <select value={selectedYear} onChange={onHandleChange}>*/}
                                      {/*        <option>Present</option>*/}
                                      {/*        {options}*/}
                                      {/*    </select>*/}
                                      {/*</div>*/}
                                      <div className="col-lg-6 mt-3">
                                          <label>Year of study from</label>
                                          <select value={selectedYearFrom} onChange={handleYearFromChange}>
                                              {options}
                                          </select>
                                      </div>
                                      <div className="col-lg-6 mt-3">
                                          <label>Year of study to</label>
                                          <select value={selectedYearTo} onChange={handleYearToChange}>
                                              <option value="Present">Present</option>
                                              {options}
                                          </select>
                                      </div>
                                      {/*<label htmlFor="fromYear">From Year:</label>*/}
                                      {/*<select id="fromYear" value={fromYear} onChange={handleFromYearChange}>*/}
                                      {/*    {years.map((year) => (*/}
                                      {/*        <option key={year} value={year}>*/}
                                      {/*            {year}*/}
                                      {/*        </option>*/}
                                      {/*    ))}*/}
                                      {/*</select>*/}
                                      {/*<label htmlFor="toYear">To Year:</label>*/}
                                      {/*<select id="toYear" value={toYear} onChange={handleToYearChange}>*/}
                                      {/*    {years.map((year) => (*/}
                                      {/*        <option key={year} value={year}>*/}
                                      {/*            {year}*/}
                                      {/*        </option>*/}
                                      {/*    ))}*/}
                                      {/*</select>*/}
                                      <div className={'col-lg-12 mt-5 mb-3'}>
                                          <div className={'rounded-2 p-3'} style={{background: "#f4f4f8"}}>
                                              <h5>Get a qualification verified badge</h5>
                                              <small>Upload your diploma to boost your credibility! Our team will review
                                                  it and add
                                                  the badge to your profile.
                                                  Once reviewed, your files will be deleted.
                                                  JPG or PNG format; maximum size of 7MB</small>

                                              <input type="file" className={'p-0 mt-3'} onChange={handleChange}/>
                                          </div>
                                      </div>
                                      {cancelButton ? <div className="col-lg-12 text-end mt-2">
                                          <button type={'button'} className="btn btn-danger"
                                                  onClick={() => handleCancelEducation(education.id)}>Cancel
                                          </button>
                                      </div> : ''}
                                  </>
                              )
                          })
                          }

                          <div className={'col-lg-5 mt-5 mb-5'}>
                              <button
                                  type={'button'}
                                  className="rbt-btn-link left-icon border-0 bg-white"
                                  onClick={handleAddEducation}
                              >
                                  <i className="feather-plus"></i>Add Education
                              </button>
                              </div>
                              </> : ''}

                          <div className={'col-lg-12'}></div>
                      {/*    {RepeatFields ? <>*/}
                      {/*        {hideFields ? <>*/}
                      {/*            <div className="col-lg-6 mb-5 mt-5">*/}
                      {/*                <label>*/}
                      {/*                    Country of Education*/}
                      {/*                </label>*/}
                      {/*                /!*<div className="rbt-modern-select bg-transparent height-45">*!/*/}
                      {/*                <select className="w-100" onChange={handleChangeCountry}>*/}
                      {/*                    {country.map((item, index) => {*/}
                      {/*                        return (*/}
                      {/*                            <>*/}
                      {/*                                <option key={index}*/}
                      {/*                                        value={item.nCountryId}>{item.sCountryname}</option>*/}
                      {/*                            </>*/}
                      {/*                        )*/}
                      {/*                    })}*/}
                      {/*                </select>*/}
                      {/*            </div>*/}
                      {/*            <div className="col-lg-6 mt-5">*/}
                      {/*                <label>*/}
                      {/*                    University*/}
                      {/*                </label>*/}
                      {/*                <div className="form-group">*/}
                      {/*                    <input name="con_name" type="text" placeholder="University"/>*/}
                      {/*                    <span className="focus-border"></span>*/}
                      {/*                </div>*/}
                      {/*            </div>*/}
                      {/*            <div className="col-lg-6">*/}
                      {/*                <label>*/}
                      {/*                    Degree*/}
                      {/*                </label>*/}
                      {/*                <div className="form-group">*/}
                      {/*                    <input*/}
                      {/*                        name="con_lastname"*/}
                      {/*                        type="text"*/}
                      {/*                        placeholder="Degree"*/}
                      {/*                    />*/}

                      {/*                    <span className="focus-border"></span>*/}
                      {/*                </div>*/}
                      {/*            </div>*/}
                      {/*            <div className="col-lg-6">*/}
                      {/*                <label>*/}
                      {/*                    Specialization*/}
                      {/*                </label>*/}
                      {/*                <div className="form-group">*/}
                      {/*                    <input*/}
                      {/*                        name="con_lastname"*/}
                      {/*                        type="text"*/}
                      {/*                        placeholder="Specialization"*/}
                      {/*                    />*/}

                      {/*                    <span className="focus-border"></span>*/}
                      {/*                </div>*/}
                      {/*            </div>*/}
                      {/*            <div className={'col-lg-6'}>*/}
                      {/*                <label>*/}
                      {/*                    Year of study from*/}
                      {/*                </label>*/}
                      {/*                <select value={selectedYear} onChange={onHandleChange}>*/}
                      {/*                    {options}*/}
                      {/*                </select>*/}
                      {/*            </div>*/}
                      {/*            <div className={'col-lg-6'}>*/}
                      {/*                <label>*/}
                      {/*                    Year of study to*/}
                      {/*                </label>*/}
                      {/*            <select value={selectedYear} onChange={onHandleChange}>*/}
                      {/*                <option>Present</option>*/}
                      {/*                {options}*/}
                      {/*            </select>*/}
                      {/*        </div>*/}
                      {/*        <div className={'col-lg-12 mt-5'}>*/}
                      {/*            <div className={'rounded-2 p-3'} style={{background: "#f4f4f8"}}>*/}
                      {/*                <h5>Get a qualification veified badge</h5>*/}
                      {/*                <small>Upload your diploma to boost your credibility! Our team will review it and*/}
                      {/*                    add*/}
                      {/*                    the badge to your profile.*/}
                      {/*                    Once reviewed, your files will be deleted.*/}
                      {/*                    JPG or PNG format; maximum size of 7MB</small>*/}

                      {/*                <input type="file" className={'p-0 mt-3'} onChange={handleChange}/>*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*        <div className={'col-lg-5 mt-5'}>*/}
                      {/*            <button*/}
                      {/*                className="rbt-btn-link left-icon border-0 bg-white"*/}
                      {/*                onClick={() => setRepeatFields(true)}*/}
                      {/*            >*/}
                      {/*                <i className="feather-plus"></i>Add Education*/}
                      {/*            </button>*/}
                      {/*        </div>*/}
                      {/*    </> : <></>}*/}
                      {/*</> : <></>}*/}
                      <div className="col-lg-12 mt-5">
                          <div className="form-submit-group">
                              <button
                                  type="submit"
                                  className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                              >
                                  <Link href={"/become-a-tutor/certification"} className={'text-white'}>
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
                  </form>


          </div>
      </div>
    </>
    );
};

>>>>>>> main
export default Education;
