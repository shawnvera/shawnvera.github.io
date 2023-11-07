// components/ProjectCard.tsx

import React from 'react';
import styles from '../styles/styles.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title}
        className={styles.image}
      />
      <h2><a href={link}>{title}</a></h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
