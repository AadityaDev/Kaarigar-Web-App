import AppHeader from "../components/AppHeader"
import ContactSales from "../components/ContactSales"
import TopHeader from "../components/TopHeader"

export default function HomePage(){
    return(
        <div>
             {/* <AppHeader /> */}
            <TopHeader />
            {/* <div class="w-full min-h-screen bg-gray-900 relative">
                <div class="absolute left-0 top-0 h-screen w-full overflow-hidden">
                    <div id="tsparticles">
                        <canvas class="tsparticles-canvas-el" width="1024" height="512">
                            </canvas>
                    </div>
                </div>
                <div class="max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40">
                    <h1 class="text-white text-4xl lg:text-7xl font-bold text-center">What our customers says about us?</h1>
                    <p class="text-white text-gray-400 text-center text-xl mt-12">Don’t just take our word for it — see what leaders in digital are saying</p>
                    <div class="mx-auto pt-24">
                        <div class="w-full flex flex-wrap justify-around">
                            <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105">
                                <div class="h-64 z-20"><img src="/images/case-1.webp" alt="Proident pariatur est." class="h-full w-full object-cover overflow-hidden rounded" width="400" height="300"/>
                                </div>
                            <div class="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative"><p class="uppercase text-sm text-gray-700 text-center pb-1">Case study</p><p class="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105">
                            <div class="h-64 z-20"><img src="/images/case-2.webp" alt="Proident pariatur est." class="h-full w-full object-cover overflow-hidden rounded" width="400" height="300" />
                            </div>
                            <div class="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative"><p class="uppercase text-sm text-gray-700 text-center pb-1">Case study</p><p class="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit ipsum esse.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105">
                            <div class="h-64 z-20"><img src="/images/case-3.webp" alt="Proident pariatur est." class="h-full w-full object-cover overflow-hidden rounded" width="400" height="300" />
                            </div>
            <div class="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative"><p class="uppercase text-sm text-gray-700 text-center pb-1">Case study</p><p class="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit excepteur esse.</p></div></div><span class="-mt-8 pb-12 lg:mt-4 flex items-center text-xl text-indigo-400 cursor-pointer z-30 hover:text-indigo-600">See all case studies<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-6 w-6 fill-current ml-2"><path d="M18.719 6.781L17.28 8.22 24.063 15H4v2h20.063l-6.782 6.781 1.438 1.438 8.5-8.5.687-.719-.687-.719z"></path></svg></span></div></div></div></div> */}
            <ContactSales />
        </div>
    )
}