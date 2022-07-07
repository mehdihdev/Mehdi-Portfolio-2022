export default function Contact() {
    return(
        <div className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto animate-fade-in-down">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">Contact Me</h1>
            <div class="flex flex-col min-h-screen">
                    <p class="mt-3">Email me at <span className="hover:underline text-yellow-500">mehdi@mehdi.us</span> or message me here:</p>
                    <form action="/api/message" method="POST">
                    <div class="grid gap-6 sm:grid-cols-2">
                        <div class="relative z-0 pt-2">
                        <input type="text" name="name" className="w-full appearance-none border-2 rounded-lg border-gray-500 bg-transparent py-2 px-2.5 text-sm text-gray-900  dark:text-white dark:bg-slate-900" placeholder="Name" />
                        </div>
                        <div class="relative z-0 pt-2">
                        <input type="text" name="email" className="w-full appearance-none border-2 rounded-lg border-gray-500 bg-transparent py-2 px-2.5 text-sm text-gray-900 dark:bg-slate-900 dark:text-white" placeholder="Email" />
                        </div>
                        <div class="relative z-0 col-span-2">
                        <textarea name="message" rows="5" className="w-full appearance-none border-2 rounded-lg border-gray-500 bg-transparent py-2 px-2.5 text-sm text-gray-900 dark:bg-slate-900 dark:text-white" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                        <button type="submit" class="mt-5 rounded-full bg-indigo-500 px-10 py-2 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}