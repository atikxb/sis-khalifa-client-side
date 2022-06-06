import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCourses from '../../hooks/useCourses';
import useUsers from '../../hooks/useUsers';
import Header from '../Header/Header';

const AddCourse = () => {
    const [teachers] = useUsers('teacher');//get all teachers from DB
    const [courses] = useCourses();
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [teacherId, setTeacherId] = useState('');
    // const [file, setFile] = useState('');
    //Inserting single student on users collection using post api with async await
    const handleAddCourse = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('https://sis-khalifa.herokuapp.com/insertCourse', {
                id,
                title,
                teacherId
            });
            response?.data?.insertedId && toast.success("Course added successfully !");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="app">
            <Header></Header>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4 ">
                    <div className="container-xl">

                        <div className="shadow p-5 rounded">
                            <h1 className="app-page-title">Add New Course</h1>
                            <form onSubmit={handleAddCourse} className="row g-3">
                                <div className="col-md-4">
                                    <label htmlhtmlFor="courseId" className="form-label">Course ID</label>
                                    <input onBlur={(e) => setId('c-' + e.target.value)} type="text" className="form-control" name="courseId" value={101 + courses.length} id="courseId" required readOnly />
                                </div>
                                <div className="col-md-4">
                                    <label htmlhtmlFor="title" className="form-label">Course Title</label>
                                    <input onBlur={(e) => setTitle(e.target.value)} type="text" className="form-control" name="title" id="title" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlhtmlFor="teacherId" className="form-label">Course Teacher</label>
                                    <select onBlur={(e) => setTeacherId(e.target.value)} className="form-select">
                                        <option defaultValue>Select</option>
                                        {
                                            teachers.map(teacher => <option key={teacher._id} value={teacher._id}>{teacher.displayName}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlhtmlFor="cdocument" className="form-label">Course Document</label>
                                    <input type="file" className="form-control" name="cdocument" id="cdocument" required />
                                </div>
                                <div className="col-12">
                                    <button type="submit" name="add" className="btn btn-primary text-white">Add Course</button>
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

export default AddCourse;