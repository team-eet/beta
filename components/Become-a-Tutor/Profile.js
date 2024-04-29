import Image from "next/image";
import React, {useEffect, useState} from "react";
import img from "@/public/images/others/thumbnail-placeholder.svg";
import Link from "next/link";
import * as Yup from 'yup'
import {Formik, ErrorMessage, Form} from 'formik'
import Axios from 'axios'
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import {useRouter} from "next/router";
import {FormGroup} from "reactstrap";
import API_URL from "@/pages/constant";

const UserValidationSchema = Yup.object().shape({
  sProfilePhotoPath: Yup.string()
      .required('This field is required')
})
const Profile = () => {
    const REACT_APP = API_URL
    const [Profileimg, setProfileimg] = useState();
    const [sImagePath, setSImagePath] = useState('');

    // const [sProfilePhotoPath, setsProfilePhotoPath] = useState('')
    const router = useRouter();
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

    const onChangeImage = (event) => {
        const fileext = ['image/jpeg', 'image/jpg', 'image/png'];
        // console.log(event)
        if (event.target.files[0].size < 5000000) {
            if (fileext.includes(event.target.files[0].type)) {
                // console.log(event.target.files[0])
                getBase64(event.target.files[0])
                    .then((result) => {
                        // console.log(result)
                        // const initialVaue = result
                        // setsProfilePhotoPath(result)
                        setSImagePath(result);
                    })
                    .catch((err) => {
                        console.error('Error converting image to base64:', err);
                    });

                setProfileimg(URL.createObjectURL(event.target.files[0]));
            } else {
                alert('Please select only image file types (jpeg/jpg/png)');
            }
        } else {
            alert('Please upload a file less than 5MB');
        }
    };

    const [regId, setregId] = useState('')
    useEffect(() => {
        if (localStorage.getItem('userData')) {
            setregId(JSON.parse(localStorage.getItem('userData')).regid)
        }
    }, []);

    return (
        <>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
            <div className="content">
                <div className="section-title">
                    <h4 className="rbt-title-style-3">Profile Photo</h4>
                    <h3>Your profile photo is your first impression</h3>
                    <p>Having a friendly and professional photo enriches your profile</p>
                </div>

                <Formik
                    validationSchema={UserValidationSchema}
                    initialValues={{
                        nRegId: regId,
                        sProfilePhotoPath: sImagePath
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, {resetForm}) => {
                        await Axios.put(`${REACT_APP.API_URL}/api/TutorBasics/UpdateTutorProfile`, values, {
                            headers: {
                                ApiKey: `${REACT_APP.API_KEY}`
                            }
                        }).then(res => {
                            // console.log(values)
                            console.log(res.data)
                            const retData = JSON.parse(res.data)
                            resetForm({})
                            if(retData.success === '1') {
                                router.push('/become-a-tutor/cover-photo')
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
                                <div className={'row mt-5 p-0'}>
                                    <div className={'col-lg-6'}>
                                        <FormGroup>
                                            <input type="file" className={'p-0'} name='sProfilePhotoPath'
                                                   onChange={onChangeImage} accept="image/*"/>
                                            <small>JPG or PNG format, maximum 2 MB</small>
                                            {/*{file && <img src={file} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />}*/}

                                            {/*{(this.state.batchimagefile) ? <img className='w-100 h-200' src={this.state.batchimagefile} /> : <img*/}
                                            {/*    className='w-100 h-180 bg-light-primary p-1' src={noimg} alt='no-img' />}*/}
                                            {Profileimg ? <img src={Profileimg} height={200} width={200}/> : ''}
                                        </FormGroup>
                                        <ErrorMessage name='sProfilePhotoPath' component='div'
                                                      className='field-error text-danger'/>
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
                                                {/*<Link href={"/become-a-tutor/cover-photo"} className={'text-white'}>*/}

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

            {/*<Formik*/}
            {/*    // validationSchema={UserValidationSchema}*/}
            {/*    initialValues={{*/}
            {/*        nRegId : regId,*/}
            {/*        sProfilePhotoPath: sImagePath*/}
            {/*    }}*/}
            {/*    onSubmit={async (values, {resetForm}) => {*/}
            {/*            console.log(values)*/}
            {/*        if (sImagePath !== ''){*/}
            {/*            // alert(sImagePath)*/}
            {/*            await Axios.put(`${REACT_APP.API_URL}/api/TutorBasics/UpdateTutorProfile`,  values,{*/}
            {/*                    headers: {*/}
            {/*                        ApiKey: `${REACT_APP.API_KEY}`*/}
            {/*                    }*/}
            {/*                }).then(res => {*/}
            {/*                    console.log(res.data)*/}
            {/*                    const retData = JSON.parse(res.data)*/}
            {/*                    console.log(retData)*/}
            {/*                    resetForm({})*/}
            {/*                    // if(retData.success === '1') {*/}
            {/*                    //     router.push('/become-a-tutor/cover-photo')*/}
            {/*                    // }*/}
            {/*                })*/}
            {/*                    .catch(err => {*/}
            {/*                        {*/}
            {/*                            ErrorDefaultAlert(JSON.stringify(err.response))*/}
            {/*                        }*/}
            {/*                    })*/}
            {/*        } else{*/}
            {/*            // alert("no")*/}
            {/*            Yup.object().shape({*/}
            {/*                sProfilePhotoPath: Yup.string()*/}
            {/*                    .required('This field is required')*/}
            {/*            })*/}
            {/*        }*/}

            {/*        //*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Form >*/}
            {/*        <div className={'row mt-5 p-0'}>*/}
            {/*            <div className={'col-lg-6'}>*/}
            {/*                <FormGroup>*/}
            {/*                <input type="file" className={'p-0'} name='sProfilePhotoPath' onChange={onChangeImage}  accept="image/*" />*/}
            {/*                <small>JPG or PNG format, maximum 2 MB</small>*/}
            {/*                /!*{file && <img src={file} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />}*!/*/}

            {/*                /!*{(this.state.batchimagefile) ? <img className='w-100 h-200' src={this.state.batchimagefile} /> : <img*!/*/}
            {/*                /!*    className='w-100 h-180 bg-light-primary p-1' src={noimg} alt='no-img' />}*!/*/}
            {/*                {Profileimg ? <img src={Profileimg} height={200} width={200}/> : ''}*/}
            {/*                </FormGroup>*/}
            {/*                <ErrorMessage name='sProfilePhotoPath' component='div' className='field-error text-danger' />*/}
            {/*            </div>*/}
            {/*            <div className={'col-lg-6 profile-sample-photo'}>*/}
            {/*                <h6>Guidelines for capturing an exceptional photograph</h6>*/}
            {/*                <img src={'/images/client/img1.png'}></img>*/}
            {/*                <img src={'/images/client/img2.png'}></img>*/}
            {/*                <img src={'/images/client/img3.png'}></img>*/}
            {/*                <ul className="rbt-list-style-1 mt-5">*/}
            {/*                    <li>*/}
            {/*                        <i className="feather-check"></i>*/}
            {/*                        Look straight at camera and smile*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <i className="feather-check"></i>*/}
            {/*                        Maintain genuine and engaging facial expression*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <i className="feather-check"></i>*/}
            {/*                        Make sure your head and shoulders are covered*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <i className="feather-check"></i>*/}
            {/*                        Use natural lighting*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <i className="feather-check"></i>*/}
            {/*                        Simple, uncluttered and white background*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-12 mt-5">*/}
            {/*                <div className="form-submit-group">*/}
            {/*                    <button*/}
            {/*                        type="submit"*/}
            {/*                        className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"*/}
            {/*                    >*/}
            {/*                        /!*<Link href={"/become-a-tutor/cover-photo"} className={'text-white'}>*!/*/}

            {/*                        <span className="icon-reverse-wrapper">*/}
            {/*                      <span className="btn-text">Continue</span>*/}
            {/*                      <span className="btn-icon">*/}
            {/*                        <i className="feather-arrow-right"></i>*/}
            {/*                      </span>*/}
            {/*                      <span className="btn-icon">*/}
            {/*                        <i className="feather-arrow-right"></i>*/}
            {/*                      </span>*/}
            {/*                    </span>*/}
            {/*                        /!*</Link>*!/*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
        </div>
        </div>
</>
)
    ;
};

export default Profile;
