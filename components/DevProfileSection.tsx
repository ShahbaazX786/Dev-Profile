import { formatThis } from '@/utils/dateFormatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    avatar:string,
    username:string,
    joinedAt:string,
    profileUrl:string
}

const DevProfileSection = ({ avatar, username, joinedAt, profileUrl }: Props) => {
    return (
        <div className="flex gap-4">
            <Image src={avatar ?? ""} width={200} height={200} priority alt="user-profile-avatar" className="h-24 w-24 rounded-full ring-green-400 ring-2" />
            <div className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                    <h1>{username}</h1>
                    <Link href={`https://github.com/${profileUrl}`} className="text-blue-500 hover:underline text-sm transition-all">@{profileUrl}</Link>
                </div>
                <p>Joined : {formatThis(joinedAt)}</p>
            </div>
        </div>
    )
}

export default DevProfileSection;