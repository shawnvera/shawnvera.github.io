import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week4 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 4</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    1. What did you learn about that helped you understand the development process?
                    <br />
                    <br />
                    I was better able to understand state management this week, which helped tremendously. 
                    Learning about Axios also helped, though I&apos;m still continuing to learn about it.
                    <br />
                    <br />
                    2. What does it mean to develop good code?
                    <br />
                    <br />
                    It means to produce DRY code that is efficient while also be readable. Pseudocode is very 
                    important for the cases when the code may not be commented, or just for better understanding.
                    <br />
                    <br />
                    3. What does it mean to be a good developer?
                    <br />
                    <br />
                    To think through a challenge that arises and apply the knowledge that has already been gained. 
                    When found lacking seeking the information required, and also striving to improve your 
                    knowledge base.
                    <br />
                    <br />
                    4. What is one thing that programmers hate doing?
                    <br />
                    <br />
                    Re-writing the same code repetitively. I would want to make re-usable code as much as possible 
                    to provide effiency and save time for more projects.
                </p>
            </div>
        </>
    )
}

export default Week4