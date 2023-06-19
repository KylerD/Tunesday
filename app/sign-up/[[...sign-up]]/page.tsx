import { SignUp } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


export default async function Page() {
  const user = await currentUser();

  if (user) {
    redirect('/home')
  }

  return (
    <div className="grid h-screen place-items-center">
      <SignUp />
    </div>
  )
}