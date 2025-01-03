import React from 'react'

function User({name, email}) {
  return (
    <>
        <div class="items-center bg-white rounded-lg shadow-lg flex flex-col sm:flex-row justify-between cursor-pointer p-5 gap-5">
            <div className='flex items-center gap-2 sm:gap-5 flex-col sm:flex-row justify-center'>
                <a href="#">
                    <div class="relative size-20 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full">
                        <svg class=" w-[100%] h-[100%] text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                </a>
                <div class=" text-center sm:text-left">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900">
                        <a href="#">{name}</a>
                    </h3>
                    <span class="text-gray-500 lowercase">{email}</span>
                    
                </div>

            </div>
              
            <div>
            <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Veiw Details
            </a>

            </div>
          </div> 
      
    </>
  )
}

export default User
