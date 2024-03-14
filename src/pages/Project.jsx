import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectModel } from '../data'

function Project() {
    const { id } = useParams();
    const res = ProjectModel.find(findthis)
    function findthis(project){
        return project.id === id;
    }

    if (!res) {
        return <div>Item not found!</div>
      }

  return (
    <div>
      {res.title}
    </div>
  )
}

export default Project