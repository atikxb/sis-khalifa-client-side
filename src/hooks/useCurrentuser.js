import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentuser = email => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {//get currently logged in user from DB
        axios.post('https://sis-khalifa.herokuapp.com/user', {email})
            .then(response => {response?.data && setUser(response.data);setLoading(false);})
            .catch(error => console.log(error));
    }, [email]);
    return [user, loading];
};

export default useCurrentuser;