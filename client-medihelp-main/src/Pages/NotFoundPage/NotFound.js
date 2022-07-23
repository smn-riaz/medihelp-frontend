import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStyle from '../../Components/Button/ButtonStyle'
import SectionHeadline from '../../Components/SectionHeadline/SectionHeadline'
import './NotFound.css'

export default function NotFound() {
    return (
        <section className='text-center  notFound'>
            <h1 className='p-4'><SectionHeadline headline="Page Not Found" /></h1>
            <div className='fixed-bottom p-4 d-flex justify-content-center'>
            <p className='p-2'><Link to='/'><ButtonStyle text="Go to Home" appointment="true"/></Link></p>
            <p className='p-2'><Link to='/login'><ButtonStyle text="Sign In" appointment="true"/></Link></p>
            </div>
            
        </section>
    )
}