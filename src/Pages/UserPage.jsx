import React from 'react'
import { useParams } from 'react-router'
import { useFetchUser } from '../hooks/useFetch'
import { formatPhoneNumber } from '../Utils/formatPhoneNumber'


function UserPage() {

    const { userId } = useParams()

    const [user, loading, error] = useFetchUser(userId)

    if (!user) {
        return (
            <div>Loading</div>
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
