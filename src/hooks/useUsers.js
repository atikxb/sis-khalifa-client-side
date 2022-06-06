import axios from "axios";
import { useEffect, useState } from "react";
const useUsers = role => {
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {//get users with a specific role
        axios.post('https://sis-khalifa.herokuapp.com/roleBasedUsers', {role})
            .then(response => {
                setUsers(response.data);
                setUserLoading(false);
            })
            .catch(error => console.log(error));


    }, []);
    return [ users, userLoading ];
};

export default useUsers;