'use client';

import { useTheme } from "next-themes";
import { TbMoonStars } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme();

    function toggleTheme() {
        if (resolvedTheme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    return (
        <div className="flex items-center gap-2">
            {resolvedTheme === 'light' ?
                <button className="flex items-center gap-2" onClick={toggleTheme}>
                    <span className="text-base px-2 py-1">Light</span>
                    <IoSunnyOutline className="text-2xl" />
                </button> : <button className="flex items-center gap-2" onClick={toggleTheme}>
                    <span className="text-base px-2 py-1">Dark</span>
                    <TbMoonStars className="text-2xl" />
                </button>}
        </div>
    )
}