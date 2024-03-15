import React from 'react'
import { useNavigate } from 'react-router-dom'

const InventoryCards = (props) => {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/inventin');
    }
    return (
        <>

            <div className="col-md-4 ms-5">
                <div class="card" style={{ cursor: "pointer" }}>
                    <div class='image-section1 border'>
                        <img src={props.image} width={370} height={250} alt="" />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">
                            <span className='badge bg-success text-center ms-5'>{props.name} </span>
                        </h3>
                        <button type='submit' className="btn btn-primary ms-5" onClick={handleSubmit}>Click Here... To Know More</button>

                    </div>
                </div>
            </div>



        </>
    )
}

export default InventoryCards
