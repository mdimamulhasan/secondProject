import React from 'react'
import { useLocation } from 'react-router-dom'

const EditBooks = () => {

    const location = useLocation();
    console.log(location);

  return (
      <div>
          <h1>Edit books</h1>
      </div>
  )
}

export default EditBooks