


function Cards(props) {



    return (
        <>

            <div className="col-md-3 mb-2">
                <div class="card" style={{ cursor: "pointer" }}>
                    <div class='image-section1 border'>
                        <img src={props.Image} width={250} height={200} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><span className='badge bg-success text-center'>Blood-Group : {props.Title} </span></h5>
                        <h5><span className='badge bg-warning'>Total In : {props.TotalIn} (ML)</span></h5>
                        <h5><span className='badge bg-danger'>Total Out : {props.TotalOut} (ML)</span></h5>
                        <h5><span className="badge bg-primary">Total Available : {props.TotalAvailable} (ML)</span></h5>
                    </div>
                </div>
            </div>



        </>

    );

}

export default Cards;