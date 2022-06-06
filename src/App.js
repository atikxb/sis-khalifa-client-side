import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCourse from './components/Course/AddCourse';
import AddStudent from './components/Student/AddStudent';
import AddTeacher from './components/Teacher/AddTeacher';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import CourseDetail from './components/Course/CourseDetail';
import StudentDetail from './components/Student/StudentDetail';
import TeacherDetail from './components/Teacher/TeacherDetail';
import SubmitGrade from './components/Course/SubmitGrade';
import Attendance from './components/Student/Attendance';
import RequireAuth from './components/RequireAuth';
import RequireAdminAuth from './components/RequireAdminAuth';
import RequireTeacherAuth from './components/RequireTeacherAuth';
import UploadFile from './components/Teacher/UploadFile';
import RequireStudentAuth from './components/RequireStudentAuth';
import ViewGrade from './components/Student/ViewGrade';
import ViewFIle from './components/Student/ViewFIle';
import GiveAttendance from './components/Student/GiveAttendance';
import Assignment from './components/Student/Assignment';
import Meeting from './components/Meeting';
import Schedule from './components/Student/Schedule';
import Request from './components/Student/Request';
import Requirements from './components/Student/Requirements';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/meeting' element={<RequireAuth><Meeting /></RequireAuth>} />
        <Route path='/add-course' element={<RequireAuth><RequireAdminAuth><AddCourse /></RequireAdminAuth></RequireAuth>} />
        <Route path='/course-detail' element={<RequireAuth><RequireAdminAuth><CourseDetail /></RequireAdminAuth></RequireAuth>} />
        <Route path='/add-teacher' element={<RequireAuth><RequireAdminAuth><AddTeacher /></RequireAdminAuth></RequireAuth>} />
        <Route path='/teacher-detail' element={<RequireAuth><RequireAdminAuth><TeacherDetail /></RequireAdminAuth></RequireAuth>} />
        <Route path='/add-student' element={<RequireAuth><RequireAdminAuth><AddStudent /></RequireAdminAuth></RequireAuth>} />
        <Route path='/student-detail' element={<RequireAuth><RequireAdminAuth><StudentDetail /></RequireAdminAuth></RequireAuth>} />
        <Route path='/attendance' element={<RequireAuth><RequireTeacherAuth><Attendance /></RequireTeacherAuth></RequireAuth>} />
        <Route path='/submit-grade' element={<RequireAuth><RequireTeacherAuth><SubmitGrade /></RequireTeacherAuth></RequireAuth>} />
        <Route path='/upload-file' element={<RequireAuth><RequireTeacherAuth><UploadFile /></RequireTeacherAuth></RequireAuth>} />
        <Route path='/view-grade' element={<RequireAuth><RequireStudentAuth><ViewGrade /></RequireStudentAuth></RequireAuth>} />
        <Route path='/view-file' element={<RequireAuth><RequireStudentAuth><ViewFIle /></RequireStudentAuth></RequireAuth>} />
        <Route path='/give-attendance' element={<RequireAuth><RequireStudentAuth><GiveAttendance /></RequireStudentAuth></RequireAuth>} />
        <Route path='/assignment' element={<RequireAuth><RequireStudentAuth><Assignment /></RequireStudentAuth></RequireAuth>} />
        <Route path='/schedule' element={<RequireAuth><RequireStudentAuth><Schedule /></RequireStudentAuth></RequireAuth>} />
        <Route path='/request' element={<RequireAuth><RequireStudentAuth><Request /></RequireStudentAuth></RequireAuth>} />
        <Route path='/requirements' element={<RequireAuth><RequireStudentAuth><Requirements /></RequireStudentAuth></RequireAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
