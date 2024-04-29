import CounterWidget from "../Instructor/Dashboard-Section/widgets/CounterWidget";
<<<<<<< HEAD
import CounterWidgetBatch from "@/components/Instructor/Dashboard-Section/widgets/CounterWidgetBatch";
import {useEffect} from "react";

const Dashboard = () => {

=======


const Dashboard = () => {
>>>>>>> main
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Dashboard</h4>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
<<<<<<< HEAD
                  counterStyle="two"
                  styleClass="bg-primary-opacity"
                  iconClass="bg-primary-opacity"
                  numberClass="color-primary"
                  icon="feather-book-open"
                  title="Enrolled Courses"
                  value={30}
=======
                counterStyle="two"
                styleClass="bg-primary-opacity"
                iconClass="bg-primary-opacity"
                numberClass="color-primary"
                icon="feather-book-open"
                title="Enrolled Courses"
                value={30}
>>>>>>> main
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
<<<<<<< HEAD
                  counterStyle="two"
                  styleClass="bg-coral-opacity"
                  iconClass="bg-coral-opacity"
                  numberClass="color-coral"
                  icon="feather-monitor"
                  title="ACTIVE COURSES"
                  value={10}
=======
                counterStyle="two"
                styleClass="bg-secondary-opacity"
                iconClass="bg-secondary-opacity"
                numberClass="color-secondary"
                icon="feather-monitor"
                title="ACTIVE COURSES"
                value={10}
>>>>>>> main
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
<<<<<<< HEAD
                  counterStyle="two"
                  styleClass="bg-violet-opacity"
                  iconClass="bg-violet-opacity"
                  numberClass="color-violet"
                  icon="feather-award"
                  title="Completed Courses"
                  value={7}
              />
            </div>
          </div>
          <div className="row g-5 mt-3">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidgetBatch
                  counterStyle="two"
                  styleClass="bg-pink-opacity"
                  iconClass="bg-pink-opacity"
                  numberClass="color-pink"
                  icon="feather-book-open"
                  title="Enrolled Batches"
                  value={30}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidgetBatch
                  counterStyle="two"
                  styleClass="bg-violet-opacity"
                  iconClass="bg-violet-opacity"
                  numberClass="color-violet"
                  icon="feather-monitor"
                  title="ACTIVE BATCHES"
                  value={10}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidgetBatch
                  counterStyle="two"
                  styleClass="bg-coral-opacity"
                  iconClass="bg-coral-opacity"
                  numberClass="color-coral"
                  icon="feather-award"
                  title="Completed Batches"
                  value={7}
=======
                counterStyle="two"
                styleClass="bg-violet-opacity"
                iconClass="bg-violet-opacity"
                numberClass="color-violet"
                icon="feather-award"
                title="Completed Courses"
                value={7}
>>>>>>> main
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
