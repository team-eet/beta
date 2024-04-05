import React, {useEffect, useState} from "react";
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";
import API_URL from '@/pages/constant'
import Axios from "axios";
import Link from "next/link";

const Basics = () => {
  const REACT_APP = API_URL

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [countryId, setcountryId] = useState('')
  const [stateId, setstateId] = useState('')
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
            console.log(res.data)
            if (res.data.length !== 0) {
              setCity(res.data)
            }
          })
          .catch(err => {
            { ErrorDefaultAlert(err) }
          })
    }
  }
  useEffect(() => {
    bindCountry()
  }, []);
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Basics</h4>
          </div>
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
    </>
  );
};

export default Basics;
