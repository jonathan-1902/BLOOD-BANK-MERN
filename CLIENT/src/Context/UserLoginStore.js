import React, { useState } from 'react'
import { userLoginContextObj } from './userLoginContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const UserLoginStore = ({ children }) => {

    let navigate = useNavigate();
    let [userLoginStatus, setUserLoginStatus] = useState(false);
    let [adminLoginStatus, setAdminLoginStatus] = useState(false);
    let [organizationLoginStatus, setOrganizationLoginStatus] = useState(false);

    let [currentUser, setCurrentUser] = useState({});
    let [error, setError] = useState('');

    const handleUserLogout = async () => {
        localStorage.clear();
        setUserLoginStatus(false);
        setAdminLoginStatus(false);
        setOrganizationLoginStatus(false);
        alert("Logout Successfully");
        navigate('/');
    }


    const handleUserLogin = async (userObj, formType) => {

        let email = userObj.email;
        let password = userObj.password;
        let role = userObj.role;
        try {

            if (formType === "login") {
                if (role === 'donor') {
                    let res = await axios.post(`http://localhost:5000/donors/get-donor`, userObj);
                    let userData = res.data.existingUser;
                    console.log(res);
                    console.log(userData);


                    // if (email.length === 0 && password.length === 0) {

                    //     // alert("No user Found.Please Enter valid Details");
                    //     setError('No user Found.Please Enter valid Details');
                    // }
                    // else if (password.length === 0) {
                    //     // alert("Incorrect Password..Please Enter correct Password");
                    //     setError('Incorrect Password..Please Try again');
                    // }
                    if (userData) {
                        setCurrentUser(userData);
                        setUserLoginStatus(true);
                        alert("Login Successful");
                        setError('');
                        navigate('/about');
                    }


                }
                else if (role === 'admin') {
                    let res = await axios.post('http://localhost:5000/admin/get-admin', userObj)
                    let userData = res.data.existingUser;
                    console.log(res);
                    console.log(userData);

                    // if (email.length === 0 && password.length === 0) {

                    //     // alert("Please Enter  Details ");
                    //     setError('No user Found.Please Enter valid Details');
                    // }
                    // else if (password !== 'Joel*apr19') {
                    //     // alert("Incorrect Password...Password should be greater than or equal to 8 characters and less than 12 characters");
                    //     setError('Incorrect Password...Please Try again')
                    // }
                    if (userData) {
                        setCurrentUser(userData);
                        setAdminLoginStatus(true);
                        alert("Login Successful");
                        setError('');
                        navigate('/admindonar');
                    }

                }
                else if (role === 'organization') {
                    let res = await axios.post("http://localhost:5000/organization/get-organization", userObj);
                    let userData = res.data.existingUser;
                    console.log(res);
                    console.log(userData);

                    // let userData = res2.data[0];
                    // // console.log(userData)
                    // if (email.length === 0 && password.length === 0) {

                    //     // alert("Please Enter  Details ");
                    //     setError('No user Found.Please Enter valid Details');
                    // }
                    // else if (password !== '1234') {
                    //     // alert("Incorrect Password...Password should be greater than or equal to 8 characters and less than 12 characters");
                    //     setError('Incorrect Password...Please Try again')
                    // }
                    if (userData) {
                        setCurrentUser(userData);
                        setOrganizationLoginStatus(true);
                        setError('');
                        alert('Login Successful')
                        navigate('/donar');
                    }


                }
            }
            else if (formType === 'register') {
                let organizationData = {};
                try {
                    if (role === "donor") {
                        let res = await axios.post("http://localhost:5000/donors/add-donor", userObj);
                        alert("Registered Succesfully");
                        // userObj = {};
                        console.log(res);

                    }
                    if (role === "admin") {
                        let res = await axios.post("http://localhost:5000/admin/add-admin", userObj);
                        alert("Registered Succesfully");

                        console.log(res);
                    }
                    if (role === 'organization') {

                        let res = await axios.post("http://localhost:5000/organization/add-organization", userObj);
                        alert("Registered Succesfully");
                        console.log(res);
                    }
                    if (role === 'hospital') {

                        let res = await axios.post("http://localhost:5000/hospital/add-hospital", userObj);
                        alert("Registered Succesfully");
                        console.log(res);
                    }
                }
                catch (error) {
                    console.log(error);
                }

            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <userLoginContextObj.Provider value={{ handleUserLogout, userLoginStatus, adminLoginStatus, organizationLoginStatus, currentUser, error, handleUserLogin }}>{children}</userLoginContextObj.Provider>
    )
}

export default UserLoginStore
