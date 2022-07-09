import Link from "next/link"
import React from "react"
import ThemeSwitch from './ThemeSwitch'

export default function Navigation() {
        return(
            <div className="sticky top-0 z-20 py-2 bg-slate-100 md:py-6 md:mb-6 dark:bg-black">
                <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                    <Link href="/">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Mehdi
                        </a>
                    </Link>
                    <div className="flex items-end">
                        <Link href="/projects">
                            <a className="font-medium py-1 mr-4 transition-colors hover:text-yellow-500">
                                Projects
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="font-medium py-1 transition-colors hover:text-yellow-500">
                                Contact
                            </a>
                        </Link>

                        <ThemeSwitch />
                    </div>

                </div>
            </div>
        )
}