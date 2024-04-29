import React, {useEffect, useState} from "react";
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";
import API_URL from '@/pages/constant'
<<<<<<< HEAD
import Link from "next/link";
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'
import Axios from 'axios'
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import { useRouter } from "next/router";
import {Button, CardText} from 'reactstrap'
import {DecryptData} from "@/components/services/encrypt-decrypt";
import {RecaptchaVerifier, sendSignInLinkToEmail, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "@/context/firebase";
import {toast} from "react-toastify";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserValidationSchema = Yup.object().shape({
  sFName: Yup.string()
      .required('This field is required'),
  sLName: Yup.string()
      .required('This field is required'),
  sMobile: Yup.string()
      .required('This field is required'),
  dDOB: Yup.string()
      .required('This field is required'),
  nCountryId: Yup.string()
      .required('This field is required'),
  nStateId: Yup.string()
      .required('This field is required'),
  nCityId: Yup.string()
      .required('This field is required')
})

const emailpattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
let chkErr = ''
let error = ''
const Basics = () => {
    const REACT_APP = API_URL
    const router = useRouter();

  const [sFname, setsFname] = useState('')
  const [sLname, setsLname] = useState('')
  const [sEmail, setsEmail] = useState('')
  const [sMobile, setsMobile] = useState('')
  const [dDOB, setdDOB] = useState('')
  const [sGender, setsGender] = useState('')
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [countryId, setcountryId] = useState('101')
  const [stateId, setstateId] = useState('')
  const [cityId, setcityId] = useState('')

  const handleFname = (e) => {
    setsFname(e.target.value)
  }
  const handleLname = (e) => {
    setsLname(e.target.value)
  }

  const handleEmail = (e) => {
    setsEmail(e.target.value)
  }

  const handleMobile = (e) => {
      setmob_verify(false)
        setsMobile(e.target.value)
  }

    const [ageErrorMessage, setAgeErrorMessage] = useState(''); // State for age validation message

    const handleDOB = (e) => {

        if (e.target.value) {
            const today = new Date();
            const birthDate = new Date(e.target.value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            // Check if the birthday hasn't occurred yet this year
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                setAgeErrorMessage('You must be at least 18 years old.'); // Set error message for age below 18
            } else {
                setAgeErrorMessage(''); // Clear error message if age is 18 or above
                // Proceed with further actions if needed
                setdDOB(e.target.value)
            }
        }
    }
  const handleGender = (e) => {
    setsGender(e.target.value)
  }
=======
import Axios from "axios";
import Link from "next/link";

const Basics = () => {
  const REACT_APP = API_URL

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [countryId, setcountryId] = useState('')
  const [stateId, setstateId] = useState('')
>>>>>>> main
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
<<<<<<< HEAD
              const defaultCountry = res.data.find(item => item.sCountryname === 'India')
              if (defaultCountry) {
                  setcountryId(defaultCountry.nCountryId); // Set default countryId to India's ID
              }
=======
>>>>>>> main
          }
        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
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


  const  handleChangeState = (e) => {
    if (e.target.value) {
      setstateId(e.target.value)
      Axios.get(`${REACT_APP.API_URL}/api/registration/BindCity/${e.target.value}`, {
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
              setCity(res.data)
            }
          })
          .catch(err => {
            { ErrorDefaultAlert(err) }
          })
    }
  }
<<<<<<< HEAD

  const handleChangeCity = (e) => {
    setcityId(e.target.value)
  }

  const VerifyEmail = () => {
      // console.log(sEmail)

      if(emailpattern.test(sEmail)) {
          sendSignInLinkToEmail(auth, sEmail, {
              // this is the URL that we will redirect back to after clicking on the link in mailbox
              // url: 'https://eet-frontend.azurewebsites.net/userreg',
              url: 'http://localhost:3000/become-a-tutor/basics',
              handleCodeInApp: true
          }).then(() => {
              localStorage.setItem('verify_email', JSON.stringify(sEmail))
              // localStorage.setItem('email', email)
              // setLoginLoading(false)
              // setLoginError('')
              // this.setState({ infoEmail : true })
              // const userData = { em: (input.emailmobile), emname: (emailOrmobile) }
              // localStorage.setItem('userRegData', JSON.stringify(userData))
              alert('We have sent you an email with a link to sign in')
          }).catch(err => {
              // console.error('Firebase Error:', err.code, err.message)

              // alert(err)
          })
      }
  }

    const [getShowOtp, setShowOtp] = useState(false)
  const [mob_verify, setmob_verify] = useState(false)
  const verifyMobile = () => {

          // console.log(value)
          Axios.get(`${REACT_APP.API_URL}/api/registration/CheckEmailMobileExist/${sMobile}`, {
              headers: {
                  ApiKey: `${REACT_APP.API_KEY}`
              }
          }).then(res => {
              // console.log('called')
              if (res.data[0].ecnt === 1) {
                  if (emailpattern.test(sMobile)) {
                      chkErr = 'Email already exists'
                      // alert('Email already exists.')
                  } else {
                      chkErr = 'Mobile number already exists'
                      // alert('Mobile already exists.')
                      setmob_verify(true)
                  }

              } else {
                  // alert('go ahead')
                  const verify = new RecaptchaVerifier(auth, 'recaptcha', {})
                  // console.log(verify)
                  const phone = `+91${sMobile}`
                  const confirmation = signInWithPhoneNumber(auth, phone, verify)
                      .then((code) => {
                          window.code = code
                          setresult(code)
                          setShowOtp(true)
                          document.getElementById('recaptcha').style.display = 'none'
                      })
              }
          })
              .catch(err => {
                  toast.error('OTP not sent.')
              })
      if (chkErr) {
          error = chkErr
      }
      return error

  }
  const [regId, setregId] = useState('')
  const [username, setUsername] = useState('')
    const [otpValues, setOtpValues] = useState({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: ''
    });

    const [result, setresult] = useState('')
    const [verified, setverified] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // setRegister(true)

        const { otp1, otp2, otp3, otp4, otp5, otp6 } = otpValues;

        // Check if all OTP fields are filled
        if (otp1 && otp2 && otp3 && otp4 && otp5 && otp6) {
            const finalOtp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

            // Assuming this.state.result.confirm() returns a Promise
            result.confirm(finalOtp)
                .then((result) => {
                    // router.push('/userreg');
                    setShowOtp(false)
                    document.getElementById('recaptcha').style.display = 'none'
                    setverified(true)
                    localStorage.setItem('verify_mobile', sMobile)
                    // setRegister(true)
                }).catch((err) => {
                // Display error notification if OTP is invalid
                toast.error('Invalid OTP');
            });
        } else {
            // Alert user to enter OTP if any field is empty
            alert("Please enter OTP");
        }
    };

    const inputFocus = (event) => {
        if (event.key === "Delete" || event.key === "Backspace") {
            const next = event.target.tabIndex - 2
            if (next > -1) {
                event.target.form.elements[next].focus()
            }
        } else {
            const next = event.target.tabIndex
            if (next < 6) {
                event.target.form.elements[next].focus()
            }
        }
    };
    const handleChange = (valueName, event) => {
        setOtpValues({
            ...otpValues,
            [valueName]: event.target.value
        });
    };

    const [showContinue, setshowContinue] = useState(false)
    const [isAdded, setisAdded] = useState(true)
    const [tutorDetail, setTutorDetail] = useState([])
  useEffect(() => {
      if(localStorage.getItem('userData')) {
          setsFname(JSON.parse(localStorage.getItem('userData')).fname)
          setsLname(JSON.parse(localStorage.getItem('userData')).lname)
          setregId(JSON.parse(localStorage.getItem('userData')).regid)
          setUsername(DecryptData(JSON.parse(localStorage.getItem('userData')).username))
          setsMobile(JSON.parse(localStorage.getItem('verify_mobile')))
      }

      Axios.get(`${REACT_APP.API_URL}/api/TutorBasics/GetTutorProfile/${JSON.parse(localStorage.getItem('userData')).regid}`, {
          headers: {
              ApiKey: `${REACT_APP.API_KEY}`
          }
      })
          .then(res => {
              // console.log(res.data)
              // if(res.data.)
              if(res.data[0].cnt !== 0) {
                  setisAdded(false)
                  setshowContinue(true)
              } else {
                  setisAdded(true)
                  setshowContinue(false)
              }
          })
          .catch(err => {
              { ErrorDefaultAlert(err) }
          })

      const formatDate = (dateTimeString) => {
          const date = new Date(dateTimeString); // Create a Date object from the dateTimeString
          const day = date.getDate(); // Get the day of the month (1-31)
          const monthNames = [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];
          const month = monthNames[date.getMonth()]; // Get the month name (short form)
          const year = date.getFullYear(); // Get the year (4-digit)

          const paddedDay = (day < 10) ? `0${day}` : day;
          // Construct the formatted date string in the "DD-Mon-YYYY" format
          const formattedDate = `${paddedDay}-${month}-${year}`;
          return formattedDate;
      };
          Axios.get(`${REACT_APP.API_URL}/api/TutorBasics/GetTutorDetails/${JSON.parse(localStorage.getItem('userData')).regid}`, {
          headers: {
              ApiKey: `${REACT_APP.API_KEY}`
          }
      })
          .then(res => {
              console.log(res.data)
              setTutorDetail(res.data[0])
              setsFname(res.data[0].sFName)
              setsLname(res.data[0].sLName)
              setsMobile(res.data[0].sMobile)
              setsEmail(res.data[0].sEmail)
              setsGender(res.data[0].sGender)
              setcountryId(res.data[0].nCountryId)
              setcityId(res.data[0].nCityId)
              setstateId(res.data[0].nStateId)
              // setdDOB(res.data[0].dDOB)

              const dateTimeString = res.data[0].dDOB; // Example input date and time string

              const formattedDate = formatDate(res.data[0].dDOB);
              console.log(formattedDate)
              setdDOB(formattedDate);
              // setdDOB(formattedDate);
              Axios.get(`${REACT_APP.API_URL}/api/registration/BindState/${res.data[0].nCountryId}`, {
                  headers: {
                      ApiKey: `${REACT_APP.API_KEY}`
                  }
              })
                  .then(ret => {
                      // console.log(ret.data)
                      if (ret.data.length !== 0) {
                          setState(ret.data)
                      }
                      const defaultState = ret.data.filter(item => item.nStateId === res.data[0].nStateId)

                      if (defaultState) {
                          setstateId(res.data[0].nStateId);
                      }
                  })
                  .catch(err => {
                      { ErrorDefaultAlert(err) }
                  })

              Axios.get(`${REACT_APP.API_URL}/api/registration/BindCity/${res.data[0].nStateId}`, {
                  headers: {
                      ApiKey: `${REACT_APP.API_KEY}`
                  }
              })
                  .then(ret => {
                      // console.log(ret.data)
                      if (ret.data.length !== 0) {
                          setCity(ret.data)
                      }
                      const defaultcity = ret.data.filter(item => item.nCityId === res.data[0].nCityId)

                      // console.log('defaultstate', defaultcity)
                      if (defaultcity) {
                          setcityId(res.data[0].nCityId); // Set default countryId to India's ID
                      }
                  })
                  .catch(err => {
                      { ErrorDefaultAlert(err) }
                  })
              // if(res.data.)
              // if(res.data[0].cnt !== 0) {
              //     setshowContinue(true)
              // } else {
              //     setshowContinue(false)
              // }
          })
          .catch(err => {
              { ErrorDefaultAlert(err) }
          })

      bindCountry()

  }, []);
  return (
    <>
        {/*{console.log(sEmail)}*/}
=======
  useEffect(() => {
    bindCountry()
  }, []);
  return (
    <>
>>>>>>> main
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Basics</h4>
          </div>
<<<<<<< HEAD
          <Formik
              validationSchema={UserValidationSchema}
              initialValues={{
                  nRegId : regId,
                  sFName: sFname ? sFname : tutorDetail.sFName,
                  sLName: sLname ? sLname : tutorDetail.sLName,
                  sEmail: sEmail ? sEmail : tutorDetail.sEmail,
                  sMobile: sMobile ? sMobile : tutorDetail.sMobile,
                  dDOB : dDOB ? dDOB : '',
                  sGender: sGender ? sGender : tutorDetail.sGender,
                  nCountryId: countryId ? countryId : tutorDetail.nCountryId,
                  nStateId: stateId ? stateId : tutorDetail.nStateId,
                  nCityId: cityId ? cityId : tutorDetail.nCityId,
                  IsAdded: isAdded
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
                          <div className={'row row--15'}>
                              <div className="col-lg-6">
                                  <label>
                                      First Name
                                  </label>
                                  <div className="form-group">
                                      <input
                                          onChange={handleFname}
                                          value={sFname}
                                          className={`form-control ${errors.sFName && touched.sFName && 'is-invalid'}`}
                                          name="sFName"
                                          type="text"
                                          placeholder="First Name"
                                      />
                                      <ErrorMessage name='sFName' component='div'
                                                    className='field-error text-danger'/>
                                      <span className="focus-border"></span>
                                  </div>
                              </div>

                              <div className="col-lg-6">
                                  <label>
                                      Last Name
                                  </label>
                                  <div className="form-group">
                                      <input
                                          onChange={handleLname}
                                          value={sLname}
                                          className={`form-control ${errors.sLName && touched.sLName && 'is-invalid'}`}
                                          name="sLName"
                                          type="text"
                                          placeholder="Last Name"
                                      />
                                      <ErrorMessage name='sLName' component='div'
                                                    className='field-error text-danger'/>
                                      <span className="focus-border"></span>
                                  </div>
                              </div>

                              <div className="col-lg-6 mt-3">
                                  <label>
                                      Phone number
                                  </label>
                                  <div className="form-group">
                                      <div className={'d-flex'}>

                                          {username.EM !== 'mobile' ?
                                              <>
                                                  {verified ? <>
                                                      <input
                                                          // onChange={handleMobile}
                                                          value={sMobile}
                                                          className={`form-control bg-secondary-opacity ${errors.sMobile && touched.sMobile && 'is-invalid'}`}
                                                          name="sMobile"
                                                          type="text"
                                                          placeholder="Phone Number"
                                                      />
                                                      <Button className={'btn-email-verified btn-success p-4'}><i
                                                          className={'feather-check'}></i></Button>
                                                  </> : <>
                                                      <input
                                                          onChange={handleMobile}
                                                          value={sMobile}
                                                          className={`form-control ${errors.sMobile && touched.sMobile && 'is-invalid'}`}
                                                          name="sMobile"
                                                          type="text"
                                                          placeholder="Phone Number"
                                                      />
                                                      {sMobile !== null ? <>
                                                          <Button className={'btn-email-verified btn-success p-4'}>
                                                              <i className={'feather-check'}></i></Button>
                                                      </> : <>
                                                          <Button onClick={verifyMobile}
                                                                  className={'btn-mob-verify'}>Verify</Button>
                                                      </>}

                                                  </>}

                                              </> : <>
                                                  <>
                                                      <input
                                                          // onChange={handleEmail}
                                                          value={username.Username}
                                                          className={`form-control bg-secondary-opacity ${errors.sMobile && touched.sMobile && 'is-invalid'}`}
                                                          name="sMobile"
                                                          type="text"
                                                          placeholder="Phone Number"
                                                      /> <Button className={'btn-email-verified btn-success p-4'}>
                                                      <i className={'feather-check'}></i></Button>
                                                  </>
                                              </>}
                                      </div>

                                      <ErrorMessage name='sMobile' component='div'
                                                    className='field-error text-danger'/>
                                      <span className="focus-border"></span>

                                  </div>
                                  {mob_verify ? <>
                                      <span className={'text-danger'}>Mobile number already exists!</span>
                                  </> : <></>}
                              </div>

                              <div className="col-lg-6 mt-3">
                                  <label>
                                      Email
                                  </label>
                                  <div className="form-group">
                                      <div className={'d-flex'}>
                                          {username ? <>
                                              <input
                                                  // onChange={handleEmail}
                                                  value={username.Username}
                                                  className={`form-control bg-secondary-opacity`}
                                                  name="sEmail"
                                                  type="email"
                                                  placeholder="Email"
                                              /> <Button className={'btn-email-verified btn-success p-4'}><i
                                              className={'feather-check'}></i></Button>
                                          </> : <>
                                              <input
                                                  onChange={handleEmail}
                                                  value={sEmail}
                                                  className={`form-control`}
                                                  name="sEmail"
                                                  type="email"
                                                  placeholder="Email"
                                                  // disabled={true}
                                              />
                                              <Button onClick={VerifyEmail}
                                                      className={'btn-email-verify'}>Verify</Button>
                                          </>}


                                      </div>
                                      <span className="focus-border"></span>
                                  </div>
                              </div>


                              <div className={'col-lg-12 mt-3'}>
                                  <div id="recaptcha" className={'m-t-5 mb-3'}></div>
                              </div>
                              {getShowOtp ? <>

                                  <div className={'col-lg-12 mt-3'}>

                                      <Form className='auth-register-form mt-1'>
                                          <CardText className='m-0'>Enter OTP</CardText>
                                          <div className="otpContainer">

                                              <input
                                                  name="otp1"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp1}
                                                  onChange={(e) => handleChange('otp1', e)}
                                                  // onKeyDown={inputFocus}
                                                  // onChange={e => this.handleChange("otp1", e)}
                                                  tabIndex="1"
                                                  maxLength="1"
                                                  onKeyUp={inputFocus}
                                              />
                                              <input
                                                  name="otp2"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp2}
                                                  onChange={(e) => handleChange('otp2', e)}
                                                  // onKeyDown={inputFocus}
                                                  // onChange={e => this.handleChange("otp1", e)}
                                                  onKeyUp={inputFocus}
                                                  tabIndex="2"
                                                  maxLength="1"
                                              />
                                              <input
                                                  name="otp3"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp3}
                                                  onChange={(e) => handleChange('otp3', e)}
                                                  // onKeyDown={inputFocus}
                                                  // onChange={e => this.handleChange("otp1", e)}
                                                  onKeyUp={inputFocus}
                                                  tabIndex="3" maxLength="1"

                                              />
                                              <input
                                                  name="otp4"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp4}
                                                  onChange={(e) => handleChange('otp4', e)}
                                                  onKeyUp={inputFocus}
                                                  tabIndex="4" maxLength="1"
                                              />

                                              <input
                                                  name="otp5"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp5}
                                                  onChange={(e) => handleChange('otp5', e)}
                                                  onKeyUp={inputFocus}
                                                  tabIndex="5" maxLength="1"
                                              />

                                              <input
                                                  name="otp6"
                                                  type="text"
                                                  autoComplete="off"
                                                  className="otpInput"
                                                  value={otpValues.otp6}
                                                  onChange={(e) => handleChange('otp6', e)}
                                                  onKeyUp={inputFocus}
                                                  tabIndex="6" maxLength="1"
                                              />
                                              <button className="rbt-btn btn-gradient mt-4" style={{lineHeight: '3'}}
                                                      onClick={handleSubmit}>
                                                  Submit
                                              </button>
                                          </div>
                                      </Form>
                                  </div>
                              </> : <></>}
                              <div className="col-lg-6 mt-3">
                                  <label>
                                      Date of Birth
                                  </label>
                                  {/*<DatePicker label="Basic date picker" />*/}
                                  <div className="form-group">
                                      <input
                                          onChange={handleDOB}
                                          value={dDOB}
                                          className={`form-control ${errors.dDOB && touched.dDOB && 'is-invalid'}`}
                                          name="dDOB"
                                          type="date"
                                          placeholder="DOB"
                                      />
                                      <ErrorMessage name='dDOB' component='div' className='field-error text-danger'/>
                                      {ageErrorMessage && <div className="text-danger">{ageErrorMessage}</div>}
                                      <span className="focus-border"></span>
                                  </div>
                              </div>

                              <div className="col-lg-6 mt-3">
                                  <label>
                                      Gender
                                  </label>
                                  <div className="form-group d-flex">
                                      <div>

                                          <input
                                              onChange={handleGender}
                                              value={sGender}
                                              id="sMale"
                                              type="radio"
                                              name="sGender"
                                              checked={sGender === 1}
                                          />
                                          <label htmlFor="sMale">
                                              Male
                                          </label>
                                      </div>
                                      <div className={"ms-3"}>
                                          <input
                                              onChange={handleGender}
                                              value={sGender}
                                              id="sFemale"
                                              type="radio"
                                              name="sGender"
                                              checked={sGender === 2}
                                          />
                                          <label htmlFor="sFemale">
                                              Female
                                          </label>
                                      </div>

                                      <span className="focus-border"></span>
                                  </div>
                                  {/*<ErrorMessage name='sGender' component='div'*/}
                                  {/*              className='field-error text-danger' style={{ marginTop: '10px', marginLeft: '10px' }}/>*/}
                              </div>

                              <div className="col-lg-4 mb-5 mt-3">
                                  <label>
                                      Select Country
                                  </label>
                                  {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                                  <select value={countryId} style={{fontSize: '15px', color: '#6b7385'}}
                                          name={"nCountryId"}
                                          className={`form-control ${errors.nCountryId && touched.nCountryId && 'is-invalid'}`}
                                          onChange={handleChangeCountry}>
                                      {country.map((item, index) => {
                                          return (
                                              <>
                                                  <option key={index}
                                                          value={item.nCountryId}>{item.sCountryname}</option>
                                              </>
                                          )
                                      })}
                                  </select>
                                  <ErrorMessage name='nCountryId' component='div'
                                                className='field-error text-danger'/>
                              </div>
                              <div className="col-lg-4 mt-3">
                                  <label>
                                      Select State
                                  </label>
                                  {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                                  <select value={stateId} style={{fontSize: '15px', color: '#6b7385'}} name={"nStateId"}
                                          className={`form-control ${errors.nStateId && touched.nStateId && 'is-invalid'}`}
                                          onChange={handleChangeState}>
                                      {state.map((item, index) => {
                                          return (
                                              <>
                                                  <option key={item.nStateId}
                                                          value={item.nStateId}>{item.sStateName}</option>
                                              </>
                                          )
                                      })}
                                  </select>
                                  <ErrorMessage name='nStateId' component='div'
                                                className='field-error text-danger'/>
                                  {/*</div>*/}
                              </div>
                              <div className="col-lg-4 mt-3">
                                  <label>
                                      Select City
                                  </label>
                                  {/*<div className="rbt-modern-select bg-transparent height-45">*/}
                                  <select value={cityId} style={{fontSize: '15px', color: '#6b7385'}} name={"nCityId"}
                                          className={`form-control ${errors.nCityId && touched.nCityId && 'is-invalid'}`}
                                          onChange={handleChangeCity}>
                                      {city.map((item, index) => {
                                          return (
                                              <>
                                                  <option key={item.nCityId}
                                                          value={item.nCityId}>{item.sCityName}</option>
                                              </>
                                          )
                                      })}
                                  </select>
                                  <ErrorMessage name='nCityId' component='div'
                                                className='field-error text-danger'/>
                                  {/*</div>*/}
                              </div>

                              <div className="col-lg-12">
                                  <div className="form-submit-group">
                                      <button
                                          type="submit"
                                          className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                                      >
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
                          </div>
                      </Form>

                  </>
              )
            }}


          </Formik>


        </div>
      </div>
=======
          <form action="#" className="row row--15">

            <div className="col-lg-6">
              <label>
                First Name
              </label>
              <div className="form-group">
                <input name="con_name" type="text" placeholder="First Name"/>
                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-6">
              <label>
                Last Name
              </label>
              <div className="form-group">
                <input
                    name="con_lastname"
                    type="text"
                    placeholder="Last Name"
                />

                <span className="focus-border"></span>
              </div>
            </div>

            {/*<div className="col-lg-6">*/}
            {/*  <div className="form-group">*/}
            {/*    <input*/}
            {/*        name="con_username"*/}
            {/*        type="text"*/}
            {/*        placeholder="User name"*/}
            {/*    />*/}
            {/*    <span className="focus-border"></span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="col-lg-6 mt-3">
              <label>
                Phone number
              </label>
              <div className="form-group">
                <input
                    name="con_phone"
                    type="text"
                    placeholder="Phone Number"
                />
                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-6 mt-3">
              <label>
                Email
              </label>
              <div className="form-group">
                <input name="con_email" type="email" placeholder="Email"/>
                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-6 mt-3">
              <label>
                Date of Birth
              </label>
              <div className="form-group">
                <input
                    name="con_password"
                    type="date"
                    placeholder="DOB"
                />
                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-6 mt-3">
              <label>
                Gender
              </label>
              <div className="form-group d-flex">
                <div>
                  <input id="cat-radio-1" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-1">
                    Male
                  </label>
                </div>
                <div className={"ms-3"}>
                  <input id="cat-radio-2" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-2">
                    Female
                  </label>
                </div>

                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mt-3">
              <label>
                Select Country
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
            <div className="col-lg-4 mt-3">
              <label>
                Select State
              </label>
              {/*<div className="rbt-modern-select bg-transparent height-45">*/}
              <select className="w-100" onChange={handleChangeState}>
                {state.map((item, index) => {
                  return (
                      <>
                        <option key={item.nStateId} value={item.nStateId}>{item.sStateName}</option>
                      </>
                  )
                })}
              </select>
              {/*</div>*/}
            </div>
            <div className="col-lg-4 mt-3">
              <label>
                Select City
              </label>
              {/*<div className="rbt-modern-select bg-transparent height-45">*/}
              <select className="w-100">
                {city.map((item, index) => {
                  return (
                      <>
                        <option key={item.nCityId} value={item.nCityId}>{item.sCityName}</option>
                      </>
                  )
                })}
              </select>
              {/*</div>*/}
            </div>

            {/*<div className="col-lg-12">*/}
            {/*  <div className="form-group">*/}
            {/*    <textarea placeholder="Bio"></textarea>*/}
            {/*    <span className="focus-border"></span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="col-lg-12">
              <div className="form-submit-group">
                <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                >
                  <Link href={"/become-a-tutor/profile-photo"} className={'text-white'}>

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
          {/*<div className="row g-5">*/}
          {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
          {/*  <CounterWidget*/}
          {/*    counterStyle="two"*/}
          {/*    styleClass="bg-primary-opacity"*/}
          {/*    iconClass="bg-primary-opacity"*/}
          {/*    numberClass="color-primary"*/}
          {/*    icon="feather-book-open"*/}
          {/*    title="Enrolled Courses"*/}
          {/*    value={30}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
          {/*  <CounterWidget*/}
          {/*    counterStyle="two"*/}
          {/*    styleClass="bg-secondary-opacity"*/}
          {/*    iconClass="bg-secondary-opacity"*/}
          {/*    numberClass="color-secondary"*/}
          {/*    icon="feather-monitor"*/}
          {/*    title="ACTIVE COURSES"*/}
          {/*    value={10}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
            {/*  <CounterWidget*/}
            {/*    counterStyle="two"*/}
            {/*    styleClass="bg-violet-opacity"*/}
            {/*    iconClass="bg-violet-opacity"*/}
            {/*    numberClass="color-violet"*/}
            {/*    icon="feather-award"*/}
            {/*    title="Completed Courses"*/}
            {/*    value={7}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
            {/*  <CounterWidget*/}
            {/*    counterStyle="two"*/}
            {/*    styleClass="bg-pink-opacity"*/}
            {/*    iconClass="bg-pink-opacity"*/}
            {/*    numberClass="color-pink"*/}
            {/*    icon="feather-users"*/}
            {/*    title="Total Students"*/}
            {/*    value={160}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
            {/*  <CounterWidget*/}
            {/*    counterStyle="two"*/}
            {/*    styleClass="bg-coral-opacity"*/}
            {/*    iconClass="bg-coral-opacity"*/}
            {/*    numberClass="color-coral"*/}
            {/*    icon="feather-gift"*/}
            {/*    title="Total Courses"*/}
            {/*    value={20}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-lg-4 col-md-4 col-sm-6 col-12">*/}
            {/*  <CounterWidget*/}
            {/*    counterStyle="two"*/}
            {/*    styleClass="bg-warning-opacity"*/}
            {/*    iconClass="bg-warning-opacity"*/}
            {/*    numberClass="color-warning"*/}
            {/*    icon="feather-dollar-sign"*/}
            {/*    title="Total Earnings"*/}
            {/*    value={25000}*/}
            {/*  />*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
      </div>

      {/*<MyCourses />*/}
>>>>>>> main
    </>
  );
};

export default Basics;
