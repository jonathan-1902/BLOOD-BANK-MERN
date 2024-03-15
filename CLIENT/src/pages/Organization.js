import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import Header from '../components/Layout/Header'
// import Sidebar from '../components/Layout/Menus/Sidebar'
import Layout from '../components/Layout/Layout';
import moment from 'moment';
import '../styles/Admin.css';
import '../styles/Analytics.css'
import { userLoginContextObj } from '../Context/userLoginContext';
// import Analytics from './Analytics';

const Organization = () => {

    let { userLoginStatus } = useContext(userLoginContextObj);
    let { organizationLoginStatus } = useContext(userLoginContextObj);

    const [data, setData] = useState([]);

    const getOrgData = async () => {
        try {

            const res = await axios.post(`http://localhost:5000/organization/getallorganizations`);
            setData(res.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrgData();
    }, []);


    return (
        <>
            {
                (userLoginStatus === true || organizationLoginStatus === true) ? (
                    <Layout>
                        <div className='container table-responsive-md'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Organization Name</th>
                                        <th scope="col">Organization Email</th>
                                        <th scope="col">Organization Address</th>
                                        <th scope="col">Organization Phone</th>
                                        {/* <th scope="col">Date</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map((record) => (
                                            <tr key={record._id}>
                                                <td>{record.organization}</td>
                                                <td>{record.email}</td>
                                                <td>{record.city} </td>
                                                <td>{record.phone}</td>
                                                {/* <td>{record.Date}</td> */}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>

                            {/* </div> */}
                        </div>
                    </Layout>) : (<div><h1>404 Error Page Not Found </h1></div>)
            }
        </>
    )
}

export default Organization;
