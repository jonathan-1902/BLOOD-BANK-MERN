import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Layout/Header'
import Modal from '../../components/modal/Modal';
import { userLoginContextObj } from '../../Context/userLoginContext';
import '../../styles/Analytics.css';
import Cards from './Cards';


const Analytics = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    // const [data, setData] = useState([]);
    let { organizationLoginStatus } = useContext(userLoginContextObj);

    const getData = async () => {
        let res1 = await axios.post('http://localhost:5000/inventoryIn/getBloodIn');
        console.log(res1);
        let bloodInData = res1.data.inDetails;
        setData1(bloodInData);

        let res2 = await axios.post('http://localhost:5000/inventoryOut/getBloodOut');
        console.log(res2);
        let bloodOutData = res2.data.outDetails;
        setData2(bloodOutData);




    }
    // setData(userData);


    useEffect(() => {
        getData();
    }, []);

    let data = [...data1, ...data2];
    console.log(data);

    let ABpin = 0;
    let ABpout = 0;
    let ABnin = 0;
    let ABnout = 0;

    let Apin = 0;
    let Apout = 0;
    let Anin = 0;
    let Anout = 0;

    let Bpin = 0;
    let Bpout = 0;
    let Bnin = 0;
    let Bnout = 0;


    let Opin = 0;
    let Opout = 0;
    let Onin = 0;
    let Onout = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].bloodGroup === 'AB+') {
            if (data[i].inventoryType === 'in') {
                ABpin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                ABpout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'AB-') {
            if (data[i].inventoryType === 'in') {
                ABnin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                ABnout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'A+') {
            if (data[i].inventoryType === 'in') {
                Apin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Apout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'A-') {
            if (data[i].inventoryType === 'in') {
                Anin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Anout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'B+') {
            if (data[i].inventoryType === 'in') {
                Bpin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Bpout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'B-') {
            if (data[i].inventoryType === 'in') {
                Bnin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Bnout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'O+') {
            if (data[i].inventoryType === 'in') {
                Opin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Opout += parseInt(data[i].quantity);
            }
        }
        else if (data[i].bloodGroup === 'O-') {
            if (data[i].inventoryType === 'in') {
                Onin += parseInt(data[i].quantity);
            }
            if (data[i].inventoryType === 'out') {
                Onout += parseInt(data[i].quantity);
            }
        }
    }
    return (
        <>
            {
                (organizationLoginStatus === true) ? (
                    <div className='img'>
                        <Header />

                        <div className="container h-300  ">
                            <div className="row mt-3">
                                <Cards Title={'AB+ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/56/blood-group-2668697_1280.png'} TotalIn={ABpin} TotalOut={ABpout} TotalAvailable={ABpin - ABpout} />
                                <Cards Title={'AB-ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/55/blood-group-2668694_1280.png'} TotalIn={ABnin} TotalOut={ABnout} TotalAvailable={ABnin - ABnout} />
                                <Cards Title={'A+ve'} Image={'https://cdn.pixabay.com/photo/2017/08/21/21/23/blood-group-2667005_1280.png'} TotalIn={Apin} TotalOut={Apout} TotalAvailable={Apin - Apout} />
                                <Cards Title={'A-ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/55/blood-group-2668689_1280.png'} TotalIn={Anin} TotalOut={Anout} TotalAvailable={Anin - Anout} />
                                <Cards Title={'B+ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/56/blood-group-2668701_1280.png'} TotalIn={Bpin} TotalOut={Bpout} TotalAvailable={Bpin - Bpout} />
                                <Cards Title={'B-ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/16/49/blood-group-2669655_1280.png'} TotalIn={Bnin} TotalOut={Bnout} TotalAvailable={Bnin - Bnout} />
                                <Cards Title={'O+ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/54/blood-group-2668684_1280.png'} TotalIn={Opin} TotalOut={Opout} TotalAvailable={Opin - Opout} />
                                <Cards Title={'O-ve'} Image={'https://cdn.pixabay.com/photo/2017/08/22/11/54/blood-group-2668682_1280.png'} TotalIn={Onin} TotalOut={Onout} TotalAvailable={Onin - Onout} />
                            </div>
                        </div >
                    </div >) : (<div><h1>404 Error Page Not Found</h1></div>)
            }
        </>

    )
}

export default Analytics
