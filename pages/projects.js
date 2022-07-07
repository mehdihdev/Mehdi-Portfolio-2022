export default function Projects() {
    return(
        <div className="flex-row max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                        Some projects I'm proud about.
            </h1>
            </div>
            <div className="flex flex-row animate-fade-in-down">
                <div className="mr-7 mt-4">
                    <div className="rounded-lg shadow-lg max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src="images/NC-Hack-Logo.png"/>
                        </a>
                        <div className="p-6 dark:bg-slate-900 rounded-b-lg">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">NC Hack</h5>
                        <p className="text-gray-700 text-base mb-4 dark:text-white">
                            NC Hack is a platform for connecting hackathons to students all around the globe. Made and developed by students in the Triangle.
                        </p>
                            <a href='https://nchack.org' target="_blank" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See More</a>
                        </div>
                    </div>
                </div>
                <div className="mr-7 mt-4">
                <div className="rounded-lg shadow-lg max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="images/NPF-Black.png"/>
                    </a>
                    <div className="p-6 dark:bg-slate-900 rounded-b-lg">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">Nonprofit Foundation</h5>
                    <p className="text-gray-700 text-base mb-4 dark:text-white">
                    providing technology, infrastructure, and strategy to help nonprofits give back with greater impact.
                    </p>
                    <a href='https://nonprofit.foundation' target="_blank" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See More</a>
                    </div>
                </div>
            </div>
            <div className="mr-7 mt-4">
                <div className="rounded-lg shadow-lg max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="images/IABAT-Dark.png"/>
                    </a>
                    <div className="p-6 dark:bg-slate-900 rounded-b-lg">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 dark:text-white">IABAT iOS App</h5>
                    <p className="text-gray-700 text-base mb-4 dark:text-white">
                        A Prayer Times & Events Calendar App for the Islamic Ahlulbayt Association of the Triangle.
                    </p>
                        <a href='https://apps.apple.com/us/app/iabat/id1470669636' target="_blank" className="mb-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">App Store</a>
                        <a href='https://apps.apple.com/us/app/iabat/id1470669636' target="_blank" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GH Repo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}