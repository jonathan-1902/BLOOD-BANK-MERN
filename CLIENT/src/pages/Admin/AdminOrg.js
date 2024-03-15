import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import Header from '../components/Layout/Header'
// import Sidebar from '../components/Layout/Menus/Sidebar'
import moment from 'moment';
import '../../styles/Admin.css';
import Layout from '../../components/Layout/Layout';
import { userLoginContextObj } from '../../Context/userLoginContext';
import { useNavigate } from 'react-router-dom';
// import Analytics from './Analytics';

const AdminOrg = () => {

    const [data, setData] = useState([]);
    const { adminLoginStatus } = useContext(userLoginContextObj);
    const navigate = useNavigate();

    const getData = async () => {
        try {

            let res = await axios.post("http://localhost:5000/organization/getallorganizations");
            let userData = res.data;
            setData(userData);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    const deleteRecords = async (id) => {
        console.log(id);
        try {
            await axios.post(`http://localhost:5000/organization/delete/${id}`)
                .then((res) => {
                    console.log(res);
                    console.log("Deleted item:", id);
                    alert('Record Deleted Successfully');
                    setData(data.filter((post) => post._id !== id));
                })
                .catch((error) => console.log(error));

        }
        catch (error) {
            console.log(error);
        }
    }

    const updateOganizationRecords = (id) => {

        navigate('/orgedit', { state: { id } });
        // alert("Updated Successfully");
    }


    return (
        <>

            {
                (adminLoginStatus === true) ? (
                    <Layout>
                        <div className='container table-responsive-md'>
                            <table className="table " >
                                <thead>
                                    <tr>
                                        <th scope="col">Organization Name</th>
                                        <th scope="col">Organization Email</th>
                                        <th scope="col">Organization Address</th>
                                        <th scope="col">Organization Phone</th>
                                        {/* <th scope="col"> Date</th> */}
                                        <th scope="col">Action</th>

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
                                                <td>
                                                    <button type="submit" className='btn btn-success ms-2 mt-1' onClick={() => updateOganizationRecords(record._id)} >Edit</button>

                                                    <button type="submit" className='btn btn-danger mt-1 ms-2' onClick={() => deleteRecords(record._id)} >Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>

                        </div>

                    </Layout>) : (<div><h1> 404 Error Page Not Found</h1></div>)
            }
        </>
    )
}

export default AdminOrg;
