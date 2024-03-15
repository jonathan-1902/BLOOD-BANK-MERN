import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import Header from '../components/Layout/Header'
// import Sidebar from '../components/Layout/Menus/Sidebar'
import '../../styles/Admin.css'
import Layout from '../../components/Layout/Layout';
import { userLoginContextObj } from '../../Context/userLoginContext';

const Donar = () => {

    const [data, setData] = useState([]);
    let { organizationLoginStatus } = useContext(userLoginContextObj);

    //find donar records
    const getData = async () => {
        try {

            const res = await axios.post(`http://localhost:5000/donors/getalldonors`);
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
                (organizationLoginStatus === true) ? (
                    <Layout>
                        {/* <Header />
            <div className='row g-0'>
                <div className='col-md-3'>
                    <Sidebar />
                </div> */}
                        <div className='container table-responsive-md'>
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Donar Name</th>
                                        <th scope="col">Donar Email</th>
                                        <th scope="col">Donar Address</th>
                                        <th scope="col">Donar Phone</th>
                                        {/* <th scope="col">Date</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map((record) => (
                                            <tr key={record._id}>
                                                <td>{record.name}</td>
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
                    </Layout>) : (<div><h1>404 Error Page Not Found</h1></div>)
            }
        </>
    )
}

export default Donar;
