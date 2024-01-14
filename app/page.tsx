'use client';

import SearchSection from "@/components/SearchSection"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { useQuery } from "@tanstack/react-query";

import { GitDevProfileType } from "@/types/userTypes";
import { useState } from "react";
import { AppName, github_Url } from "@/utils/constants";
import DevProfileSection from "@/components/DevProfileIntroSection";
import DevProfileMainSection from "@/components/DevProfileMainSection";



export default function Home() {
  const Appname = Array.from(AppName);
  const [userName, setUserName] = useState('');

  const { isPending, error, data, refetch } = useQuery<GitDevProfileType>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(github_Url + userName).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch();
  }

  return (
    
    <main className="flex min-h-screen w-full p-2 sm:p-4 transition-all ease-linear pt-10 sm:pt-12 bg-gray-200 dark:bg-slate-950">
     {/* Bismillah */}
      <div className="flex flex-col gap-8 rounded-md p-4 w-full max-w-2xl mx-auto">
        <section className="flex justify-between gap-3" id="navbar">
          <div className="text-2xl font-semibold p-2 flex">
            {Appname.map((letter, index) => (<span className="hover:-translate-y-2 hover:scale-110 transition-all ease-linear cursor-pointer" key={index}>{letter}</span>))}
          </div>
          <ThemeSwitcher />
        </section>
        <section className="flex flex-col gap-6">
          <SearchSection onChange={(e) => setUserName(e.target.value)} onSubmit={handleSubmit} value={userName} />
          <main className="flex flex-col w-full gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-12  shadow-md">
            {data?.message !== 'Not Found' ? (
              <>
                <DevProfileSection joinedAt={data?.created_at} username={data?.name} avatar={data?.avatar_url} profileUrl={data?.login} />
                <DevProfileMainSection bio={data?.bio} blog={data?.blog} company={data?.company} followers={data?.followers} following={data?.following} location={data?.location} publicRepos={data?.public_repos} twitter={data?.twitter_username} />
              </>) : (<span className="font-semibold text-xl text-center text-red-600 bg-red-200 p-4">Oops! It looks like, This username doesnt exists</span>)}
          </main>
        </section>
      </div>
    </main>
  )
}