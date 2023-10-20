import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week5 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 5</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What is pseudocode and how does it help with programming?
                    <br />
                    <br />
                    Anyone new to programming may be in for a surprise when the journey starts with writing 
                    pseudocode instead of a programming language. I defintely didn&apos;t know the importance of 
                    pseudocode before starting a bootcamp. Pseudocode is a way to explain the logic behind the 
                    coding language in a way that people without a computer background or interest would be able 
                    to understand. It helps us identify the issue, and to solidify our logic behind the problem. 
                    Pseudocode can be used to solve the same problme in different programming languages, which 
                    makes it a very useful tool.
                    <br />
                    <br />
                    Pseudocode helps with programming by taking the logic problem out of the project before 
                    getting into a programming language. It allows us separate our problems and solve them 
                    independently. Once you move into a programming you shouldn&apos;t have to worry about solving 
                    the logic, and will be free to solve the syntax issues with whichever programming language 
                    you&apos;re using.
                    <br />
                    <br />
                    In conclusion, pseudocode has been a difficult practice to get accustomed to in my coding 
                    journey, but it will be a valuable addition as well. I look forward to using it in my 
                    professional career.
                </p>
            </div>
        </>
    )
}

export default Week5