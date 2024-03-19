import React, { Fragment, useState, useEffect } from 'react'
import Axios from 'axios'
import parse from 'html-react-parser'
import * as Icon from 'react-feather'
import Tooltip from "@material-ui/core/Tooltip"
import { SuccessAlert, ErrorDefaultAlert } from "@/components/services/SweetAlert";
import {
    Card, Alert, CardBody, Row, Col, Progress, Button, CardHeader,
    TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap'
import Link from "next/link";
const SeperateActvity = () => {

    const [activity, setActivity] = useState([])
    const [isBatch, setIsBatch] = useState([])

    useEffect(() => {
        Axios.get(`https://eet-backendservice.azurewebsites.net/api/coursemain/GetCourseName/qOr2fmJ-rEL28x8SQMolTA==`, {
            headers: {
                ApiKey: 'AlwyMoZbdq2H-Lrm2bi05xkQg7CbTrFHJWe6ygesk0c='
            }
        })
            .then(res => {
                if (res.data) {
                    setIsBatch(res.data[0])
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
        Axios.get(`https://eet-backendservice.azurewebsites.net/api/activityQue/GetActivityQueListSeparateViewActivity/q0n35b7QFQwkemlkqZeYlA==/NcaRT9myjUShi4YozcspTQ==/qOr2fmJ-rEL28x8SQMolTA==`, {
            headers: {
                ApiKey: 'AlwyMoZbdq2H-Lrm2bi05xkQg7CbTrFHJWe6ygesk0c='
            }
        })
            .then(res => {
                if (res.data) {
                    console.log('GetActivityQueListSeparateViewActivity', res.data)
                    setActivity(res.data)
                }
            })
            .catch(err => {
                { ErrorDefaultAlert(err) }
            })
        // }
    }, []);

    return (
        <>
            <div className="lesson-top-bar">
                <div className="lesson-top-left">
                    <div className="rbt-lesson-toggle">
                        <Link href={'/'}>
                            <button className="lesson-toggle-active btn-round-white-opacity" title="Toggle Sidebar">
                                <i className="feather-arrow-left"></i>
                            </button>
                        </Link>
                    </div>
                    <h5>{isBatch.sCourseTitle}</h5>
                </div>
                <div className="lesson-top-right">
                <div className="rbt-btn-close">
                        <a href="course-details.html" title="Go Back to Course" className="rbt-round-btn"><i
                            className="feather-x"></i></a>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row mt-5'}>
                    {activity.map((item, index) => {
                        return (
                            <>
                                <div className={'col-6'}>
                                    <Card className="border-primary activity-card">
                                        <CardHeader
                                            className={`${(item.sep_ans_fill === '0') ? 'bg-secondary' : 'bg-success'} p-0`}>

                                            {/* <Progress value={30} className='progress-bar-success h-45 position-absolute w-100 h--60' /> */}

                                            <div className='row w-100' style={{display: "contents"}}>
                                                <div className='col-9'>
                                                    <h5 className="mb-0 p-1 text-white animate shake position-relative w-100 font-weight-bolder">{index + 1} : {item.sActivityName}
                                                    </h5>
                                                </div>
                                                {/*{(item.sTag) ? <div className='col-3'>*/}
                                                {/*    <span className="badge badge-light badge-pill float-right text-dark">{item.sTag}</span>*/}
                                                {/*</div> : ''}*/}
                                            </div>
                                        </CardHeader>
                                        <CardBody className='p-2 inner-activity-name'>
                                            <div className='font-weight-bolder'>{item.sQueTitle}</div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default SeperateActvity;
