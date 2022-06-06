import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/Header';
const Meeting = () => {
    const handleMeeting = () => {
        toast.success("Meeting schedule has been emailed.");
    }
    return (
        <div className="app">
            <Header></Header>
            <div class="app-wrapper">
            <div class="app-content pt-3 p-md-3 p-lg-4">
                <div class="container-xl">

                    <div class="row g-3 mb-4 align-items-center justify-content-between">
                        <div class="col-lg-4 offset-lg-4">
                            <button onClick={handleMeeting} class="btn-lg btn-primary text-white">Arrange Meeting</button>
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
                </div>
            </div>
        </div>
        </div>
    );
};

export default Meeting;