import React from 'react'
import { useRouter } from 'next/router'
function FormPage() {
    const router = useRouter()
  return (
    <>
    FormPage 
    {router.query.slug}
    </>
  )
}

export default FormPage