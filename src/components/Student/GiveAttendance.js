import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCourses from '../../hooks/useCourses';
import Header from '../Header/Header';
const GiveAttendance = () => {
    const [courses] = useCourses();//get all courses from DB
    const handleAddCourse = e => {
        e.preventDefault();
        toast.success("Your present counted.");
    }
    return (
        
        <div className="app">
            <Header></Header>
            <div class="app-wrapper">
                <div class="app-content pt-3 p-md-3 p-lg-4 ">
                    <div class="container-xl">

                        <div class="shadow p-5 rounded">
                            <h1 class="app-page-title">Give Attendance</h1>

                            <form onSubmit={handleAddCourse} class="row g-3 px-5">
                                <div class="col-md-4">
                                    <label for="cdocument" class="form-label">Select Course</label>
                                    <select class="form-select" required>
                                        {
                                            courses.map(course =>
                                                <option value={course.title}>{course.title}</option>)
                                        }
                                    </select>
                                </div>
                                <div class="col-12">
                                    <button type="submit" name="submit" class="btn btn-success text-white">Present</button>
                                </div>
                            </form>
                            <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default GiveAttendance;