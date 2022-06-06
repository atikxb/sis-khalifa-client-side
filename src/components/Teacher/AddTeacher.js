import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUsers from '../../hooks/useUsers';
import Header from '../Header/Header';

const AddTeacher = () => {
    const [teachers] = useUsers('teacher');
    const [id, setId] = useState(0);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const role = 'teacher';
    //Inserting single teacher on users collection using post api
    const handleAddTeacher = e => {
        e.preventDefault();
        axios.post('https://sis-khalifa.herokuapp.com/insertUser', {
            id,
            displayName,
            email,
            gender,
            contact,
            address,
            role
        })
            .then(function (response) {
                response?.data?.insertedId && toast.success("Teacher added successfully !");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="app">
            <Header></Header>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4 ">
                    <div className="container-xl">

                        <div className="shadow p-5 rounded">
                            <h1 className="app-page-title">Add New Teacher</h1>
                            <p>Note: Teachers can login using their email and an auto generated password (123456)</p>
                            <form onSubmit={handleAddTeacher} className="row g-3">
                                <div className="col-md-4">
                                    <label htmlhtmlFor="teacherId" className="form-label">Teacher ID</label>
                                    <input onBlur={(e) => setId('tr-' + e.target.value)} type="text" className="form-control" name="teacherId" value={101 + teachers.length} id="teacherId" required readOnly/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlhtmlFor="name" className="form-label">Teacher Name</label>
                                    <input onBlur={(e) => setDisplayName(e.target.value)} type="text" className="form-control" name="name" id="name" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlhtmlFor="email" className="form-label">Teacher Email</label>
                                    <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" required />
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
                                    <label htmlhtmlFor="contact" className="form-label">Contact No.</label>
                                    <input onBlur={(e) => setContact(e.target.value)} type="text" className="form-control" name="contact" id="contact" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlhtmlFor="address" className="form-label">Address</label>
                                    <input onBlur={(e) => setAddress(e.target.value)} type="text" className="form-control" cols="30" rows="10" id="address" name="address" required />
                                </div>
                                <div className="col-12">
                                    <button type="submit" name="add" className="btn btn-primary text-white">Add Teacher</button>
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

export default AddTeacher;