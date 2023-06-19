'use client';

import { UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <div className="border-b border-primary bg-base p-4">
      <div className="flex w-full justify-between">
        <h1 className="font-semibold text-2xl">Tunesday</h1>
        <UserButton />
      </div>
    </div >
  )
}