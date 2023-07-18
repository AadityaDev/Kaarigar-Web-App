export default function AppHeader({

}) {
    return(
    <header>
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-24">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12" src="logo.svg" alt="logo" width="48" height="48" />
                        </div>

                        <div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-4"><a href="/" class="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium">Features</a><a href="/" class="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium">Testimonials</a><a href="/" class="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium">Pricing</a><a href="/" class="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium">Blog</a></div></div>
                    </div>

                    <div class="hidden md:block"><div class="ml-4 flex items-center md:ml-6"><button type="button" class="font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-0 mr-2">Contact sales</button><button type="button" class="font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 border-0 mr-2">Log in</button><button type="button" class="font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700">Get started</button></div></div>

                    <div class="-mr-2 flex md:hidden"><button type="button" aria-controls="mobile-menu" aria-expanded="false" class="p-2 text-gray-400"><span class="sr-only">Open menu</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div>
                </div>
            </div>    
        </nav>
    </header>)
}