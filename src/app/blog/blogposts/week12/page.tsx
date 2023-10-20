import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week12 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 12</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    Describe Agile Development or a specific ceremony (stand up, retro, sprints, etc.)
                    <br />
                    <br />
                    Agile development is a organizational system to help in the creation of software by applying 
                    proven principles of development. Stand up for instance helps the invdividual feel more part 
                    of the whole process, while giving a quick recap to the entire group of progress. Any 
                    shortcomings will be seen in the stand up as well, which allows them to be addressed before 
                    becoming bigger issues.
                    <br />
                    <br />
                    Convince someone who does not use frameworks why using a framework is beneficial. (Bootstrap, 
                    React, Django, or DRF)
                    <br />
                    <br />
                    Frameworks are beneficial because they allow you to complete a task while hiding some of the 
                    logic code writing in already created code. While the learning curve for some frameworks is 
                    steep, once you have understanding the frameworks will save you time in future projects.
                </p>
            </div>
        </>
    )
}

export default Week12