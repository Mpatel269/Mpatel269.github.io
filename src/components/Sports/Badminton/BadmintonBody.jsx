import React from 'react';

const BadmintonBody = () => {
    return(
        <section class="relative pt-16 bg-blueGray-50">
            <div class="flex flex-wrap w-full mb-4 p-4">
                <div class="w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">PEPA Badminton Club</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
            </div>

            <div class="container mx-auto">
            <div class="flex flex-wrap items-center">
                <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-900">
                    <img alt="..." src="https://images.unsplash.com/photo-1617696616247-4016daad0df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNodXR0bGVjb2NrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                    <blockquote class="relative p-8 mb-4">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon points="-30,95 583,95 583,65" class="text-blue-900 fill-current"></polygon>
                    </svg>

                    <p class="text-md font-light mt-2 text-white">
                    PEPA Badminton Club was established in 2017. It's open to all
                     students of the English programme who would like to play either 
                     competitively or just socially. It's a great way to meet new people 
                     and also keep fit. Hope to see you there! 
                    </p>
                    <p class="text-md font-bold font-light mt-2 text-white">
                        Additional Information:
                    </p>
                    <p class="text-md font-light mt-2 text-white">
                    You will need to wear appropriate indoor shoes and bring a racket - 
                    if you don't own a racket, there are rackets available for hire at 
                    the venue (50Kc)
                    </p><br/>
                    <p class="text-md font-light mt-2 text-white">
                    Keep in touch by joining our Whatsapp group 
                    below where timings are posted each week before the session.
                    </p>
                    </blockquote>
                </div>
                </div>

                <div class="w-full md:w-6/12 px-4">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col mt-4">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-clock text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Time:</h6>
                        <p class="mb-4 text-blueGray-500">
                        Every Sunday - timing depends on availability of courts (usually 1-3pm) 
                        </p>
                        </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-coins text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Cost:</h6>
                        <p class="mb-4 text-blueGray-500">
                            Sessions typically cost 100Kc for 2 hours 
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col min-w-0 mt-4">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-map-marker-alt text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Location:</h6>
                        <p class="mb-4 text-blueGray-500">
                        MILO racket centre in Centrum (<a class="text-blue-500" href="https://goo.gl/maps/hdN7XNEYxM4cDBw5A" target="_blank" rel="noopener noreferrer">open in Maps</a>)
                        </p>
                        </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-walking text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Travel:</h6>
                        <p class="mb-4 text-blueGray-500">
                        The venue can be reached from Neredin via the tram (to Palackeho) and a short 10 minute walk
                        </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        </section>

    )
};

export default BadmintonBody;