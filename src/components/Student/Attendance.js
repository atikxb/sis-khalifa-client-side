import React from 'react';
import useUsers from '../../hooks/useUsers';
import Header from '../Header/Header';
const Attendance = () => {
    const [students] = useUsers('student');//get all students from DB

    return (
        <div className="app">
            <Header></Header>
            <div className="app-wrapper">

                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">

                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Student Attendences</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                        <div className="col-auto">
                                            <form className="table-search-form row gx-1 align-items-center">
                                                <div className="col-auto">
                                                    <input type="text" id="search-orders" name="searchorders"
                                                        className="form-control search-orders" placeholder="Search" />
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn app-btn-secondary">Search</button>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-auto">
                                            <select className="form-select">
                                                <option defaultValue value="option-1">All</option>
                                                <option value="option-2">Course</option>
                                                <option value="option-3">University</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="orders-table-tab-content">
                            <div className="tab-pane fade show active" id="orders-all" role="tabpanel"
                                aria-labelledby="orders-all-tab">
                                <div className="app-card app-card-orders-table shadow-sm mb-5">
                                    <div className="app-card-body">
                                        <div className="table-responsive">
                                            <table className="table app-table-hover mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="cell">ID</th>
                                                        <th className="cell">University/School</th>
                                                        <th className="cell">Student Name</th>
                                                        <th className="cell">Student Email</th>
                                                        <th className="cell">Gender</th>
                                                        <th className="cell">Date of birth</th>
                                                        <th className="cell">Attendence</th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    {
                                                        students.map(student =>
                                                            <tr>
                                                                <th className="cell">{student.id}</th>
                                                                <th className="cell">{student.university}</th>
                                                                <th className="cell">{student.displayName}</th>
                                                                <th className="cell">{student.email}</th>
                                                                <th className="cell">{student.gender}</th>
                                                                <th className="cell">{student.dob}</th>
                                                                <td className="cell"><span className="badge bg-success">Present</span></td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
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

export default Attendance;