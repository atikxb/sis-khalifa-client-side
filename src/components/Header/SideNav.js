import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import auth from '../firebase.init';
import Loading from '../Loading';

const SideNav = () => {
    const [user] = useAuthState(auth);
    const [users, userLoading] = useUsers();
    const currentUser = users.find(currentUser => currentUser?.email === user?.email);
    return (
        <div className="side-menu">
            <img className="w-75 p-3" src="images/logo.png" alt="Logo" />

            <div className="menu">
                {
                    userLoading ? <Loading /> : <ul>
                        <li><Link to="/dashboard">Admin Dashboard</Link></li>
                        {
                            (currentUser?.role === 'admin') && <>
                                <li><Link to="/add-student">Add Student</Link></li>
                                <li><Link to="/add-teacher">Add Teacher</Link></li>
                                <li><Link to="/add-course">Add Course</Link></li>
                                <li><Link to="/student-detail">Student Details</Link></li>
                                <li><Link to="/teacher-detail">Teacher Details</Link></li>
                                <li><Link to="/course-detail">Course Details</Link></li>
                            </>
                        }
                        {
                            (currentUser?.role === 'teacher') && <>
                                <li><Link to="/attendance">See Attendance</Link></li>
                                <li><Link to="/upload-file">Upload File</Link></li>
                                <li><Link to="/submit-grade">Submit Grade</Link></li>
                            </>
                        }
                    </ul>
                }
            </div>
        </div>
    );
};

export default SideNav;