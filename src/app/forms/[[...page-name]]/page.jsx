'use client'
import React from 'react'
import {useRouter, usePathname, useSearchParams} from 'next/navigation'
import WaitlistForm from '@/components/forms/waitlist'
import ProfileForm from '@/components/forms/profile'
function FormPage() {
    const searchParams = useSearchParams()

    const dictForms = {
      'waitlist': <WaitlistForm/>,
      'profile': <ProfileForm/>
    }
    console.log(dictForms[searchParams])
    const searchValue = searchParams.toString().replace('=', '')
  return (
    <>
      {dictForms[searchValue]}
    </>
  )
}

export default FormPage