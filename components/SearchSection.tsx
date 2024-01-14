import React from 'react'

import { IoMdSearch } from "react-icons/io";

type Props = {
    value:string,
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

function SearchSection(props : Props) {



    return (
        <form onSubmit={props.onSubmit} className='flex items-center gap-2 w-full shadow-md focus-within:ring-2 focus-within:ring-slate-700 dark:focus-within:ring-gray-200 p-2 rounded-lg dark:bg-slate-800 bg-white'>
            <section className='flex items-center w-full h-full gap-2'>
                <IoMdSearch className='text-2xl text-blue-500' />
                <input type="text" className='w-full h-10 bg-inherit outline-none px-1 text-sm' placeholder='Search Github Username' value={props.value} onChange={props.onChange}/>
            </section>
            <button className='rounded-lg bg-blue-600 px-5 py-2 text-white hover:opacity-80 transition-all'>
                Search
            </button>
        </form>
    )
}

export default SearchSection;