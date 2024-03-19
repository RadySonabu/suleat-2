"use server"
import DashboardPage from "@/components/DashboardPage";
import LandingPage from "@/components/LandingPage";
import BottomNav from "@/components/Navigation/BottomNav";
import { UserButton, auth, currentUser } from '@clerk/nextjs';

const Example = async () => {
  const user = await auth()


  return (
    <>
    {user.userId ? <DashboardPage/> : <LandingPage/>}
    <BottomNav/>
    </>
    

  )
}
export default Example;