import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header'
import Sidebar from '../../components/Layout/Menus/Sidebar'
import { userLoginContextObj } from '../../Context/userLoginContext';
import '../../styles/Admin.css';
import { useLocation } from 'react-router-dom';
import Edit from './DonarEdit';

const AdminDonar = () => {

    let [data, setData] = useState([]);
    let { adminLoginStatus } = useContext(userLoginContextObj);
    const location = useLocation();

    const navigate = useNavigate();

    const getData = async () => {
        try {

            const res = await axios.post("http://localhost:5000/donors/getalldonors");
            console.log(res);
            setData(res.data);

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

            await axios.post(`http://localhost:5000/donors/delete/${id}`)
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

    const updateDonarRecords = (id) => {

        navigate('/donaredit', { state: { id } });
        // alert("Updated Successfully");
    }

    return (
        <>
            {
                (adminLoginStatus === true) ? (
                    <div>
                        <Header />
                        <div className='row g-0'>
                            <div className='col-md-3'>
                                <Sidebar />
                            </div>
                            <div className='col-md-9 container table-responsive-md bg '>
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Donar Name</th>
                                            <th scope="col">Donar Email</th>
                                            <th scope="col">Donar Address</th>
                                            <th scope="col">Donar Phone</th>
                                            {/* <th scope="col">Date</th> */}
                                            <th colspan="2" scope="col">Action</th>
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
                                                    <td>
                                                        <button type="submit" className='btn btn-success ms-2 mt-1' onClick={() => updateDonarRecords(record._id)}>Edit</button>
                                                        <button type='submit' className='btn btn-danger ms-2 mt-1' onClick={() => deleteRecords(record._id)}>Delete</button>
                                                    </td>


                                                </tr>
                                            ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>) : (<div><h1>404 Error Page Not Found</h1></div>)
            }
        </>
    )
}

export default AdminDonar;
