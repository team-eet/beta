import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "./Dashboard-Section/widgets/CourseWidget";
import Link from "next/link";
<<<<<<< HEAD
import React, {useEffect, useState} from "react";
import API_URL from "@/pages/constant";
import {Form, Formik} from "formik";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import img from "@/public/images/others/thumbnail-placeholder.svg";
import { useRouter } from "next/router";
=======
import React, {useState} from "react";
import API_URL from "@/pages/constant";
>>>>>>> main

const Certification = () => {
  const [country, setCountry] = useState([]);
  const [countryId, setcountryId] = useState('')
  const [hideFields, sethideFields] = useState(true)
<<<<<<< HEAD
  const defaultValue = new Date().getFullYear();
  const [regId, setregId] = useState('')
  // const [selectedYear, SetselectedYear] = useState(new Date().getFullYear());
  // const [thisYear, setthisYear] = useState(defaultValue);
  const minOffset = 0;
  const maxOffset = 53;
  const [Certi_Image, setCerti_Image] = useState('')

  // const [file, setFile] = useState();

  const CertificationList = []
  const [certificationFields, setcertificationFields] = useState([
    {
      id:1,
      sCerti_title:'',
      sIssued_by:'',
      sCerti_imagePath:'',
      sFrom_year:'',
      sTo_year:'',
    }
  ]);

  CertificationList.push(certificationFields);


  const handleChangeTitle = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...certificationFields];
    updatedFields[index].sCerti_title = value;
    setcertificationFields(updatedFields);
  };

  const handleChangeIssuedBy = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...certificationFields];
    updatedFields[index].sIssued_by = value;
    setcertificationFields(updatedFields);
  };

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
    const updatedFields = [...certificationFields];

    const fileext = ['image/jpeg', 'image/jpg', 'image/png'];

    if (event.target.files[0].size < 5000000) {
      if (fileext.includes(event.target.files[0].type)) {
        // console.log(event.target.files[0])
        getBase64(event.target.files[0])
            .then((result) => {
              const updatedFields = [...certificationFields];
              updatedFields[index].sCerti_imagePath = result;
              // updatedFields[index].sEdu_imagePath = result
              setcertificationFields(updatedFields);
            })
            .catch((err) => {
              console.error('Error converting image to base64:', err);
            });

        setCerti_Image(URL.createObjectURL(event.target.files[0]));
      } else {
        alert('Please select only image file types (jpeg/jpg/png)');
      }
    } else {
      alert('Please upload a file less than 5MB');
    }
  };

  const handleYearFromChange = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...certificationFields];
    updatedFields[index].sFrom_year = value;
    setcertificationFields(updatedFields);
  };

  const handleYearToChange = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...certificationFields];
    updatedFields[index].sTo_year = value;
    setcertificationFields(updatedFields);
  };
=======
  const [RepeatFields, setRepeatFields] = useState(false)
  const defaultValue = new Date().getFullYear();
  const [selectedYear, SetselectedYear] = useState(new Date().getFullYear());
  const [thisYear, setthisYear] = useState(defaultValue);
  const minOffset = 0;
  const maxOffset = 53;
  const [file, setFile] = useState();
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
>>>>>>> main

  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [cancelButton, setCancelButton] = useState(false);

<<<<<<< HEAD
  const handleAddCertification = () => {
    const newId = certificationFields.length + 1;
    const newCertification = {
      id: newId,
      sCerti_title:'',
      sIssued_by:'',
      sCerti_imagePath:'',
      sFrom_year:'',
      sTo_year:''
    };
    setcertificationFields([...certificationFields, newCertification]);
  };

  const handleRemoveCertification = (id) => {
    const updatedFields = certificationFields.filter((field) => field.id !== id);
    setcertificationFields(updatedFields);
  };

  const REACT_APP = API_URL

=======
  const handleAddEducation = () => {
    const newId = educationFields.length + 1;
    setEducationFields([...educationFields, { id: newId }]);
    setCancelButton(true)
  };

  const handleCancelEducation = (id) => {
    setEducationFields(educationFields.filter(field => field.id !== id));
  };

  const REACT_APP = API_URL
  const handlechange= (e) => {
    // console.log(e.target.checked)
    if(e.target.checked){
      sethideFields(false)
    } else {
      sethideFields(true)
    }
  }
  const onHandleChange = (e) => {
    // alert(e.target.value),
    // console.clear(),
    localStorage.setItem("currentYear", e.target.value);
    SetselectedYear(e.target.value);
    console.log(e.target.value);
  };
>>>>>>> main

  const options = [];

  for (let i = minOffset; i <= maxOffset; i++) {
    const year = defaultValue - i;
    options.push(
        <option key={year} value={year}>
          {year}
        </option>
    );
  }
<<<<<<< HEAD
  const [isCertified, setisCertified] = useState('')
  const handleIsCertification= (e) => {
    // console.log(e.target.checked)
    setisCertified(e.target.checked)
    // console.log(e.target.checked)
    if(e.target.checked){
      sethideFields(false)
    } else {
      sethideFields(true)
    }
  }

  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('userData')) {
      setregId(JSON.parse(localStorage.getItem('userData')).regid)
    }
  }, []);

=======
  {
    console.log();
  }

>>>>>>> main
  return (
      <>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
<<<<<<< HEAD
            <Formik
                initialValues={{
                  nRegId : regId,
                  sCertification : CertificationList[0]
                }}
                enableReinitialize={true}
                onSubmit={async (values, {resetForm}) => {
                  console.log([values])
                  if (hideFields === false) {
                    //no education
                    const noCertification = {
                      nRegid : regId,
                      sIsCertification : "true"
                    }
                    // console.log(noEducation)
                    await Axios.post(`${REACT_APP.API_URL}/api/TutorCertification/InsertTutorBasicCertificate`, noCertification, {
                      headers: {
                        ApiKey: `${REACT_APP.API_KEY}`
                        // 'Content-Type' : 'application/json'
                      }
                    }).then(res => {
                      // console.log(res.data)
                      const retData = JSON.parse(res.data)
                      // localStorage.removeItem('verify_uname')
                      // console.log(retData)
                      resetForm({})
                      if(retData.success === '1') {
                        router.push('/become-a-tutor/teaching-experience')
                      }
                    })
                        .catch(err => {
                          {
                            ErrorDefaultAlert(JSON.stringify(err.response))
                          }
                        })
                  } else {
                    // alert('yes education')
                    await Axios.post(`${REACT_APP.API_URL}/api/TutorCertification/InsertTutorCertificate  `, [values], {
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
                        router.push('/become-a-tutor/teaching-experience')
                      }
                    })
                        .catch(err => {
                          console.log(err)
                          {
                            ErrorDefaultAlert(JSON.stringify(err.response))
                          }
                        })
                  }

                }}
            >
              {({errors, touched}) => {
                return (
                    <>
                      <Form>
                        <div className="section-title mb-3">
                          <h4 className="rbt-title-style-3">Certification</h4>
                          <p>Let us know about teaching certification</p>
                          <input id="Certifcation" type="checkbox" value={isCertified} name="isCertification" onChange={handleIsCertification}/>
                          <label htmlFor="Certifcation">
                            I have not pursued any professional teaching certification
                          </label>
                        </div>
                        <div className={'row'}>

                          {/*<form action="#" className="row row--15 mt-5">*/}
                            {hideFields ? <>
                              {certificationFields.map((certification, index) => {
                                return (
                                    <>
                                      <div key={certification.id}>
                                        <div className={'row'}>
                                          <div className="col-lg-6">
                                            <label>
                                              Certification Title
                                            </label>
                                            <div className="form-group">
                                              <input
                                                  onChange={(e) => handleChangeTitle(e, index)}
                                                  value={certification.sCerti_title}
                                                  type="text"
                                                  placeholder="Certification Title"/>
                                              <span className="focus-border"></span>
                                            </div>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>
                                              Issued By
                                            </label>
                                            <div className="form-group">
                                              <input
                                                  onChange={(e) => handleChangeIssuedBy(e, index)}
                                                  value={certification.sIssued_by}
                                                  type="text"
                                                  placeholder="Issued By"/>
                                              <span className="focus-border"></span>
                                            </div>
                                          </div>
                                          <div className={'col-lg-6 mt-3'}>
                                            <label>
                                              Year of study from
                                            </label>
                                            <select value={certification.sFrom_year}
                                                    onChange={(e) => handleYearFromChange(e, index)}>
                                              {options}
                                            </select>

                                          </div>
                                          <div className={'col-lg-6 mt-3'}>
                                            <label>
                                              Year of study to
                                            </label>
                                            <select value={certification.sTo_year}
                                                    onChange={(e) => handleYearToChange(e, index)}>
                                              <option value="Present">Present</option>
                                              {options}
                                            </select>
                                          </div>
                                          <div className={'col-lg-12 mt-5 mb-3'}>
                                            <div className={'rounded-2 p-3'} style={{background: "#f4f4f8"}}>
                                              <h5>Get a certification verified badge</h5>
                                              <small>Upload your diploma to boost your credibility! Our team will review
                                                it and add
                                                the badge to your profile.
                                                Once reviewed, your files will be deleted.
                                                JPG or PNG format; maximum size of 7MB</small>

                                              <input type="file" className={'p-0 mt-3'}
                                                     onChange={(e) => handleChangeImage(e, index)}/>

                                              {Certi_Image && (
                                                  <img src={Certi_Image} alt="Uploaded"
                                                       style={{width: 100}}/>
                                              )}                                            </div>
                                          </div>
                                          <div className="col-lg-12 text-end mt-2">
                                            <button type={'button'} className="btn btn-danger"
                                                    onClick={() => handleRemoveCertification(certification.id)}>Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>


                                    </>
                                )
                              })
                              }

                              <div className={'col-lg-5 mt-5 mb-5'}>
                                <button
                                    type={'button'}
                                    className="rbt-btn-link left-icon border-0 bg-white"
                                    onClick={handleAddCertification}
                                >
                                  <i className="feather-plus"></i>Add Certification
                                </button>
                              </div>
                            </> : ''}

                            <div className="col-lg-12 mt-5">
                              <div className="form-submit-group">
                                <button
                                    type="submit"
                                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                                >
                                  {/*<Link href={"/become-a-tutor/teaching-experience"} className={'text-white'}>*/}
=======
            <div className="section-title">
              <h4 className="rbt-title-style-3">Certification</h4>
              <p>Let us know about teaching certification</p>
              <input id="cat-list-1" type="checkbox" name="cat-list-1" onChange={handlechange}/>
              <label htmlFor="cat-list-1">
                I have not pursued any professional teaching certification
              </label>
            </div>

            <form action="#" className="row row--15 mt-5">
              {hideFields ? <>
                {educationFields.map((education, index) => {
                  return (
                      <>
                        <div className="col-lg-6">
                          <label>
                            Certification Title
                          </label>
                          <div className="form-group">
                            <input name="con_name" type="text" placeholder="Certification Title"/>
                            <span className="focus-border"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label>
                            Issued By
                          </label>
                          <div className="form-group">
                          <input name="con_name" type="text" placeholder="Issued By"/>
                            <span className="focus-border"></span>
                          </div>
                        </div>
                        <div className={'col-lg-6 mt-3'}>
                          <label>
                            Year of study from
                          </label>
                          <select value={selectedYear} onChange={onHandleChange}>
                            {options}
                          </select>
                        </div>
                        <div className={'col-lg-6 mt-3'}>
                          <label>
                            Year of study to
                          </label>
                          <select value={selectedYear} onChange={onHandleChange}>
                            <option>Present</option>
                            {options}
                          </select>
                        </div>
                        <div className={'col-lg-12 mt-5 mb-3'}>
                          <div className={'rounded-2 p-3'} style={{background: "#f4f4f8"}}>
                            <h5>Get a certification verified badge</h5>
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
                    <i className="feather-plus"></i>Add Certification
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
                    <Link href={"/become-a-tutor/teaching-experience"} className={'text-white'}>
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
                                  {/*</Link>*/}

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
            </form>

>>>>>>> main

          </div>
        </div>

        {/*<div className="rbt-dashboard-content bg-color-white rbt-shadow-box">*/}
        {/*  <div className="content">*/}
        {/*    <div className="section-title">*/}
        {/*      <h4 className="rbt-title-style-3">Certification</h4>*/}
        {/*    </div>*/}
<<<<<<< HEAD
        {/*<div className="row g-5">*/}
        {/*  {Courses.slice(0, 6)?.map((slide, index) => (*/}
        {/*    <div*/}
        {/*      className="col-lg-4 col-md-6 col-12"*/}
        {/*      key={`course-wishlist-${index}`}*/}
        {/*    >*/}
        {/*      <CourseWidgets*/}
        {/*        data={slide}*/}
        {/*        courseStyle="two"*/}
        {/*        isCompleted={false}*/}
        {/*        isProgress={false}*/}
        {/*        showDescription={false}*/}
        {/*        showAuthor={false}*/}
        {/*        isEdit={false}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
=======
            {/*<div className="row g-5">*/}
            {/*  {Courses.slice(0, 6)?.map((slide, index) => (*/}
            {/*    <div*/}
            {/*      className="col-lg-4 col-md-6 col-12"*/}
            {/*      key={`course-wishlist-${index}`}*/}
            {/*    >*/}
            {/*      <CourseWidgets*/}
            {/*        data={slide}*/}
            {/*        courseStyle="two"*/}
            {/*        isCompleted={false}*/}
            {/*        isProgress={false}*/}
            {/*        showDescription={false}*/}
            {/*        showAuthor={false}*/}
            {/*        isEdit={false}*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</div>*/}
>>>>>>> main
        {/*  </div>*/}
        {/*</div>*/}
      </>
  );
};

export default Certification;
