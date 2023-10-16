import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week11 = () => {
    return (
        <>
            <PortfolioNavBar />
            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 11</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What has been your experience overall thus far? What would you want to post as a &quot;retrospective&quot;?
                    <br />
                    <br />
                    Overall, my experience has been a good one thus far. I knew that this field was a lot of
                    information, and would take more time than the allotted 14 weeks of the bootcamp to fully
                    understand. The bootcamp has really helped build foundational knowledge, and taught me how
                    to continue learning going forward in my career.
                </p>
            </div>
        </>
    )
}

export default Week11