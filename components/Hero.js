import React from "react"
import Image from "next/image"
import profile from "../public/images/Mehdi.png"

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
                    </div>
                </div>
                <div className="animate-fade-in-left flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <div className="flex flex-col">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                        <a className="inline-block px-6 py-2.5 mt-2 text-center bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"target="_blank" rel="noreferrer" href="files/Mehdi's%20Resume.pdf">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}