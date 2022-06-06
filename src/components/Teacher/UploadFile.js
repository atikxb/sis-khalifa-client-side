import React from 'react';
import useCourses from '../../hooks/useCourses';
import Header from '../Header/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UploadFile = () => {
    const [courses] = useCourses();//get all courses from DB
    const handleAddCourse = e => {
        e.preventDefault();
        toast.success("Course file uploaded successfully!");
    }
    return (
        <div className="app">
            <Header></Header>
            <div class="app-wrapper">
                <div class="app-content pt-3 p-md-3 p-lg-4 ">
                    <div class="container-xl">

                        <div class="shadow p-5 rounded">
                            <h1 class="app-page-title">Upload Course File</h1>

                            <form onSubmit={handleAddCourse} class="row g-3 px-5">
                                <div class="col-md-4">
                                    <label for="cdocument" class="form-label">Select Course</label>
                                    <select class="form-select">
                                        <option selected>-select-</option>
                                        {
                                            courses.map(course =>
                                                <option value={course.title}>{course.title}</option>)
                                        }
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="cdocument" class="form-label">Assignment File</label>
                                    <input type="file" class="form-control" name="cdocument" id="cdocument" required />
                                </div>

                                <div class="col-12">
                                    <button type="submit" name="submit" class="btn btn-primary text-white">Submit</button>
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

export default UploadFile;