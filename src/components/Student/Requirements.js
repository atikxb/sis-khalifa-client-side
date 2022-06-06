import React from 'react';
import useCourses from '../../hooks/useCourses';
import Header from '../Header/Header';

const Requirements = () => {
    const [courses] = useCourses();//get all courses from DB
    return (
        
        <div className="app">
            <Header></Header>
            <div class="app-wrapper">
                <div class="app-content pt-3 p-md-3 p-lg-4">
                    <div class="container-xl">

                        <div class="row g-3 mb-4 align-items-center justify-content-between">
                            <div class="col-auto">
                                <h1 class="app-page-title mb-0">Courses Pending for graduation</h1>
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
                                                        courses.slice(4).map(course => <tr>
                                                            <td class="cell">{course.title}</td>
                                                        </tr>)
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

export default Requirements;