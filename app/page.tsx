'use client';

import SearchSection from "@/components/SearchSection"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import Image from "next/image"
import Link from "next/link"

import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsFillBuildingsFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";

import { GitDevProfileType } from "@/types/userTypes";
import { formatThis } from "@/utils/dateFormatter";
import { useState } from "react";
import { default_userName, github_Url } from "@/utils/constants";
import DevProfileSection from "@/components/DevProfileSection";



export default function Home() {
  const [userName, setUserName] = useState(default_userName);

  const { isPending, error, data , refetch} = useQuery<GitDevProfileType>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(github_Url+userName).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message;

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    refetch();
  }

  return (
    <main className="flex min-h-screen w-full p-2 sm:p-4 transition-all pt-10 sm:pt-12 bg-slate-100 dark:bg-slate-950">
      {/* Bismillah */}
      <div className="flex flex-col gap-8 rounded-md p-4 w-full max-w-2xl mx-auto">
        <section className="flex justify-between gap-3" id="navbar">
          <p className="text-xl font-semibold">Dev Profile Finder</p>
          <ThemeSwitcher />
        </section>
        <section className="flex flex-col gap-6">
          <SearchSection onChange={(e)=>setUserName(e.target.value)} onSubmit={handleSubmit} value={userName} />
          <main className="flex flex-col w-full gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-52">
            <DevProfileSection joinedAt={data?.created_at} username={data?.name} avatar={data?.avatar_url} profileUrl={data?.login} />
            <div className="flex flex-col gap-5">
              <p>{data?.bio ?? <span className="opacity-60">This User had not added a bio yet.</span>}</p>
              <div className="flex justify-between gap-3 rounded-lg bg-stone-100 dark:bg-slate-900 px-6 py-4 min-h-[50px]:">
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Repos</p>
                  <p className="text-sm font-bold sm:text-base">{data?.public_repos}</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Followers</p>
                  <p className="text-sm font-bold sm:text-base">{data?.followers}</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Following</p>
                  <p className="text-sm font-bold sm:text-base">{data?.following}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-xl" />
                  <p>{data?.location ?? <span>Location Unavailable</span>}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiLink className="text-xl" />
                  {data?.blog ? (
                  <Link title={data?.blog}
                  className="hover:underline opacity-60 text-ellipsis overflow-hidden max-w-56"
                  href={data?.blog ?? "#"}>
                  {data?.blog}
                  </Link>) : (<span className="opacity-60">No Blog Found</span>)}
                </div>
                <div className="flex items-center gap-2">
                  <RiTwitterXLine className="text-xl" />
                  <p>{data?.twitter_username ?? <span>Twitter Not Updated Yet</span>}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillBuildingsFill className="text-xl" />
                  <p>{data?.company ?? <span>Not Available</span>}</p>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </main>
  )
}