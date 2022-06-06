import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUsers from '../../hooks/useUsers';

const AddStudent = () => {
    const [students] = useUsers('student');
    const [id, setId] = useState(0);
    const [displayName, setDisplayName] = useState('');
    const [university, setUniversity] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [department, setDepartment] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const role = 'student';
    //Inserting single student on users collection using post api with async await
    const handleAddStudent = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('https://sis-khalifa.herokuapp.com/insertUser', {
                id,
                displayName,
                university,
                email,
                gender,
                dob,
                department,
                contact,
                address,
                role
            });
            response?.data?.insertedId && toast.success("Student added successfully !");
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
                        <h1 className="app-page-title">Add New Student</h1>
                        <p>Note: Students can login using their email and an auto generated password (123456)</p>
                        <form onSubmit={handleAddStudent} className="row g-3">
                            <div className="col-md-4">
                                <label htmlhtmlFor="studentId" className="form-label">Student ID</label>
                                <input onBlur={(e) => setId('st-' + e.target.value)} type="text" className="form-control" name="studentId" value={101 + students.length} id="studentId" required readOnly />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="name" className="form-label">Student Name</label>
                                <input onBlur={(e) => setDisplayName(e.target.value)} type="text" className="form-control" name="name" id="name" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="email" className="form-label">Student Email</label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="unisch" className="form-label">University/School</label>
                                <input onBlur={(e) => setUniversity(e.target.value)} type="text" className="form-control" name="unisch" id="unisch" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="gender" className="form-label">Gender</label>
                                <select onBlur={(e) => setGender(e.target.value)} className="form-select">
                                    <option defaultValue>Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="dob" className="form-label">Date of birth</label>
                                <input onBlur={(e) => setDob(e.target.value)} type="date" className="form-control" name="dob" id="dob" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="department" className="form-label">Department</label>
                                <input onBlur={(e) => setDepartment(e.target.value)} type="text" className="form-control" name="department" id="department" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="contact" className="form-label">Contact No.</label>
                                <input onBlur={(e) => setContact(e.target.value)} type="text" className="form-control" name="contact" id="contact" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlhtmlFor="address" className="form-label">Address</label>
                                <input onBlur={(e) => setAddress(e.target.value)} type="text" className="form-control" cols="30" rows="10" id="address" name="address" required />
                            </div>
                            <div className="col-12">
                                <button type="submit" name="add" className="btn btn-primary text-white">Add Student</button>
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

export default AddStudent;