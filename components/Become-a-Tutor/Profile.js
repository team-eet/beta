import Image from "next/image";
import React, {useState} from "react";
import img from "@/public/images/others/thumbnail-placeholder.svg";
import img1 from '../../public/images/client/pexels-daniel-xavier-1239288.jpg'
import img2 from '../../public/images/client/pexels-justin-shaifer-1222271.jpg'
import img3 from '../../public/images/client/blank-profile-picture-973460_1280.png'
import Link from "next/link";

const Profile = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Profile Photo</h4>
            <h3>Your profile photo is your first impression</h3>
            <p>Having a friendly and professional photo enriches your profile</p>
          </div>


            <div className={'row mt-5 p-0'}>
                <div className={'col-lg-6'}>
                    <input type="file" className={'p-0'} onChange={handleChange}/>
                    <small>JPG or PNG format, maximum 2 MB</small>
                    {file ? <img src={file} height={200} width={200}/> : ''}

                </div>
                <div className={'col-lg-6 profile-sample-photo'}>
                    <h6>Guidelines for capturing an exceptional photograph</h6>
                    <img src={'/images/client/img1.png'}></img>
                    <img src={'/images/client/img2.png'}></img>
                    <img src={'/images/client/img3.png'}></img>
                    <ul className="rbt-list-style-1 mt-5">
                        <li>
                            <i className="feather-check"></i>
                            Look straight at camera and smile
                        </li>
                        <li>
                            <i className="feather-check"></i>
                            Maintain genuine and engaging facial expression
                        </li>
                        <li>
                            <i className="feather-check"></i>
                            Make sure your head and shoulders are covered
                        </li>
                        <li>
                            <i className="feather-check"></i>
                            Use natural lighting
                        </li>
                        <li>
                            <i className="feather-check"></i>
                            Simple, uncluttered and white background
                        </li>
                    </ul>
                </div>
                <div className="col-lg-12 mt-5">
                    <div className="form-submit-group">
                        <button
                            type="submit"
                            className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                        >
                            <Link href={"/become-a-tutor/cover-photo"} className={'text-white'}>

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

            {/*<div>*/}
            {/*  <div className="rbt-profile-row row row--15">*/}
            {/*    <div className="col-lg-4 col-md-4">*/}
            {/*      <div className="rbt-profile-content b2">Registration Date</div>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg-8 col-md-8">*/}
            {/*      <div className="rbt-profile-content b2">*/}
            {/*        February 25, 2025 6:01 am*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
            {/*    <div className="col-lg-4 col-md-4">*/}
            {/*      <div className="rbt-profile-content b2">First Name</div>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg-8 col-md-8">*/}
            {/*      <div className="rbt-profile-content b2">John</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Last Name</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">Doe</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Username</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">instructor</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Email</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">example@gmail.com</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Phone Number</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">+1-202-555-0174</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Skill/Occupation</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">*/}
          {/*        Application Developer*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="rbt-profile-row row row--15 mt--15">*/}
          {/*    <div className="col-lg-4 col-md-4">*/}
          {/*      <div className="rbt-profile-content b2">Biography</div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-8 col-md-8">*/}
          {/*      <div className="rbt-profile-content b2">*/}
          {/*        I&apos;m the Front-End Developer for #Rainbow IT in Bangladesh,*/}
          {/*        OR. I have serious passion for UI effects, animations and*/}
          {/*        creating intuitive, dynamic user experiences.*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};

export default Profile;
