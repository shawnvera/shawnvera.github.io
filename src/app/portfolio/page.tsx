'use client'

import React from 'react'
import PortfolioNavBar from '../components/PortfolioNavBar'
import BlogPostsDrawer from '../components/BlogPostsDrawer'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard';
import AlarmClock from '../../../public/alarm.png';
import TicTacToe from '../../../public/tictactoe.jpeg';
import InventoryFE from '../../../public/inventory-icon.png';

const projects = [
  {
    title: 'Alarm Clock',
    description: 'A digital alarm clock created with Javascript ES6',
    imageUrl: AlarmClock,
    link: 'https://shawnvera.github.io/alarm-clock/'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Javascript based web application of the classic game of tic tac toe.',
    imageUrl: TicTacToe,
    link: 'https://shawnvera.github.io/tic-tac-toe/'
  },
  {
    title: 'Inventory Controller Front End',
    description: 'A full stack web application using Javascript, React, Django REST Framework, and PostGrSQL',
    imageUrl: InventoryFE,
    link: 'https://inventory-controller-front-end-mctd-14j6rus4q-shawnvera.vercel.app/'
  },
  // Add more projects as needed
];


const Portfolio: React.FC = () => {

  function handleEvent() {
    <Link href="https://github.com/shawnvera/inventory-controller/tree/main/django-repo" />
  }
  return (
    <>
      <PortfolioNavBar />

      <div className='text-black text-center font-bold bg-contain'>
        <BlogPostsDrawer />
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Inventory Controller Backend</h2>
          <p>Click the button below to view the code for my backend code to the inventory controller.</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href="https://github.com/shawnvera/inventory-controller/tree/main/django-repo">View Backend Code</Link>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Portfolio