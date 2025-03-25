"use client";
import React from 'react'
import { ArrowTop } from './icons/arrow-top';

export function GoToTopPage() {
    const handleScrollToTop = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='cursor-pointer' onClick={handleScrollToTop}>
            <ArrowTop />
            <span className="sr-only">Go to top</span>
        </div>
    );
}
