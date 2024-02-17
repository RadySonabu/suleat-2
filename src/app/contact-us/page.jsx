import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import React from 'react'

const ContactUsPage = () => {
  return (
    <div>
      <div className='fixed  top-0 w-full'>
        <Header/>

      </div>
      <ContactUs/>
    </div>
  )
}

export default ContactUsPage