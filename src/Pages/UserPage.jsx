import React from 'react'
import { useParams } from 'react-router'
import { useFetchUser } from '../hooks/useFetch'
import { formatPhoneNumber } from '../Utils/formatPhoneNumber'


function UserPage() {

    const { userId } = useParams()

    const [user, loading] = useFetchUser(userId)

    if (!user || loading) {
        return (
            <div class="flex items-center justify-center w-screen overflow-hidden h-screen border border-gray-200 rounded-lg bg-gray-50 ">
                <div role="status">
                    <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex justify-center'>
        <div className='w-[95%] md:w-[60%] border rounded-xl py-5 px-8'>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">User Profile</h2>
                    
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        <div className="">
                            {/* <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                Photo
                            </label> */}
                            <div className=" flex items-center">
                                <div class="relative size-20 p-0.5 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full">
                                    <svg class=" w-[100%] h-[100%] text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>     
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                                Username
                            </label>
                            <div className="">
                                <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <div id="username"className="block min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                        {user?.username}
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className=" border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                        <div className="">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="">
                                <div id="firstname" className="block min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user?.name.split(' ')[0]}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                Last name
                            </label>
                            <div className="">
                                <div id="firstname" className="block min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user?.name.split(' ')[1]}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.email}
                                </div>
                            </div>
                        </div>


                        <div className="">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                Phone Number
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {formatPhoneNumber(user.phone)}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Website
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.website}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                Company Name
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.company.name}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                Street address
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user?.address.street}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                City
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.address.city}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                Suite
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.address.suite}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="">
                                <div id="firstname" className="block lowercase min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                                    {user.address.zipcode}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                Cancel
                </button>
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div> */}
        </div>
    </div>
  )
}

export default UserPage
