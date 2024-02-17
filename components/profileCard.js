import Image from 'next/image'
import React from 'react'

function ProfileCard({name, position, background, imageLink}) {
  return (
    <div className="relative flex flex-col text-gray-700 border-orange-500 border-solid border-2 dark:bg-gray-100-border-none shadow-md bg-clip-border rounded-xl w-80 ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 h-72">
            <Image src={imageLink} alt="profile-picture" height={200} width={400}/>
        </div>
        <div className="px-4 text-center">
            {/* <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-orange-500">
            {name}
            </h4> */}
            <span className="bg-clip-text text-2xl text-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                {name}
            </span>
            <p
            className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500 bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            {position}
            </p>
        </div>
        <div className="flex justify-center  p-4 ">
            <p
            className="block font-sans text-sm antialiased font-bold leading-relaxed text-blue-gray-500 flex-wrap bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            {background}
            </p>
        </div>
    </div>
  )
}

export default ProfileCard