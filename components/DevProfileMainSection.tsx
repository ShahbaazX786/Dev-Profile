import Link from 'next/link';

import { FiLink } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { DevProfileMainSectionProps as Props} from '@/types/userTypes';

function DevProfileMainSection({ bio, publicRepos, followers, following, location, blog, twitter, company }: Props) {
    return (
        <div className="flex flex-col gap-5">
            <p className='py-2'>{bio ?? <span className="opacity-60">This User had not added a bio yet.</span>}</p>
            <div className="flex justify-between gap-3 rounded-lg bg-gray-200 dark:bg-slate-900 px-6 py-4 min-h-[50px]:">
                <div className="flex  flex-col items-center gap-2">
                    <p className="text-sm dark:opacity-60 opacity-100">Repos</p>
                    <p className="text-sm font-bold sm:text-base dark:text-green-500 text-green-600">{publicRepos}</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                    <p className="text-sm dark:opacity-60 opacity-100">Followers</p>
                    <p className="text-sm font-bold sm:text-base dark:text-yellow-500 text-yellow-600">{followers}</p>
                </div>
                <div className="flex  flex-col items-center gap-2">
                    <p className="text-sm dark:opacity-60 opacity-100">Following</p>
                    <p className="text-sm font-bold sm:text-base dark:text-blue-500 text-blue-600">{following}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4 px-2">
                <div className="flex items-center gap-2">
                    <MdLocationOn className="text-xl" />
                    <p className='dark:opacity-60 opacity-80'>{location ?? <span>Location Unavailable</span>}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiLink className="text-xl" />
                    {blog ? (
                        <Link title={blog}
                            className="hover:underline dark:opacity-60 opacity-80 text-ellipsis overflow-hidden max-w-56"
                            href={blog ?? "#"}>
                            {blog}
                        </Link>) : (<span className="dark:opacity-60 opacity-100">No Blog Found</span>)}
                </div>
                <div className="flex items-center gap-2">
                    <RiTwitterXLine className="text-xl" />
                    <p className='dark:opacity-60 opacity-80'>{twitter ?? <span>Twitter Not Updated Yet</span>}</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsFillBuildingsFill className="text-xl" />
                    <p className='dark:opacity-60 opacity-80'>{company ?? <span className='dark:opacity-60 opacity-80'>Not Available</span>}</p>
                </div>
            </div>
        </div>
    )
}

export default DevProfileMainSection;