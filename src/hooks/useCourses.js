import axios from "axios";
import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [courseError, setCourseError] = useState([]);
    useEffect(() => {//get all courses
        axios.post('https://sis-khalifa.herokuapp.com/courses')
            .then(response => setCourses(response.data))
            .catch(error => setCourseError(error));
    }, []);
    return [ courses, courseError ];
};

export default useCourses;