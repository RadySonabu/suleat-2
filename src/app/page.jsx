"use server"
import DashboardPage from "@/components/DashboardPage";
import LandingPage from "@/components/LandingPage";
import { UserButton, auth, currentUser } from '@clerk/nextjs';

const Example = () => {
  const user = auth()
  console.log(user.userId)
  return (
    <>
    {user ? <DashboardPage/> : <LandingPage/>}
    </>
    

  )
}
export default Example;