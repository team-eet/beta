import { Provider } from "react-redux";
import PageHead from "../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import {useEffect, useState} from "react";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import VerifyBreadCrumb from "@/components/Common/VerifyBreadCrumb";
import BecomeATeacher from "@/components/Become-a-Teacher/BecomeATeacher";
import TeacherGallery from "@/components/Become-a-Teacher/TeacherGallery";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BackToTop from "../backToTop";
import Axios from "axios";
import {ErrorDefaultAlert} from "@/components/services/SweetAlert";
import API_URL from "@/pages/constant";

const TeacherPage = () => {
  const REACT_APP = API_URL

  const [verifysts, setverifySts] = useState([])

  useEffect(() => {
    Axios.get(`${REACT_APP.API_URL}/api/TutorBasics/GetTutorDetails/${JSON.parse(localStorage.getItem('userData')).regid}`, {
      headers: {
        ApiKey: `${REACT_APP.API_KEY}`
      }
    })
        .then(res => {
          console.log(res.data)
            // setTimeout(() => {
                // Update verifysts state after 2 seconds
                setverifySts(res.data[0].bVerifyStatus)
            // if(res.data[0].bVerifyStatus === 2) {
            //     window.open("https://eet-frontend.azurewebsites.net/tutorbatch/dashboard", "_blank");
            // }
            // }, 2000);

        })
        .catch(err => {
          { ErrorDefaultAlert(err) }
        })
  }, [])

  return (
    <>
      <PageHead title="Become a Teacher - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
            {verifysts === 1 ? <>
                <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
            </> : <>

            </>}

          <MobileMenu />
          <Cart />
          {verifysts === 1 ? <>
              <VerifyBreadCrumb title="Cheers to your success as a tutor"  />
          </> : <>

          </>}

            {verifysts === null ? <>
                <BreadCrumb title="Start Your Tutoring Journey Today" text="Become a Tutor"/>
            </> : <>

            </>}


          {verifysts === 1 ? <>
          </> : <>
          </>}
            {verifysts === null ? <>
                <div className="rbt-become-area bg-color-white rbt-section-gap">
                    <BecomeATeacher />
                </div>
            </> : <>
            </>}

          <BackToTop />
          <Separator />
            {verifysts === 1 ? <>
                <FooterOne />
            </> : <>

            </>}

        </Context>
      </Provider>
    </>
  );
};

export default TeacherPage;