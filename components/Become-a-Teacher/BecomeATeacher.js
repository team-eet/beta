import Link from "next/link";

import Teacher from "../../data/pages/become-A-Teacher.json";
import InstructorRegistration from "./InstructorRegis";
import dynamic from "next/dynamic";
const Odometer = dynamic(() => import("react-odometerjs"), {
    ssr: false,
    loading: () => <span>00</span>,
});
import React from "react";
import Image from "next/image";
import useFetch from "@/context/useFetch";
import CounterData from "@/data/elements/counter.json";
import AccordionData from "@/data/elements/accordion.json";

const BecomeATeacher = () => {
    const { values } = useFetch(CounterData, "counterTwo");

    return (
      <>
          {CounterData &&
              CounterData.counterTwo.map((data, index) => (
                  <div className="container" key={index}>
                      <div className="row g-5 align-items-center">
                          <div className="col-lg-6 order-2 order-lg-1">
                              <div className="row row--30">
                                  {data.body.map((item, innerIndex) => (
                                      <div
                                          className={`col-lg-6 col-md-6 col-sm-6 col-12 ${item.mt}`}
                                          key={innerIndex}
                                      >
                                          <div className="rbt-counterup rbt-hover-03">
                                              <div className="inner">
                                                  <div className="icon">
                                                      <Image
                                                          src={item.img}
                                                          width={100}
                                                          height={100}
                                                          alt="Icons Images"
                                                      />
                                                  </div>
                                                  <div className="content">
                                                      <h3 className="counter">
                              <span className="odometer">
                                <Odometer
                                    value={
                                        values[
                                        index * data.body.length + innerIndex
                                            ]
                                    }
                                />
                              </span>
                                                      </h3>
                                                      <span className="subtitle">{item.text}</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                          <div className="col-lg-6 order-1 order-lg-2">
                              <div className="inner pl--50 pl_sm--0 pl_md--0">
                                  <div className="section-title text-start">
                                      {/*<span className="subtitle bg-pink-opacity">{data.tag}</span>*/}
                                      <h2 className="title">
                                          {data.title} <br/> {data.subTitle}
                                      </h2>
                                      <p className="description has-medium-font-size mt--20 mb--0">
                                          {data.desc}
                                      </p>
                                  </div>

                                  {/*{AccordionData &&*/}
                                  {/*    AccordionData.accordion.map((data, index) => (*/}
                                  {/*        <div className="container" key={index}>*/}
                                  {/*            <div className="row g-5 align-items-center">*/}
                                  {/*                <div className="col-lg-12 mt_md--40 mt_sm--40">*/}
                                  {/*                    <div className="rbt-accordion-style rbt-accordion-01  accordion">*/}
                                  {/*                        <div className="accordion" id="accordionExamplea1">*/}
                                  {/*                            {data.accordionBody.map((item, innerIndex) => (*/}
                                  {/*                                <div className="accordion-item card" key={innerIndex}>*/}
                                  {/*                                    <h2*/}
                                  {/*                                        className="accordion-header card-header"*/}
                                  {/*                                        id={item.heading}*/}
                                  {/*                                    >*/}
                                  {/*                                        <button*/}
                                  {/*                                            className={`accordion-button ${*/}
                                  {/*                                                !item.collapsed ? "collapsed" : ""*/}
                                  {/*                                            }`}*/}
                                  {/*                                            type="button"*/}
                                  {/*                                            data-bs-toggle="collapse"*/}
                                  {/*                                            data-bs-target={`#${item.collapse}`}*/}
                                  {/*                                            aria-expanded={item.expanded}*/}
                                  {/*                                            aria-controls={item.collapse}*/}
                                  {/*                                        >*/}
                                  {/*                                            {item.accordionTitle}*/}
                                  {/*                                        </button>*/}
                                  {/*                                    </h2>*/}
                                  {/*                                    <div*/}
                                  {/*                                        id={item.collapse}*/}
                                  {/*                                        className={`accordion-collapse collapse ${*/}
                                  {/*                                            item.show ? "show" : ""*/}
                                  {/*                                        }`}*/}
                                  {/*                                        aria-labelledby={item.heading}*/}
                                  {/*                                        data-bs-parent="#accordionExamplea1"*/}
                                  {/*                                    >*/}
                                  {/*                                        <div className="accordion-body card-body">*/}
                                  {/*                                            {item.desc}*/}
                                  {/*                                        </div>*/}
                                  {/*                                    </div>*/}
                                  {/*                                </div>*/}
                                  {/*                            ))}*/}
                                  {/*                        </div>*/}
                                  {/*                    </div>*/}
                                  {/*                </div>*/}
                                  {/*            </div>*/}
                                  {/*        </div>*/}
                                  {/*    ))}*/}
                                  <div className="rbt-feature-wrapper mt--30">
                                      {data.children.map((item, innerIndex) => (
                                          <div
                                              className="rbt-feature feature-style-1 align-items-center"
                                              key={innerIndex}
                                          >
                                              <div
                                                  className={`icon ${
                                                      item.primary
                                                          ? "bg-primary-opacity"
                                                          : "" || item.secondary
                                                              ? "bg-secondary-opacity"
                                                              : "" || item.pink
                                                                  ? "bg-pink-opacity"
                                                                  : ""
                                                  }`}
                                              >
                                                  <i className={item.icon}></i>
                                              </div>
                                              <div className="feature-content">
                                                  <h6 className="feature-title">{item.title}</h6>
                                                  <p className="feature-description">{item.info}</p>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                                  <div className="read-more-btn mt--40">
                                      <a className="rbt-moderbt-btn" href="/become-a-tutor/basics">
                                          <span className="moderbt-btn-text">Apply Now</span>
                                          <i className="feather-arrow-right"></i>
                                      </a>
                                  </div>
                                  {/*<span className="subtitle bg-pink-opacity">Apply Now</span>*/}
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          {/*<div className="tutor-bg-photo bg_image border gradient-10 height-350"/>*/}
          {/*{Teacher &&*/}
          {/*    Teacher.becomeATeacher.map((data, index) => (*/}
          {/*        <div className="container" key={index}>*/}
          {/*            <div className="row">*/}
          {/*                <div className="col-lg-12">*/}

          {/*                    <div className="section-title text-center">*/}
          {/*                        <span className="subtitle bg-pink-opacity">{data.tag}</span>*/}
          {/*                        <h2 className="title">Start Your Tutoring Journey Today</h2>*/}
          {/*                        <p className="description has-medium-font-size mt--20 mb--40">*/}
          {/*                            {data.desc}*/}
          {/*                        </p>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div className="row row row--30">*/}
          {/*                <div className="col-lg-12 mt_md--40 mt_sm--40 order-2 order-lg-1">*/}
          {/*                    <div className="advance-tab-button">*/}
          {/*                        <ul*/}
          {/*                            className="nav nav-tabs tab-button-style-2"*/}
          {/*                            id="myTab-4"*/}
          {/*                            role="tablist"*/}
          {/*                        >*/}
          {/*                            {data.body.map((item, innerIndex) => (*/}
          {/*                                <li role="presentation" key={innerIndex}>*/}
          {/*                                    <Link*/}
          {/*                                        href="#"*/}
          {/*                                        className={`tab-button ${*/}
          {/*                                            item.isActive ? "active" : ""*/}
          {/*                                        }`}*/}
          {/*                                        id={item.tab}*/}
          {/*                                        data-bs-toggle="tab"*/}
          {/*                                        data-bs-target={`#${item.target}`}*/}
          {/*                                        role="tab"*/}
          {/*                                        aria-controls={item.target}*/}
          {/*                                        aria-selected={item.isActive}*/}
          {/*                                    >*/}
          {/*                                        <span className="title">{item.text}</span>*/}
          {/*                                    </Link>*/}
          {/*                                </li>*/}
          {/*                            ))}*/}
          {/*                        </ul>*/}
          {/*                    </div>*/}
          {/*                    <div className="tab-content advance-tab-content-style-2">*/}
          {/*                        {data.body.map((item, innerIndex) => (*/}
          {/*                            <div*/}
          {/*                                className={`tab-pane fade ${*/}
          {/*                                    item.isActive ? "active show" : ""*/}
          {/*                                }`}*/}
          {/*                                id={item.target}*/}
          {/*                                role="tabpanel"*/}
          {/*                                aria-labelledby={item.tab}*/}
          {/*                                key={innerIndex}*/}
          {/*                            >*/}
          {/*                                <div className="content">*/}
          {/*                                    <p>{item.desc}</p>*/}
          {/*                                </div>*/}
          {/*                            </div>*/}
          {/*                        ))}*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}

          {/*            <InstructorRegistration/>*/}
          {/*        </div>*/}
          {/*    ))}*/}
      </>
  );
};

export default BecomeATeacher;
