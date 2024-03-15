import React, { useState, useEffect, useContext } from 'react'
// import Header from '../components/Layout/Header';
// import Sidebar from '../components/Layout/Menus/Sidebar';
import axios from 'axios';
import moment from 'moment';
import Layout from '../../components/Layout/Layout';
import { userLoginContextObj } from '../../Context/userLoginContext';

const Hospital = () => {

    const [data, setData] = useState([]);
    let { userLoginStatus } = useContext(userLoginContextObj);
    let { organizationLoginStatus } = useContext(userLoginContextObj);

    const getData = async () => {
        try {

            const res = await axios.post("http://localhost:5000/hospital/getallhospitals");
            setData(res.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            {
                (userLoginStatus === true || organizationLoginStatus === true) ? (

                    <Layout>
                        <div className='container table-responsive-md '>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Hospital Name</th>
                                        <th scope="col">Hospital Email</th>
                                        <th scope="col">Hospital Address</th>
                                        <th scope="col">Hospital Phone</th>
                                        {/* <th scope="col">Date</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.filter(ele => ele.name !== '').map((record) => (
                                            <tr key={record._id}>
                                                <td>{record.hospital}</td>
                                                <td>{record.email}</td>
                                                <td>{record.city} </td>
                                                <td>{record.phone}</td>
                                                {/* <td>{record.Date}</td> */}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>


                        </div>

                    </Layout>) : (<div><h1> 404 Error  Page Not Found</h1></div>)
            }
        </>
    )
}

export default Hospital
