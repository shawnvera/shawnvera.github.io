import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week6 = () => {
    return (
        <>
            <PortfolioNavBar />
            <div className='text-white'>
                <h1 className='text-center font-bold'>Week 6</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?
                    <br />
                    <br />
                    At this stage in my learning path I consider Frameworks and Libraries to be hard to work with, 
                    mainly due to just learning Javascript. I believe that once I&apos;m more comfortable with Vanilla Javascript 
                    the Frameworks and Libraries will be a huge resource and help.
                    <br />
                    <br />
                    What Frameworks or Libraries are you interested in learning more about?
                    <br />
                    <br />
                    I&apos;ve heard good things about Svelte and Next.JS. Aftewr the bootcamp has ended I plan on learning both 
                    Frameworks.
                    <br />
                    <br />
                    Find one emerging JavaScript tool that you would like to learn more about or use in your final project.
                    <br />
                    <br />
                    I&apos;ve heard a lot of good reviews about the Sublime Text IDE.
                    <br />
                    <br />
                    Once you have created a blog post please submit the link to your blog post in order to complete the 
                    assignment.
                </p>
            </div>
        </>
    )
}

export default Week6