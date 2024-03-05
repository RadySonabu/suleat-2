'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link'
import Image from 'next/image'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const userId = true;
  return (
    <header className="bg-white  backdrop-blur-3xl ">
      <nav className="z-99 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
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
        </div>
        {!userId ? (
        <>
            <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              
            </Transition>
          </Popover>

          <Link  href="/about-us" className="text-sm font-semibold leading-6 text-gray-900 hover:text-m">
            About Us
          </Link >
          <Link  href="/careers" className="text-sm font-semibold leading-6 text-gray-900">
            Careers
          </Link >
          <Link  href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </Link >
        </Popover.Group>
    
        
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link
                href='sign-in'
                className='text-sm font-semibold leading-6 text-gray-900 px-4'
                >
                Sign In
                </Link>
                <Link
                href='sign-up'
                className='text-sm font-semibold leading-6 text-gray-900'
                >
                Sign Up <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </>
            ) : <UserButton 
            showName='true' 
            userProfileMode='navigation'
            userProfileUrl='/profile'
            /> }
    
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link  href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={300} height={300}
                className="h-8 w-auto"
                src="https://2023-lamba-bucket.s3.ap-southeast-1.amazonaws.com/Group+39.png"
                alt=""
              />
            </Link >
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <Link 
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link >
                <Link 
                  href="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </Link >
                <Link 
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link >
              </div>
              <div className="py-6">
                <Link 
                  href="/sign-up"
                  className=" block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link >
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
