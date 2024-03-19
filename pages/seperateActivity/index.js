import React, { useEffect, useState } from "react";

import CourseDetails from "../../data/course-details/courseData.json";

import PageHead from "../Head";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import SeperateActvity from "@/components/SeperateActivity/sepactivity";

const Lesson = () => {
    const [courses, setCourse] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

    const startIndex = (page - 1) * 6;

    const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

    const handleClick = (num) => {
        setPage(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        setCourse(getAllCourse);
        setTotalPages(Math.ceil(getAllCourse.length / 6));
    }, [setTotalPages, setCourse]);

    return (
        <>
            <PageHead title="Course Filter One Open - Online Courses & Education NEXTJS14 Template" />

            <Provider store={Store}>
                <Context>
                    {/*<HeaderStyleTen headerSticky="rbt-sticky" headerType={true}/>*/}

                   <SeperateActvity />
                    {/*<Separator/>*/}
                    {/*<FooterOne/>*/}
                </Context>
            </Provider>
        </>
    );
};

export default Lesson;
