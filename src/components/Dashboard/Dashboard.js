import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useCourses from '../../hooks/useCourses';
import useUsers from '../../hooks/useUsers';
import auth from '../firebase.init';
import Header from '../Header/Header';
import Loading from '../Loading';
const Dashboard = () => {
    const [user] = useAuthState(auth);//get current user
    const [teachers] = useUsers('teacher');//get all teachers from DB
    const [students] = useUsers('student');//get all students from DB
    const [courses] = useCourses();//get all courses from DB
    const [users, userLoading] = useUsers();//get all user
    const currentUser = users.find(currentUser => currentUser?.email === user?.email);
    return (
        <div className="app">
            <Header></Header>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    {
                        userLoading ? <Loading /> : <div className="container-xl">
                            <div className="app-card alert alert-dismissible shadow mb-4 border-left-decoration" role="alert">
                                <div className="inner">
                                    <div className="app-card-body p-3 p-lg-4">
                                        <h3 className="mb-3">Welcome, {currentUser?.displayName}!</h3>
                                        <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                            {
                                currentUser?.role === 'admin' ? <div className="row g-4 mb-4">
                                    <div className="col-12 col-lg-4">
                                        <div className="app-card app-card-stat shadow h-100">
                                            <div className="app-card-body p-3 p-lg-4">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <h4 className="stats-type mb-1">Total Students</h4>
                                                <div className="stats-figure">{students.length}</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="app-card app-card-stat shadow h-100">
                                            <div className="app-card-body p-3 p-lg-4">
                                                <i className="fa fa-user icon" aria-hidden="true"></i>
                                                <h4 className="stats-type mb-1">Total Teachers</h4>
                                                <div className="stats-figure">{teachers.length}</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="app-card app-card-stat shadow h-100">
                                            <div className="app-card-body p-3 p-lg-4">
                                                <i className="fa fa-book icon" aria-hidden="true"></i>
                                                <h4 className="stats-type mb-1">Total Courses</h4>
                                                <div className="stats-figure">{courses.length}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div> : currentUser?.role === 'teacher' ? <div className="row gy-4 mt-5">
                                    <div className="col-12 col-lg-6 offset-lg-3">
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
                                                            <div className="item-label"><strong>Teacher ID</strong></div>
                                                            <div className="item-data">{currentUser?.id}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Teacher Name</strong></div>
                                                            <div className="item-data">{currentUser?.displayName}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Teacher Email</strong></div>
                                                            <div className="item-data">{currentUser?.email}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Gender</strong></div>
                                                            <div className="item-data">{currentUser?.gender}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Contact No.</strong></div>
                                                            <div className="item-data">{currentUser?.contact}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Address</strong></div>
                                                            <div className="item-data">{currentUser?.address}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : <div className="row gy-4 mt-5">
                                    <div className="col-12 col-lg-6 offset-lg-3">
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
                                                            <div className="item-label"><strong>Student ID</strong></div>
                                                            <div className="item-data">{currentUser?.id}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Student Name</strong></div>
                                                            <div className="item-data">{currentUser?.displayName}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Student Email</strong></div>
                                                            <div className="item-data">{currentUser?.email}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Gender</strong></div>
                                                            <div className="item-data">{currentUser?.gender}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>University/School</strong></div>
                                                            <div className="item-data">{currentUser?.university}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Department</strong></div>
                                                            <div className="item-data">{currentUser?.department}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Date of birth</strong></div>
                                                            <div className="item-data">{currentUser?.dob}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Contact No.</strong></div>
                                                            <div className="item-data">{currentUser?.contact}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item border-bottom py-3">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="item-label"><strong>Address</strong></div>
                                                            <div className="item-data">{currentUser?.address}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;