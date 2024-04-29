import Link from "next/link";
import React, {useEffect, useState} from "react";
import API_URL from '@/pages/constant'
import Axios from "axios";
import { useRouter } from "next/router";
import { Formik, ErrorMessage, Form } from 'formik'
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import img from "@/public/images/others/thumbnail-placeholder.svg";

const Experience = () => {
  const router = useRouter()
  const [country, setCountry] = useState([]);
  const [regId, setregId] = useState('')
  const [fields, showFields] = useState(false)
  const REACT_APP = API_URL
  const defaultValue = new Date().getFullYear();
  const [Isfresher, setIsFresher] = useState()
  const minOffset = 0;
  const maxOffset = 53;

  const ExperienceList = []
  const [expFields, setExpFields] = useState([
    {
      id:1,
      bIs_fresher:Isfresher,
      nTotal_exper:'',
      nTotal_online_exper:'',
      nCountryId:'',
      sOrganization:'',
      sPosition:'',
      sFrom_years:'',
      sTo_years:''
    }
  ]);

  ExperienceList.push(expFields);
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

  const handleChange = (e, index) => {
    // console.log(e.target.checked)
    setIsFresher(e.target.value)
    if(e.target.value === 'experience') {
      showFields(true)
    } else {
      showFields(false)
    }
    // const { value } = e.target;
    // const updatedFields = [...expFields];
    // updatedFields[index].bIs_fresher = value;
    // setExpFields(updatedFields);
  }

  const handleChangeTotalExp = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].nTotal_exper = value;
    setExpFields(updatedFields);
  };

  const handleChangeOnlineExp = (e, index) => {

    const { value } = e.target;
    const updatedFields = [...expFields];
      updatedFields[index].nTotal_online_exper = value;
      setExpFields(updatedFields);

  };
  const handleChangeCountry = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].nCountryId = value;
    setExpFields(updatedFields);
  };

  const handleChangeOrganization = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].sOrganization = value;
    setExpFields(updatedFields);
  };
  const handleChangePosition = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].sPosition = value;
    setExpFields(updatedFields);
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
  const handleYearFromChange = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].sFrom_years = value;
    setExpFields(updatedFields);
  };

  const handleYearToChange = (e, index) => {
    const { value } = e.target;
    const updatedFields = [...expFields];
    updatedFields[index].sTo_years = value;
    setExpFields(updatedFields);
  };

  // const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [cancelButton, setCancelButton] = useState(false);

  const handleAddExperience = () => {
    const newId = expFields.length + 1;
    const newExperience = {
      id: newId,
      bIs_fresher:Isfresher,
      nTotal_exper:'',
      nTotal_online_exper:'',
      nCountryId:'',
      sOrganization:'',
      sPosition:'',
      sFrom_years:'',
      sTo_years:''
    };
    setExpFields([...expFields, newExperience]);
  };

  const handleRemoveExperience = (id) => {
    const updatedFields = expFields.filter((field) => field.id !== id);
    setExpFields(updatedFields);
  };
  const [hideFields, sethideFields] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('userData')) {
      setregId(JSON.parse(localStorage.getItem('userData')).regid)
    }
    bindCountry()
  }, []);
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <Formik
              initialValues={{
                nRegId : regId,
                sExperience : ExperienceList[0]
              }}
              enableReinitialize={true}
              onSubmit={async (values, {resetForm}) => {
                console.log([values])
                if (hideFields === false) {
                  //no education
                  const noExperience = {
                    nRegid : regId,
                    sIsExperience : "Fresher"
                  }
                  // console.log(noEducation)
                  await Axios.post(`${REACT_APP.API_URL}/api/TutorTeachExperience/InsertTutorBasicTeachExp`, noExperience, {
                    headers: {
                      ApiKey: `${REACT_APP.API_KEY}`
                      // 'Content-Type' : 'application/json'
                    }
                  }).then(res => {
                    console.log(res.data)
                    const retData = JSON.parse(res.data)
                    // localStorage.removeItem('verify_uname')
                    // console.log(retData)
                    resetForm({})
                    if(retData.success === '1') {
                      router.push('/become-a-tutor/description')
                    }
                  })
                      .catch(err => {
                        {
                          ErrorDefaultAlert(JSON.stringify(err.response))
                        }
                      })
                } else {
                  // alert('yes education')
                  await Axios.post(`${REACT_APP.API_URL}/api/TutorTeachExperience/InsertTutorTeachExp`, [values], {
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
                      router.push('/become-a-tutor/description')
                    }
                  })
                      .catch(err => {
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
                              <input id="fresher" value={'fresher'} checked={Isfresher === 'fresher'} onChange={handleChange} type="radio"
                                     name="Tech_exp"
                                     className="custom-radio"/>
                              <label htmlFor="fresher">
                                Fresher
                              </label>
                            </div>
                            <div className={"ms-3"}>
                              <input id="experience" value={'experience'} checked={Isfresher === 'experience'} onChange={handleChange} type="radio"
                                     name="Tech_exp"/>
                              <label htmlFor="experience">
                                Experience
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={'row'}>

                        {fields ? <>
                          {expFields.map((education, index) => {
                            return (
                                <>
                                  <div className={'col-lg-6 mt-4'}>
                                    <label style={{fontSize: '15px'}}>
                                      How many years of total experience in teaching?
                                    </label>
                                    <div className="input-group mb-3">
                                      <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Total experience"
                                          value={expFields.nTotal_exper}
                                          onChange={(e) => handleChangeTotalExp(e, index)}

                                      />
                                      <div className="input-group-append">
                                        <span style={{fontSize: '16px'}} className="input-group-text h-100">years</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={'col-lg-6 mt-4'}>
                                    <label style={{fontSize: '16px'}}>
                                      Out of total how many years of online teaching experience?
                                    </label>
                                    <div className="input-group">
                                      <input
                                          type="text"
                                          className="form-control"
                                          placeholder="online experience"
                                          onChange={(e) => handleChangeOnlineExp(e, index)}
                                      />
                                      <div className="input-group-append">
                                        <span style={{fontSize: '14px'}} className="input-group-text h-100">years</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 mt-3">
                                    <label style={{fontSize: '16px'}}>
                                      Country of experience
                                    </label>
                                    {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                                    <select className="w-100" value={education.nCountryId}
                                            onChange={(e) => handleChangeCountry(e, index)}>
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
                                      <input
                                          onChange={(e) => handleChangeOrganization(e, index)}
                                          value={education.sOrganization}
                                          name="organization"
                                          type="text"
                                          placeholder="Organization"
                                      />
                                      <span className="focus-border"></span>
                                    </div>
                                  </div>
                                  <div className={'col-lg-6 mt-3'}>
                                    <label style={{fontSize: '16px'}}>
                                      Position
                                    </label>
                                    <div className="form-group">
                                      <input
                                          onChange={(e) => handleChangePosition(e, index)}
                                          value={education.sPosition}
                                          name="position"
                                          type="text"
                                          placeholder="Posiion"
                                      />
                                      <span className="focus-border"></span>
                                    </div>
                                  </div>
                                  <div className={'col-lg-6 mt-3'}>
                                    <label style={{fontSize: '16px'}}>
                                      Year of study from
                                    </label>
                                    <select value={education.sFrom_years}
                                            onChange={(e) => handleYearFromChange(e, index)}>
                                      {options}
                                    </select>
                                  </div>
                                  <div className={'col-lg-6 mt-3'}>
                                    <label style={{fontSize: '16px'}}>
                                      Year of study to
                                    </label>
                                    <select value={education.sTo_years}
                                            onChange={(e) => handleYearToChange(e, index)}>
                                      <option value="Present">Present</option>
                                      {options}
                                    </select>
                                  </div>
                                  <div className="col-lg-12 text-end mt-2">
                                    <button type={'button'} className="btn btn-danger"
                                            onClick={() => handleRemoveExperience(education.id)}>Remove
                                    </button>
                                  </div>
                                </>
                            )
                          })}
                          <div className={'col-lg-12 mt-5 mb-5'}>
                            <button
                                type={'button'}
                                className="rbt-btn-link left-icon border-0 bg-white"
                                onClick={handleAddExperience}
                            >
                              <i className="feather-plus"></i>Add Experience
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
                            {/*<Link href={"/become-a-tutor/description"} className={'text-white'}>*/}
                                     <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Continue</span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                      </span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                      </span>
                                    </span>
                            {/*</Link>*/}

                          </button>
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

export default Experience;
