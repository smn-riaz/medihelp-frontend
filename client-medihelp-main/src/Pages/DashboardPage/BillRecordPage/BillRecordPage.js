import React from 'react'
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar'
import './BillRecordPage.css'

export default function BillRecordPage() {
    return (
        <section className="billRecordPage" >
            <div className="row">
                <div className='col-lg-2 col-md-3'><Sidebar /></div>
                <div className="col-lg-10 col-md-9 p-5 billRecordPageContainer">
                    <h2 className="text-center">Bill Record</h2>
                </div>
            </div>
        </section>
    )
}