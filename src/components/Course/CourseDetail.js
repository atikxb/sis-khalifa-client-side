import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCourse from '../../hooks/useCourse';
import Search from '../Search/Search';
import Loading from '../Loading';

const CourseDetail = () => {
    const [id, setId] = useState('');
    const searchId = useRef('');
    const [status, setStatus] = useState(false);
    const [course, setCourse, courseLoading, setcourseLoading] = useCourse(id, status);
    const handleSearch = e => {
        e.preventDefault();
        setCourse({});//Clear previous search user
        setcourseLoading(true);//load till fetch data
        setId(`c-${searchId.current.value.toLowerCase()}`);
        setStatus(!status);
    }
    return (
        // <div className="dashboard">
        //     <div className="row">
        //         <div className="col-md-2"><SideNav></SideNav></div>
        //         <div className="col-md-10 ">
        //             <Header></Header>
        //             <div className="main">
        //                 <div className="std-box">
        //                     <div className="box-top">
        //                         <h5>Course Details</h5>
        //                         <Search handleSearch={handleSearch} searchId={searchId}></Search>
        //                         <div>
        //                             <button className="btn btn-primary">Edit</button>
        //                             <button className="btn btn-danger">Delete</button>
        //                             <button className="btn btn-info">Update</button>
        //                             <button className="btn btn-light">Back to list</button>
        //                         </div>

        //                     </div>
        //                     <hr />

        //                     {
        //                         course?._id && <div className="std-info text-capitalize">
        //                             <div className="row">
        //                                 <div className="col-md-6">
        //                                     <div className="shadow-sm p-3 m-2 rounded">
        //                                         <p>Course ID :</p>
        //                                         <h5>{course?.id}</h5>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <div className="shadow-sm p-3 m-2 rounded">
        //                                         <p>Course Title :</p>
        //                                         <h5>{course?.title}</h5>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <div className="shadow-sm p-3 m-2 rounded">
        //                                         <p>Course Teacher :</p>
        //                                         <h5>{course?.teacherId}</h5>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <div className="shadow-sm p-3 m-2 rounded">
        //                                         <p>Course Document :</p>
        //                                         <button className="btn btn-success">Download</button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <ToastContainer
        //         position="top-center"
        //         autoClose={2000}
        //         hideProgressBar={false}
        //         newestOnTop={false}
        //         closeOnClick
        //         rtl={false}
        //         pauseOnFocusLoss
        //         draggable
        //         pauseOnHover
        //     />
        // </div>

        <div className="app">
            <Header></Header>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between shadow-sm p-3 rounded">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Search for Course</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">

                                        <Search handleSearch={handleSearch} searchId={searchId}></Search>
                                        <div className="col-auto">
                                            <select className="form-select">
                                                <option defaultValue value="option-1">All</option>
                                                <option value="option-2">Course</option>
                                                <option value="option-3">University</option>

                                            </select>
                                        </div>
                                        <div className="col-auto">
                                            <a href=""><button className="btn btn-primary text-white">Edit</button></a>
                                        </div>
                                        <div className="col-auto">
                                            <a href=""><button className="btn btn-danger text-white">Delete</button></a>
                                        </div>
                                        <div className="col-auto">
                                            <a href=""><button className="btn btn-info text-white">Update</button></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            courseLoading ? <Loading /> : <div className="row gy-4 mt-5">
                                <div className="col-12 col-lg-6 offset-lg-3">
                                    {
                                        course?._id &&
                                        <div className="app-card app-card-account shadow d-flex flex-column align-items-start">
                                            <div className="app-card-header p-3 border-bottom-0">
                                                <div className="row align-items-center gx-3">
                                                    <div className="col-auto">
                                                        <div className="app-icon-holder">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person"
                                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <h4 className="app-card-title">Profile</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="app-card-body px-4 w-100">
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Course ID</strong></div>
                                                            <div className="item-data">{course?.id}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Course Title</strong></div>
                                                            <div className="item-data">{course?.title}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Course Teacher</strong></div>
                                                            <div className="item-data">{course?.teacherId}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
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




    );
};

export default CourseDetail;