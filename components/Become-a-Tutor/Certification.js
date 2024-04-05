import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidgets from "./Dashboard-Section/widgets/CourseWidget";
import Link from "next/link";
import React, {useState} from "react";
import API_URL from "@/pages/constant";

const Certification = () => {
  const [country, setCountry] = useState([]);
  const [countryId, setcountryId] = useState('')
  const [hideFields, sethideFields] = useState(true)
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

  return (
      <>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
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

        {/*<div className="rbt-dashboard-content bg-color-white rbt-shadow-box">*/}
        {/*  <div className="content">*/}
        {/*    <div className="section-title">*/}
        {/*      <h4 className="rbt-title-style-3">Certification</h4>*/}
        {/*    </div>*/}
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
        {/*  </div>*/}
        {/*</div>*/}
      </>
  );
};

export default Certification;
