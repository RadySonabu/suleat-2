import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-evenly h-screen">
        <div className="m-auto">
          <SignUp />

        </div>
      </div>
    </>
  );
};
export default SignUpPage;