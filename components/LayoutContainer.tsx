'use client';

import React from 'react';
import { ThemeProvider } from "next-themes";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

type Props = {
    children: React.ReactNode;
};

function LayoutContainer({ children }: Props) {
    const queryClient = new QueryClient()

    return (
        <ThemeProvider attribute="class">
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default LayoutContainer;