import React from 'react';
import Header from '../Header/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCourses from '../../hooks/useCourses';

const Request = () => {
    const [courses] = useCourses();//get all courses from DB
    const handleAddCourse = e => {
        e.preventDefault();
        toast.success("Document requested");
    }
    return (
        <div className="app">
            <Header></Header>
            <div class="app-wrapper">
                <div class="app-content pt-3 p-md-3 p-lg-4">
                    <div class="container-xl">

                        <div class="row g-3 mb-4 align-items-center justify-content-between">
                            <div class="col-auto">
                                <h1 class="app-page-title mb-0">Request For Document</h1>
                            </div>
                        </div>
                        <div class="tab-content" id="orders-table-tab-content">
                            <div class="tab-pane fade show active" id="orders-all" role="tabpanel"
                                aria-labelledby="orders-all-tab">
                                <div class="app-card app-card-orders-table shadow-sm mb-5">
                                    <div class="app-card-body">
                                        <div class="table-responsive">
                                            <table class="table app-table-hover mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th class="cell">Course List</th>
                                                        <th class="cell"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        courses.slice(0, 4).map(course => <tr>
                                                            <td class="cell">{course.title}</td>
                                                            <td class="cell">
                                                                <button onClick={handleAddCourse} class="btn btn-info text-white">Request</button>
                                                            </td>
                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;