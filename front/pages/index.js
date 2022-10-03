import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => signIn("instagram")}>Sign in</button>
    </>
  )
}
