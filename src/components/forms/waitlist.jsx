import React from 'react';

function WaitlistForm() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block text-orange-600 text-8xl tracking-wider">Waitlist</span>
                    <span className="block text-black tracking-widest">Suleat App</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Our Website will launch soon. Join the waitlist to try the beta before it's publicly available.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form className="sm:mx-auto sm:max-w-xl lg:mx-0" action="https://api.web3forms.com/submit">
                      <div className="sm:flex">
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          value=""
                          autoComplete="off"
                        />
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-orange-600 py-3 px-4 font-medium text-white shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Join Waitlist
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 hidden lg:block">
                <img
                  className=""
                  src="/order-food.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistForm;
