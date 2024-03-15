import React from 'react'
import Header from '../../components/Layout/Header'
import Sidebar from '../../components/Layout/Menus/Sidebar'
import '../../styles/Admin.css';
const Admin = () => {
    return (
        <>
            <Header />
            <div className='row g-0'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>


                <div className='col-md-9 container table-responsive-md'>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Blood Group</th>
                                <th scope="col">InventoryType</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Donar Email</th>
                                <th scope="col">Time and Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {detailsData.filter(ele => ele.bloodGroup != '').map((record) => (
                                <tr key={record._id}>
                                    <td>{record.bloodGroup}</td>
                                    <td>{record.inventoryType}</td>
                                    <td>{record.quantity} (ML)</td>
                                    <td>{record.donarEmail}</td>
                                    <td>
                                        {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Admin
