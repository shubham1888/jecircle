import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <main className="auth-page h-[100vh] w-[100vw] flex justify-center items-center">
      <SignIn />
    </main>
  )
}

export default SignInPage