
import DashboardPage from "@/components/DashboardPage";
import LandingPage from "@/components/LandingPage";
import { UserButton, auth } from '@clerk/nextjs';

const Example = () => {
  const { userId } = auth();

  return (
    <>
      {!userId ? 
        <LandingPage/>
       : 
        <DashboardPage/>
      }
    </>
    

  )
}
export default Example;