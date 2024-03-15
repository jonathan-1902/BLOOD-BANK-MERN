import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Analytics.css';

const HospEdit = () => {
    const [hospital, setHospital] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location.state.id);
    // console.log(location.state.password);

    const id = location.state.id;
    // const password = location.state.password;
    // const role = location.state.role;

    const getData = async () => {
        try {
            let res = await axios.post(`http://localhost:5000/hospital/singleHospital/${id}`);
            console.log(res.data);
            setHospital(res.data.hospital);
            setEmail(res.data.email);
            setCity(res.data.city);
            setPhone(res.data.phone);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // let updatedData = {};
    // updatedData.id = id;
    // updatedData.role = role;
    // updatedData.name = name;
    // updatedData.email = email;
    // updatedData.password = password
    // updatedData.address = address;
    // updatedData.phone = phone;

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/hospital/update/${id}`, { hospital, email, city, phone })
                .then((res) => {
                    alert("Data Updated Successfully");
                    navigate('/adminhospital');
                })

        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='img' style={{ minHeight: '100vh' }}>
                <div className='d-flex w-100  justify-content-center align-items-center'>
                    <div className='w-75 border mt-5 bg-light p-5'>
                        <form>
                            <div>
                                <h1 className='text-center'>Update Your Details</h1>
                            </div>
                            <div className='mt-2'>
                                <label>Hospital Name:</label>
                                <input type='text' name="name" className='form-control' value={hospital} onChange={(e) => setHospital(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Hospital Email:</label>
                                <input type='email' name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Hospital City:</label>
                                <input type='text' name="city" className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Hospital Phone:</label>
                                <input type='number' name="phone" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type='submit' className='btn btn-success mt-2' onClick={handleUpdate}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospEdit
