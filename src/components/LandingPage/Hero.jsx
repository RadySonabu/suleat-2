import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../Container'
const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-gray-900">
              Empowering every Filipino kitchen
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-900 lg:text-xl xl:text-2xl dark:text-gray-900">
            Suleat Super Food is an online platform that leverages the power of AI to connect buyers with home cooks. 
            
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/sign-up"
                
                className="px-8 py-4 text-lg font-medium text-center w-full text-white bg-orange-600 rounded-md hover:bg-orange-700 ">
                Sign up as a Cook
              </Link>
              {/* <Link
                href="/register/buyer"
                
                className="px-8 py-4 text-lg font-medium text-center text-orange-600 border-orange-600 border-solid border-2 rounded-md ">
                Sign up as a Buyer
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/order-food.svg"
              width="600"
              height="600"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-orange-600">2000+</span>{" "}
            customers worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  )
}

export default Hero