import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <>
      <div className="flex justify-evenly h-screen">
        <div className="m-auto">
          <SignIn />
        </div>
      </div>
    </>
  );
};
export default SignInPage;