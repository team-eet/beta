import React, { useState } from "react";
import Select, { components } from "react-select";
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {Card} from "reactstrap";
import Link from "next/link";

const MySwal = withReactContent(Swal)


const Description = () => {

  const [text, setText] = useState('');

  const handleTextChange = (e) => {

    if(countWords(e.target.value) >= 100 && countWords(e.target.value) <= 200){
      // alert('no')
      MySwal.fire({
        title: 'Info',
        text: 'Can not add less than 100 words and more than 200 words!',
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      }).then(() => {
        // window.location.reload()
      })
      // setText('');
    } else {
      setText(e.target.value);
    }


  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Description</h4>
          </div>

          <div>
            <p>
              Write minimum 100 words and maximum 200 words to describe yourself. This description will
              be presented on your course card or batch card of our website. It will play a role in and encourage
              students to connect with you.
            </p>
            <div className={'row'}>
              <div className={'col-lg-6'}>
                <label htmlFor="aboutCourse">Description</label>
                <textarea value={text}
                          onChange={handleTextChange} id="aboutCourse" rows="10"></textarea>
                <div className={'text-end'}>
                  <small>Word Count: {countWords()}</small>
                </div>
                {/*<small className="d-block mt_dec--5">*/}
                {/*  <i className="feather-info"></i> HTML or plain text allowed, no*/}
                {/*  emoji This field is used for search, so please be descriptive!*/}
                {/*</small>*/}
              </div>
              <div className={'col-lg-6'}>
                <h6>You can include : </h6>
                <ul className="rbt-list-style-1 mt-5">
                  <li>
                    <i className="feather-check"></i>
                    About yourself
                  </li>
                  <li>
                    <i className="feather-check"></i>
                    Qualification
                  </li>
                  <li>
                    <i className="feather-check"></i>
                    Professional certification
                  </li>
                  <li>
                    <i className="feather-check"></i>
                    Teaching experience
                  </li>
                  <li>
                    <i className="feather-check"></i>
                    English is your hobby
                  </li>
                </ul>
              </div>
              <hr></hr>
              <div className={'col-lg-12'}>
                <Card className={'bg-light p-2'}>
                  <small className="d-block mt_dec--5" style={{color: '#9E9E9E'}}>
                    Example 1 : <br></br>
                    Hi, I am Bhavesh Patel, an enthusiastic English language trainer. I successfully
                    completed my graduation with major in English from Delhi University, India . Besides, I
                    have earned a professional certificate as an IELTS trainer from British Council. I have been
                    in the field of English teaching for almost 15 years . Teaching English has been my
                    passion and hobby, it is not merely a career option for me. I always engrossed in
                    teaching so you will definitely enjoy learning with me.
                  </small>
                </Card>
              </div>
              <div className={'col-lg-12 mt-3'}>
                <Card className={'bg-light p-2'}>
                  <small className="d-block mt_dec--5" style={{color: '#9E9E9E'}}>
                    Example 2 : <br></br>
                    Greetings, I'm Bhavesh Patel , a passionate teacher of English. At Delhi University in India
                    , I successfully completed my graduation with a major in English . In addition, the British
                    Council has awarded me a professional accreditation as an IELTS trainer. I have nearly 15
                    years of experience teaching English. I have a passion for teaching English; it is not
                    just a job choice for me. You will undoubtedly like learning with me because I am always
                    fully engaged in my lessons.
                  </small>
                </Card>
              </div>
              <div className={'col-lg-12 mt-3'}>
                <Card className={'bg-light p-2'}>
                  <small className="d-block mt_dec--5" style={{color: '#9E9E9E'}}>
                    Example 3 : <br></br>
                    Hello, my name is Bhavesh Patel , and I'm a passionate English language instructor. I
                    graduated from Delhi University in India with a major in English. In addition, the British
                    Council has certified me as a professional IELTS trainer. I've been teaching English
                    for approximately 15 years. I don't only see teaching English as a career; it's my passion
                    and pastime. You will undoubtedly love learning with me because I am always fully engaged
                    in my lessons.
                  </small>
                </Card>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="form-submit-group">
                <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                >
                  <Link href={"/become-a-tutor/intro-video"} className={'text-white'}>

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

export default Description;

const ValueContainer = ({children, ...props}) => {
  const {getValue, hasValue} = props;
  const nbValues = getValue().length;
  if (!hasValue) {
    return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
    );
  }
  return (
      <components.ValueContainer {...props}>
        {`${nbValues} items selected`}
      </components.ValueContainer>
  );
};

const MultiValue = (props) => {
  return "3 Selected";
};
