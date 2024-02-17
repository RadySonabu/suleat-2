import React from 'react'
import Link from "next/link";
import Image from "next/image"


function Navbar() {
  return (
    <div className='flex  flex-1 w-ful'>
        <nav class="container flex items-center justify-between flex-wrap  p-4 mx-auto">
            <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-orange-500 dark:text-gray-100">
                        <span>
                        <Image
                            src="/suleat-svg.svg"
                            alt="N"
                            width="32"
                            height="32"
                            className="w-8"
                        />
                        </span>
                        <span className="text-center text-orange-600"><div className="font-bold">Suleat</div> <div className="text-xs">Super Food</div></span>
                    </span>
                    </Link>
            
            <div class="w-full mx-auto block flex-grow lg:flex lg:items-center lg:w-auto">
                <div>
                {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar