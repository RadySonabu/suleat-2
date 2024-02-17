import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-evenly h-screen">
        <div class="m-auto">
          <SignUp />

        </div>
      </div>
    </>
  );
};
export default SignUpPage;