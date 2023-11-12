import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
      <Head>
        <title>Hello Pages Router with Next.js & Clerk</title>
        <meta
          name="description"
          content="A simple Hello World homepage using Next.js and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">
          Hello, Pages Router!
        </h1>
        <p className="text-gray-600">
          This is a simple homepage built with Next.js and Clerk
        </p>

        <SignedOut>
          <Link href="/sign-up">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Sign in or sign up for an account
              </h3>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
