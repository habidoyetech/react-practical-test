import React from 'react'
import { useFetchUsers } from '../hooks/useFetch'
import User from '../Components/User'

export default function HomePage() {

    const [users, loading, ] = useFetchUsers() 

    if (!users || loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } 

  return (
    <div className='bg-white'>
      <div className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 ">Users</h2>
            </div> 
            <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
                {
                    users?.map((user) => {
                        return (
                            <User key={user.id} user={user} />
                        )
                    })
                }

            </div>

        </div>
      </div>
    </div>
  )
}
