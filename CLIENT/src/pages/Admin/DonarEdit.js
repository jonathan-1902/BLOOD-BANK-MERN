import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/Analytics.css'

const DonarEdit = () => {

    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location.state.id);
    // console.log(location.state.password);

    const id = location.state.id;
    // const password = location.state.password;
    // const role = location.state.role;
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const getData = async () => {
        try {
            let res = await axios.post(`http://localhost:5000/donors/singledonor/${id}`);
            console.log(res.data);
            setName(res.data.name);
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
            await axios.post(`http://localhost:5000/donors/update/${id}`, { name, email, city, phone })
                .then((res) => {
                    alert("Data Updated Successfully");
                    navigate('/adminDonar');
                })

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='img' style={{ minHeight: '100vh' }}>
                <div className='d-flex w-100  justify-content-center align-items-center '>
                    <div className='w-75 border mt-5 bg-light p-5'>
                        <form>
                            <div>
                                <h1 className='text-center'>Update Your Details</h1>
                            </div>
                            <div className='mt-2'>
                                <label>Donar Name:</label>
                                <input type='text' name="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Donar Email:</label>
                                <input type='email' name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Donar City:</label>
                                <input type='text' name="city" className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Donar Phone:</label>
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

export default DonarEdit
