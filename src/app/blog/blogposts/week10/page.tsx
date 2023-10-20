import BlogPostsDrawer from '@/app/components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week10 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 10</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What are you struggling with the most in the Tech Stack so far and why?
                    <br />
                    <br />
                    I struggled with PostGreSQL and the Django framework. It was difficult to understand the table
                    relations as well as how to work in the shell. Memorizing the new CLI commands wasn&apos;t terribly
                    tough, but did cost extra time.
                    <br />
                    <br />
                    What companies or people (local or not) would you like to hear talk during a Bootcamp lunch
                    and learn?
                    <br />
                    <br />
                    I would be interested in hearing from people that work at local schools and companies not
                    neccessarily affiliated with Awesome inc. in the past. Such as someone that maintains UK&apos;s
                    website or Clark forklifts website to see what a day is like in their work life, and how they
                    differ.
                    <br />
                    <br />
                    After having built your first full-stack application, what things in your repertoire are a
                    sticking point for you? Were you able to reconnect your React Restaurant to your Backend Bistro
                    code? If so, what was that like, and if not, what hurdles did you need to jump?
                    <br />
                    <br />
                    I would consider React JS a sticking point as I don&apos;t feel that I have sufficient knowledge of
                    it at this time. I do plan on going back after the bootcamp has completed to study more into
                    it. I was not able to connect my app to the React restaurant, mainly due to running into a
                    blocker on how to get some data to display on my backend bistro. I will end up connecting the
                    two in the future just to get the chance to play around with them.
                </p>
            </div>
        </>
    )
}

export default Week10