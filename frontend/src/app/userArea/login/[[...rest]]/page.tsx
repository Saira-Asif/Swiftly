import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full overflow-auto mt-20">
      <SignIn />
    </div>
  );
}
