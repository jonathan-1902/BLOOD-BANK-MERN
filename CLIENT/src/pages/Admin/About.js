import React from 'react'
import Header from '../../components/Layout/Header'
import Sidebar from '../../components/Layout/Menus/Sidebar';
import { userLoginContextObj } from '../../Context/userLoginContext';
import '../../styles/Admin.css';
import { useContext } from 'react';
import Layout from '../../components/Layout/Layout';

const About = () => {
    let { currentUser } = useContext(userLoginContextObj);
    let { userLoginStatus } = useContext(userLoginContextObj);


    return (
        <>

            {
                (userLoginStatus === true) ? (
                    <Layout>
                        <div>
                            <div className='mt-10'><h1 className='text-center text-white'>Welcome {currentUser.name}</h1></div>
                            <div className='d-flex w-100  justify-content-center align-items-center '>
                                <div className='w-75 border mt-5 bg-light p-5'>
                                    <p className='justify-content-center'>Donate blood and be the reason of smile to many faces
                                        When a person voluntarily donates blood for another person who is in need of blood, arising due to a medical condition, is called blood donation. Blood donation is carried out at the hands of a trained medical professional and in a safe environment, as per the medical standards.
                                        Donating blood is a humanitarian gesture and more people are being well aware of the need for it by each passing year. It is good social work as it indicates that people are getting more sensible towards the sufferings of others. According to a report by the World Health
                                        Organization (WHO), around 117.4 million blood donations are collected globally.</p>
                                </div>
                            </div>
                        </div>

                    </Layout>) : (<div><h1>404 Error Not Found</h1></div>)

            }
        </>
    )
}

export default About
