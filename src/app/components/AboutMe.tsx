import React from 'react';
import DemoDayPortrait from '../components/DemoDayPortrait';

export default function AboutMe() {
    return (
        <>
            <div className="text-black">
                <h1 className='text-center font-bold text-black font-style: italic text-xl bg-slate-300'>About Shawn Vera</h1>
                <br />
                <div className='p-5 border-4 border-solid hover:border-dotted text-black'>
                    <p>


                        Originally hailing from Huntington, WV, my journey into the realm of programming commenced during my adolescent years. At that time, 
                        I developed a website dedicated to an online hobby, sparking a keen interest in the field. This initial curiosity prompted me to pursue 
                        and successfully attain a bachelor's degree in Management Information Systems (MIS) from Marshall University.
                        <br />
                        <br />
                        Post-graduation, my professional trajectory unfolded across various sectors, encompassing two years in production planning, an additional 
                        two in sales, followed by a two-year tenure in banking, and culminating in nine years within the logistics domain. As the 
                        Account/Customer Service Manager at a logistics company, I actively engaged with two warehouse management systems, namely 
                        Cadre Cadence and SAP. This experience not only fortified my comprehension of these intricate systems but also reignited my passion 
                        for databases and programming as I sought to delve deeper into their operational intricacies.
                        <br />
                        <br />
                        Motivated by an unwavering enthusiasm for programming, I elected to embark on a transformative career journey, relocating to 
                        Lexington, KY in January 2023. This marked the commencement of my transition into programming, a decision solidified by my enrollment 
                        in the Awesome Inc. Summer 2023 bootcamp. The ongoing expedition into this dynamic field has proven to be both exhilarating and gratifying. 
                        Eagerly anticipating the continuous assimilation of new programming technologies, I am committed to fostering continual growth in this 
                        transformative chapter of my professional odyssey.

                    </p>
                </div>
            </div>
            <DemoDayPortrait />
        </>
    )
}