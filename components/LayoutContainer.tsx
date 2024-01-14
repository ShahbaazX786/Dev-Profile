'use client';

import React from 'react';
import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode;
};

function LayoutContainer({ children }: Props) {
    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    )
}

export default LayoutContainer;