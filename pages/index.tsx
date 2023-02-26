import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Button from "../components/button";
import Layout from "../components/layout";

export default function Home() {
  const { data: session } = useSession();

  if (session === undefined) {
    return (
      <Layout>
        <div className="h-48 flex justify-center items-center">
          <div className="h-12 w-12 rounded-full border-[3px] border-indigo-300 border-t-indigo-600 animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {session ? (
        <>
          <div className="flex flex-col mb-16">
            <img
              className="w-20 h-20 m-auto mb-10 rounded-full border border-gray relative
              before:content-['Sign_out'] before:w-20 before:h-20 before:bg-slate-800 
              before:text-white before:absolute before:right-0 before:left-0 before:text-xs 
              before:flex before:items-center before:justify-center
              before:opacity-0 before:hover:opacity-80 before:defaultTrasition"
              src={`${session.user?.image}`}
              alt="User image"
              onClick={() => signOut()}
              title="Sign out"
            />
            <h1 className="text-md font-bold">Welcome {session.user?.name}!</h1>
          </div>
          <Button text="Play now" href="/question" isOrange />
        </>
      ) : (
        <>
          <div className="flex flex-col mb-10 mt-6">
            <h1 className="text-xl font-bold">Welcome...</h1>
            <p className="text-md">Your are not logged in!</p>
            <p className="text-xs mt-4">Log in to save your results</p>
          </div>
          <div className="flex flex-col gap-2 max-w-xs m-auto">
            <Button text="Sign in" isOrange onClick={signIn} />
            <Button text="Play this way" href="/question" />
          </div>
        </>
      )}
    </Layout>
  );
}
