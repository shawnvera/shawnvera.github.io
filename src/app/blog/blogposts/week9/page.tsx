import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week9 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 9</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What are some similarities and differences you can see with JS and Python?
                    <br />
                    <br />
                    The logic behind the languages seem to be a little similar. You can loop through items, hold
                    information in a variable, and perform operations on different information.
                    <br />
                    <br />
                    If you had started with Python instead of JS, how do you think the Bootcamp would be
                    different? Would you have benefited?
                    <br />
                    <br />
                    I think the bootcamp would have been more difficult if I had started with Python. I don&apos;t
                    think Python is as difficult a language to learn as vanilla Javascript due to all of the
                    special characters used in Javascript (such as { } or ;). I don&apos;t believe it would have been
                    a benefit as after getting used to writing Python it would have been harder to not make errors
                    constantly with Javascript syntax.
                    <br />
                    <br />
                    Think of a project or tech based tool that you use often and think about what the database
                    structure might look like for it. Do you feel like you have a better understanding of how it
                    works now and could you see yourself enjoying building something like that in the future?
                    <br />
                    <br />
                    I think of the software I used at my old position before coming to this bootcamp, and I have a
                    much better understanding of how that system worked now. I had a lot of interest in that sytem
                    at the time, and I can see myself really enjoying building something similar with improvements.
                </p>
            </div>
        </>
    )
}

export default Week9