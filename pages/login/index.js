import BreadCrumb from "@/components/Common/BreadCrumb";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Login from "@/components/Login/Login";
import NewsletterThree from "@/components/Newsletters/Newsletter-Three";
import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import BackToTop from "@/pages/backToTop";
import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const LoginPage = () => {
  return (
    <>
      <PageHead title="Login & Register " />
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
<<<<<<< HEAD

          <div className="rbt-elements-area bg-color-white">
              <div className="row row--30 mt-5 mb-5 justify-content-center">
                <Login />
              </div>
          </div>
=======
          {/*<BreadCrumb title="Login & Register" text="Login & Register" />*/}

          <div className="rbt-elements-area bg-color-white">

              <div className="row row--30 mt-5 mb-5 justify-content-center">
                <Login />
              </div>

          </div>

          {/*<div className="rbt-newsletter-area bg-gradient-6 ptb--50">*/}
          {/*  <NewsletterThree />*/}
          {/*</div>*/}

>>>>>>> main
          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default LoginPage;
