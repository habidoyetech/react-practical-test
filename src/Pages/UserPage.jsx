import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function UserPage() {

    let {userId} = useParams()
    useEffect(() => {
        console.log(userId)
    }, [userId])

  return (
    <div>
      The Child is {userId}
    </div>
  )
}

export default UserPage
