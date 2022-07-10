import React from "react"
import Image from "next/image"
import profile from "../public/images/Mehdi.png"
import Link from 'next/link'

export default function Hero() {
    return(
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="animate-fade-in-down lg:px-4 lg:mt-12">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey, I&apos;m Mehdi.
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I&apos;m an ambitious high-school Developer + Entrepreneur from the heart of the Research Triangle Park in North Carolina.
                        </p>
                        <p className="mb-4">
                            I&apos;m currently learning and working with technologies such as AI/ML, Javascript, Python, and Swift. I&apos;m currently learning technologies like Blockchain, Crypto, and languages such as Java & C++. 
                        </p>
                        <p className="mb-4">
                            I&apos;ve worked on several projects such as <span className="font-bold">NC Hack, IABAT iOS</span>, and <span className="font-bold">Nonprofit Foundation</span>. 
                        </p>
                        <p className="mb-4">

                        <Link href="/files/Mehdi's%20Resume.pdf">
                            <a className="font-medium py-1 transition-colors hover:text-yellow-500">
                                Check out my resume here.
                            </a>
                        </Link>
                        </p>

                    </div>
                </div>
                <div className="animate-fade-in-left flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}