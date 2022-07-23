import React from 'react'
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar'
import './GenerateBillPage.css'

export default function GenerateBillPage() {
    return (
        <section className="generateBillPage" >
            <div className="row">
                <div className='col-lg-2 col-md-3'><Sidebar /></div>
                <div className="col-lg-10 col-md-9 p-5 generateBillPageContainer">
                    <h2 className="text-center">Generate Bill</h2>
                </div>
            </div>
        </section>
    )
}