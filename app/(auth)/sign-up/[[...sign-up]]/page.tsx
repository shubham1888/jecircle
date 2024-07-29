import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <main className="auth-page h-[100vh] w-[100vw] flex justify-center items-center">
        <SignUp />
    </main>
  )
}

export default SignUpPage