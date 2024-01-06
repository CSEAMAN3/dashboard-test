import styles from ".//ui/home.module.css"
import {ArrowRightIcon} from "@heroicons/react/24/outline"
import Image from "next/image"
import { lusitana } from "@/app/ui/fonts"
import Link from "next/link"
import AcmeLogo from "@/app/ui/acme-logo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 lg:h-52">
        {/* ACME LOGO COMPONENT HERE */}
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 lg:w-2/5 md:px-20">
          <div className={styles.shape} />
          <div>
            <p className={`${lusitana.className} text-xl text-gray-800 mb-4 lg:text-3xl lg:leading-normal max-w-[40ch]`}><strong>Welcome to Acme</strong> This is the example for the {" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">Next.js Learn Course</a> 
            , brought to you by Vercel.
            </p>
            <Link href="/login" className="flex w-52 items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
              <span>Log in</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
          </div>
          <div className="flex items-center justify-center p-6 lg:w-3/5 lg:px-28 lg:py-12">
            {/* Add Hero Images Here */}
            <Image
              src="/images/hero-desktop.png"
              alt="this is the hero image for destop"
              width={1000}
              height={760}
              className="hidden md:block"
            />
            <Image 
              src="/images/hero-mobile.png"
              alt="This is the dashboard hero image for mobile"
              width={560}
              height={620}
              className="md:hidden"
            />
          </div>
        </div>
    </main>
  )
}
