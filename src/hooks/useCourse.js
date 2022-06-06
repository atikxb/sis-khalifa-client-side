import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const useCourse = (id, status) => {
    const [course, setCourse] = useState({});
    const [courseLoading, setCourseLoading] = useState(false);
    const isMounted = useRef(false);//prevent use effect render when loading first time
    useEffect(() => {
        if (isMounted.current) {//load single user for specific role
            axios.post('https://sis-khalifa.herokuapp.com/course', { id })
                .then(response => {
                    response?.data ? setCourse(response.data) : toast.error(`No course found`);
                    setCourseLoading(false);
                })
                .catch(error => console.log(error));
        } else {
            isMounted.current = true;
        }
    }, [id, status]);
    return [course,setCourse, courseLoading, setCourseLoading];
};

export default useCourse;