import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useUser = (id, role, status) => {
    const [user, setUser] = useState({});
    const [userLoading, setUserLoading] = useState(false);
    useEffect(() => {//get single user depnding on role and id
        axios.post('https://sis-khalifa.herokuapp.com/user', { id, role })
            .then(response => {
                response?.data ? setUser(response.data) : toast.error(`No ${role} found`);
                setUserLoading(false);
            })
            .catch(error => console.log(error));
    }, [id, role, status]);
    return [user, setUser, userLoading, setUserLoading];
};

export default useUser;