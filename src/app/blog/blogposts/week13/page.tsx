import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week13 = () => {
    return (
        <>
            <PortfolioNavBar />
            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 13</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    1. After making it through the tech stack, where do you think your current gaps are?
                    <br />
                    <br />
                    My current gaps are in Next JS. This was just introduced to use this week to be used on our
                    final project with no instructions. It really tested my ability to learn independently
                    though, which is a good thing.
                    <br />
                    <br />
                    2. Without considering the complexity, what is a custom hook you would write to help you
                    in any aspect of web development (or something else...)
                    <br />
                    <br />
                    A useCrud hook is what I would like to have due to I beleive it would be a helpful layer of
                    abstraction for a lot of people.
                    <br />
                    <br />
                    3. What is your opinion on documentation? (MVP, Stories, Points, Markdown, Personas,
                    Readme, Pseudocode, etc.)
                    <br />
                    <br />
                    While documentation isn&apos;t the most exciting thing in the field. It is a must have! Over
                    the course of this entire bootcamp I have learned the importance of good documentation, and
                    the consequence of not having it.
                </p>
            </div>
        </>
    )
}

export default Week13