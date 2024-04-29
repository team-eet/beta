import Link from "next/link";
import React, {useEffect, useState} from "react";
import API_URL from '@/pages/constant'
import Axios from "axios";
import {CustomInput} from "reactstrap";
import Select, { components } from "react-select";

const Availability = () => {
  const REACT_APP = API_URL
  const [country, setCountry] = useState([]);
  const [countryId, setcountryId] = useState('101')

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

    }
  }

  useEffect(() => {
    bindCountry()
  }, []);
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Time Availability</h4>
          </div>
          <div className={'row'}>
            <div className={'col-lg-6'}>
              <label>
                Select Country
              </label>
              <select className="w-100" onChange={handleChangeCountry} value={countryId}>
                {country.map((item, index) => {
                  return (
                      <>
                        <option key={index} value={item.nCountryId}>{item.sCountryname}</option>
                      </>
                  )
                })}
              </select>
            </div>
            <div className={'col-lg-6'}>
              <label style={{ whiteSpace: 'nowrap' }}>
                How much time can you spend for teaching in a day?
              </label>
              <select className="w-100">
                <option value={'1'}>1 hour</option>
                <option value={'2'}>2 hours</option>
                <option value={'3'}>3 hours</option>
                <option value={'4'}>4 hours</option>
                <option value={'5'}>5 hours</option>
                <option value={'6'}>2 hours</option>
                <option value={'7'}>7 hours</option>
                <option value={'8'}>2 hours</option>
                <option value={'9'}>2 hours</option>
                <option value={'10'}>10 hours</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label>
                Most preferable time slot
              </label>
              <div className="form-group d-flex">
                <div>
                  <input id="cat-radio-1" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-1">
                    Morning
                  </label>
                </div>
                <div className={"ms-3"}>
                  <input id="cat-radio-2" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-2">
                    Afternoon
                  </label>
                </div>
                <div className={"ms-3"}>
                  <input id="cat-radio-3" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-2">
                    Evening
                  </label>
                </div>
                <div className={"ms-3"}>
                  <input id="cat-radio-4" type="radio" name="rbt-radio"/>
                  <label htmlFor="cat-radio-2">
                    Late Evening
                  </label>
                </div>

                <span className="focus-border"></span>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <label>
                Are you interested in weekend batches?
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
            <div className={'col-lg-12 mt-4'}>
              <label>
                Most preferable days of teaching
              </label>
              <div className='demo-inline-spacing position-sticky d-flex mt-3'>
                <div className='mb-0 mt-0'>
                  <input type='checkbox' name='sDays' id='sDays1' value='Monday'/>
                  <label htmlFor={'sDays1'}>Monday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays2' value='Tuesday'/>
                  <label htmlFor={'sDays2'}>Tuesday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays3' value='Wednesday'/>
                  <label htmlFor={'sDays3'}>Wednesday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays4' value='Thursday'/>
                  <label htmlFor={'sDays4'}>Thursday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays5' value='Friday'/>
                  <label htmlFor={'sDays5'}>Friday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays6' value='Saturday'/>
                  <label htmlFor={'sDays6'}>Saturday</label>
                </div>

                <div className='mb-0 mt-0 ms-3'>
                  <input type='checkbox' name='sDays' id='sDays7' value='Sunday'/>
                  <label htmlFor={'sDays7'}>Sunday</label>
                </div>

              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="form-submit-group">
                <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                >
                  {/*<Link href={""} className={'text-white'}>*/}

                  <span className="icon-reverse-wrapper">
                      <span className="btn-text">Submit</span>
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
        </div>
      </div>
    </>
  );
};

export default Availability;


