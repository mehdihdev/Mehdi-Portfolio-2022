import React from "react";
import Script from "next/script"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p id="year-footer">&copy; Mehdi Hussain <Script
                        id="show-year"
                        dangerouslySetInnerHTML={{
                            __html: `document.getElementById('year-footer').innerHTML = "&copy; Mehdi Hussain " + (new Date().getFullYear()) + ". All Rights Reserved."`,
                        }}
                        /></p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                    <a
                            href="files/Mehdi's%20Resume.pdf"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                        <a
                            href="https://twitter.com/mehdihdev"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://linkedin.com/in/mehdihdev"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/mehdihdev"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}