import axios from 'axios';
import React, { useState, useEffect } from 'react'
import InputType from '../Form/InputType';


const Modal = (props) => {
    let { getBloodRecords } = props;
    const [inventoryType, setInventoryType] = useState("in");
    const [bloodGroup, setBloodGroup] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [email, setEmail] = useState("");
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    // const [data, setData] = useState([]);
    let [date, setDate] = useState('');
    let [custdate, setCustDate] = useState('');

    const getData = async () => {
        try {
            let res1 = await axios.post('http://localhost:5000/inventoryIn/getBloodIn');
            console.log(res1);
            let bloodInData = res1.data.inDetails;
            setData1(bloodInData);

            let res2 = await axios.post('http://localhost:5000/inventoryOut/getBloodOut');
            console.log(res2);
            let bloodOutData = res2.data.outDetails;
            setData2(bloodOutData);
        }
        catch (error) {
            console.log(error);
        }




    }

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

    let TABp = ABpin - ABpout;
    let TABn = ABnin - ABnout;
    let TAp = Apin - Apout;
    let TAn = Anin - Anout;
    let TBp = Bpin - Bpout;
    let TBn = Bnin - Bnout;
    let TOp = Opin - Opout;
    let TOn = Onin - Onout;




    const handleModalSubmit = async () => {
        try {

            if (!bloodGroup || !quantity) {
                return alert('Please Provide All Fields');
            }

            else if (inventoryType === 'out' && bloodGroup === 'AB+' && TABp < quantity) {

                alert(`only ${TABp}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'AB-' && TABn < quantity) {

                alert(`only ${TABn}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'A+' && TAp < quantity) {

                alert(`only ${TAp}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'A-' && TAn < quantity) {

                alert(`only ${TAn}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'B+' && TBp < quantity) {

                alert(`only ${TBp}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'B-' && TBn < quantity) {

                alert(`only ${TBn}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'O+' && TOp < quantity) {

                alert(`only ${TOp}  litres of  ${bloodGroup} blood  is present`);

            }
            else if (inventoryType === 'out' && bloodGroup === 'O-' && TOn < quantity) {

                alert(`only ${TOn}  litres of  ${bloodGroup} blood  is present`);

            }

            else {
                if (inventoryType === 'in') {
                    const res = await axios.post('http://localhost:5000/inventoryIn/bloodIn', {
                        bloodGroup,
                        inventoryType,
                        quantity,
                        email,
                        date

                    })
                    console.log(res);
                }
                else {
                    const res = await axios.post('http://localhost:5000/inventoryOut/bloodOut', {
                        bloodGroup,
                        inventoryType,
                        quantity,
                        email,
                        date
                    })
                    console.log(res);
                }
                // console.log(date);
                // console.log(date.getDate());
                // console.log(date.getMonth() + 1);
                // console.log(date.getFullYear());
                alert("New Record Created");
            }


            // const res = axios.get(`http://localhost:5000/Details`)
            // console.log(res);
            getBloodRecords();

        }



        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Manage Blood Record</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className='d-flex mb-3'>
                                Blood Type : &nbsp;
                                <div className='form-check ms-3'>
                                    <input
                                        type='radio'
                                        name='inRadio'
                                        defaultChecked
                                        value={'in'}
                                        onChange={(e) => setInventoryType(e.target.value)}
                                        className='form-check-input'
                                    />
                                    <label htmlFor='in' className='form-check-label'>
                                        IN
                                    </label>
                                </div>
                                <div className='form-check ms-3'>
                                    <input
                                        type='radio'
                                        name='inRadio'
                                        value={'out'}
                                        onChange={(e) => setInventoryType(e.target.value)}
                                        className='form-check-input'
                                    />
                                    <label htmlFor='out' className='form-check-label'>
                                        OUT
                                    </label>
                                </div>
                            </div>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setBloodGroup(e.target.value)}
                            >
                                <option defaultValue={'Open this select menu'}>Open this select menu</option>
                                <option value={'O+'}>O+</option>
                                <option value={'O-'}>O-</option>
                                <option value={'AB+'}>AB+</option>
                                <option value={'AB-'}>AB-</option>
                                <option value={'A+'}>A+</option>
                                <option value={'A-'}>A-</option>
                                <option value={'B+'}>B+</option>
                                <option value={'B-'}>B-</option>
                            </select>
                            <InputType
                                labelText={'Email'}
                                labelFor={'Email'}
                                inputType={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputType
                                labelText={'Quantity (ML)'}
                                labelFor={'Quantity'}
                                inputType={'number'}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <InputType
                                labelText={'Date'}
                                labelFor={'Date'}
                                inputType={'Date'}
                                value={date}
                                onChange={(e) => setDate(e.target.value)} />

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type='button' className='btn btn-primary' >Submit</button> */}

                            <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Modal;
