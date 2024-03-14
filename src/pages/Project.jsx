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
    <div className='max-w-[1000px] m-auto'>
        <div>
            <Link to="/"></Link>
            <button></button>
        </div>
    </div>
  )
}

export default Project