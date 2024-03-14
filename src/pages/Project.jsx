import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectModel } from '../data'

function Project() {
    const { id } = useParams();
    console.log('ID:', id); // Log the ID to debug
    const item = ProjectModel.find(obj => obj.id === parseInt(id));
    

    if (!item) {
        return <div>Item not found!</div>;
      }

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.description}</p>
      <a href={item.liveDemoLink}>Live Demo</a>
    </div>
  )
}

export default Project