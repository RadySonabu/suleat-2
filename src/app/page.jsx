"use server"
import DashboardPage from "@/components/DashboardPage";
import LandingPage from "@/components/LandingPage";
import { UserButton, auth, currentUser } from '@clerk/nextjs';

const Example = async () => {
  const user = await auth()
  console.log(user.userId ? 'yes' : 'no')


  return (
    <>
    {user.userId ? <DashboardPage/> : <LandingPage/>}
    </>
    

  )
}
export default Example;