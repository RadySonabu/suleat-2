import React from 'react'
import { UserButton } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div>
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
        page of profile
    </div>
  )
}
