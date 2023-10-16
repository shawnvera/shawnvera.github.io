import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week3 = () => {
    return (
        <>
            <PortfolioNavBar />
            <div className='text-white'>
                <h1 className='text-center font-bold'>Week 3</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What is the number one thing that held you back this week? Why?
                    <br />
                    <br />
                    Being able to fully connect with state management of Javascript really held me back this week. 
                    The readings, videos, and outside searches helped, but I didn&apos;t fully attain enough understanding 
                    to put it all together. I was able to get the mind reader project completed, but I still am interested 
                    in learning more about state management.
                    <br />
                    <br />
                    What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, 
                    or Atomic Design?
                    <br />
                    <br />
                    I would like to learn more about JSON as I feel it was only briefly touched on this week, and I know it will 
                    be very important when we start working with APIs. I would also like to learm more about data structures and 
                    atomic design.
                    <br />
                    <br />
                    What is your “Why”?
                    <br />
                    <br />
                    If this questions is regarding the overarching question of why am I attending bootcamp for coding, it would 
                    be for personal interests as I have always enjoyed technology.
                    <br />
                    <br />
                    If this &quot;why&quot; is regarding the question above it would be that I want to have a deeper understanding of the 
                    material as I believe it to be important in connecting to databases.
                </p>
            </div>
        </>
    )
}

export default Week3