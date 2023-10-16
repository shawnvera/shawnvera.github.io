import React from 'react';
import DemoDayPortrait from '../components/DemoDayPortrait';
import Footer from '../components/Footer';

export default function AboutMe() {
    return (
        <>
            <div className="text-black">
                <h1 className='text-center text-lg font-bold'>About Shawn Vera</h1>
                <br />
                <div className='p-5 border-4 border-solid hover:border-dotted'>
                    <p>

                        Originally from Huntington, WV I became interested in programming during my teen years. I created a website for an online hobby I held at the time.
                        This interest led me to pursue and obtain a bachelor&apos;s degree in Management Information Systems (MIS) from Marshall University.
                        After college I spent two years as a production planner, two years in sales, two years in banking, and nine years in logistics.
                        In my role as Account/Customer service manager at the logistics company I worked in two warehouse management systems (Cadre Cadence
                        and SAP). While working with these systems my interest in databases, and in programming overall grew again, as I wanted to learn more
                        about how these systems operated. I left that role, and moved to Lexington, KY in January of 2023 deciding to make a career switch
                        into programming by attending the Awesome Inc. Summer 2023 bootcamp. The journey into this career has been exciting and rewarding thus far.
                        I&apos;m excited to continue learning new programming technologies and growing in my journey.

                    </p>
                </div>
            </div>
            <DemoDayPortrait />
            <Footer />
        </>
    )
}