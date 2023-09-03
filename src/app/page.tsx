"use client"
import { ModeToggle } from "@/components/modeToggleButton"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <ModeToggle></ModeToggle>
        {/* Signed in as {session} <br /> */}
        {console.log(session.user)}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <ModeToggle></ModeToggle>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
