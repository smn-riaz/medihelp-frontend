import React from 'react'
import './SectionHeadline.css'
import Slide from 'react-reveal/Slide';

export default function SectionHeadline({headline, supText}) {
    
    return (
        <section className="section-headline">
           <Slide top cascade><h3 className="text-center py-4"><sub>{supText} </sub><span className="big-text"> {headline}</span></h3></Slide>
        </section>
    )
}