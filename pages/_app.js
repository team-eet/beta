import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
// import "../public/css/vendor/slick.css"
// import "../public/css/vendor/slick-theme.css"
// import "../public/css/plugins/sal.css"
// import "../public/css/plugins/magnify.css"
// import "../public/css/plugins/bootstrap-select.min.css"
// import "../public/css/plugins/jquery-ui.css"
// import "../public/css/plugins/plyr.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";
import "../public/css/style.css";
import "../public/css/custom.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // require("../public/js/vendor/jquery");
    // require("../public/js/main");
    // require("../public/js/vendor/modernizr.min");
    // require("../public/js/vendor/modernizr.min");
    // require("../public/js/vendor/bootstrap.min");
    // require("../public/js/vendor/sal");
    // require("../public/js/vendor/swiper");
    // require("../public/js/vendor/magnify.min");
    // require("../public/js/vendor/jquery-appear");
    // require("../public/js/vendor/odometer");
    // require("../public/js/vendor/backtotop");
    // require("../public/js/vendor/isotop");
    // require("../public/js/vendor/imageloaded");
    // require("../public/js/vendor/wow");
    // require("../public/js/vendor/waypoint.min");
    // require("../public/js/vendor/easypie");
    // require("../public/js/vendor/text-type");
    // require("../public/js/vendor/jquery-one-page-nav");
    // require("../public/js/vendor/bootstrap-select.min");
    // require("../public/js/vendor/jquery-ui");
    // require("../public/js/vendor/magnify-popup.min");
    // require("../public/js/vendor/paralax-scroll");
    // require("../public/js/vendor/paralax.min");
    // require("../public/js/vendor/countdown");
    // require("../public/js/vendor/plyr");

  }, []);
  return <Component {...pageProps} />;
}
