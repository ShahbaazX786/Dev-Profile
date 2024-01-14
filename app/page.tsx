import SearchSection from "@/components/SearchSection"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import Image from "next/image"
import Link from "next/link"

import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsFillBuildingsFill } from "react-icons/bs";




export default function Home() {
  return (
    <main className="flex min-h-screen w-full p-2 sm:p-4 transition-all pt-10 sm:pt-12 bg-slate-100 dark:bg-slate-950">
      {/* Bismillah */}
      <div className="flex flex-col gap-8 rounded-md p-4 w-full max-w-2xl mx-auto">
        <section className="flex justify-between gap-3" id="navbar">
          <p className="text-xl font-semibold">Dev Profile Finder</p>
          <ThemeSwitcher />
        </section>
        <section className="flex flex-col gap-6">
          <SearchSection />
          <main className="flex flex-col w-full gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-52">
            <div className="flex gap-4">
              <Image src={'https://avatars.githubusercontent.com/u/60142641?s=400&u=d50e7cf3665c7f11ad1718801d86a8651339c8d1&v=4'} width={200} height={200} alt="user-profile-avatar" className="h-24 w-24 rounded-full ring-green-400 ring-2" />
              {/* user image */}
              <div className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                  <h1>Shaik Shahbaaz Alam</h1>
                  <Link href={'#'} className="text-blue-500 hover:underline text-sm transition-all" >Link</Link>
                </div>
                <p>Joined Date</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quam voluptas quis minima commodi officiis dolorum perferendis nam eos recusandae?</p>
              <div className="flex justify-between gap-3 rounded-lg bg-stone-100 dark:bg-slate-900 px-6 py-4 min-h-[50px]:">
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Repos</p>
                  <p className="text-sm font-bold sm:text-base">200</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Followers</p>
                  <p className="text-sm font-bold sm:text-base">200</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Following</p>
                  <p className="text-sm font-bold sm:text-base">200</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-xl" />
                  <p>Kurnool</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiLink className="text-xl" />
                  <p>githubusername</p>
                </div>
                <div className="flex items-center gap-2">
                  <RiTwitterXLine className="text-xl" />
                  <p>Twitter</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillBuildingsFill className="text-xl" />
                  <p>Organization</p>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </main>
  )
}