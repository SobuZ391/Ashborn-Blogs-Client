import React from 'react';

const Team = () => {
    return (
        <section className="py-6 bg-gray-50 border-y-2 rounded-xl my-4 container mx-auto text-gray-00">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Meet Our Team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The Creative Minds Behind Our Blog</h1>
                <div className="flex flex-row flex-wrap justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800">
                        <img alt="" className="self-center object-cover w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://img.freepik.com/free-photo/serious-successful-young-businessman-standing-office-looking-camera_1163-4223.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Jane Doe</p>
                            <p>Content Writer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a href="#" title="Email" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                            <a href="#" title="Twitter" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.132813 41.800781 2.339844 41.800781 C 1.546875 41.800781 0.769531 41.773438 -0.0117188 41.71875 C 4.496094 44.460938 9.988281 46.058594 15.914063 46.058594 C 34.628906 46.058594 45.359375 30.390625 45.359375 14.375 C 45.359375 14.050781 45.355469 13.730469 45.34375 13.414063 C 47.238281 12.320313 48.839844 10.898438 50.0625 10.4375 Z "></path>
                                </svg>
                            </a>
                            <a href="#" title="LinkedIn" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H21C22.1046 2 23 2.89543 23 4V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4C1 2.89543 1.89543 2 3 2ZM21 4L12 13L3 4H21ZM7 18H10V10H7V18ZM8.5 8.5C9.32843 8.5 10 7.82843 10 7C10 6.17157 9.32843 5.5 8.5 5.5C7.67157 5.5 7 6.17157 7 7C7 7.82843 7.67157 8.5 8.5 8.5ZM14 18H17V14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5V18Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Second Team Member */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800">
                        <img alt="" className="self-center object-cover w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">John Smith</p>
                            <p>Editor</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a href="#" title="Email" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                            <a href="#" title="Twitter" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.132813 41.800781 2.339844 41.800781 C 1.546875 41.800781 0.769531 41.773438 -0.0117188 41.71875 C 4.496094 44.460938 9.988281 46.058594 15.914063 46.058594 C 34.628906 46.058594 45.359375 30.390625 45.359375 14.375 C 45.359375 14.050781 45.355469 13.730469 45.34375 13.414063 C 47.238281 12.320313 48.839844 10.898438 50.0625 10.4375 Z "></path>
                                </svg>
                            </a>
                            <a href="#" title="LinkedIn" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H21C22.1046 2 23 2.89543 23 4V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4C1 2.89543 1.89543 2 3 2ZM21 4L12 13L3 4H21ZM7 18H10V10H7V18ZM8.5 8.5C9.32843 8.5 10 7.82843 10 7C10 6.17157 9.32843 5.5 8.5 5.5C7.67157 5.5 7 6.17157 7 7C7 7.82843 7.67157 8.5 8.5 8.5ZM14 18H17V14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5V18Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Third Team Member */}
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-white text-gray-800">
                        <img alt="" className="self-center object-cover w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://www.bhmpics.com/downloads/employee-images/18.employee_2.jpg" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Alice Johnson</p>
                            <p>Graphic Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a href="#" title="Email" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                            <a href="#" title="Twitter" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.132813 41.800781 2.339844 41.800781 C 1.546875 41.800781 0.769531 41.773438 -0.0117188 41.71875 C 4.496094 44.460938 9.988281 46.058594 15.914063 46.058594 C 34.628906 46.058594 45.359375 30.390625 45.359375 14.375 C 45.359375 14.050781 45.355469 13.730469 45.34375 13.414063 C 47.238281 12.320313 48.839844 10.898438 50.0625 10.4375 Z "></path>
                                </svg>
                            </a>
                            <a href="#" title="LinkedIn" className="text-gray-700 hover:text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H21C22.1046 2 23 2.89543 23 4V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4C1 2.89543 1.89543 2 3 2ZM21 4L12 13L3 4H21ZM7 18H10V10H7V18ZM8.5 8.5C9.32843 8.5 10 7.82843 10 7C10 6.17157 9.32843 5.5 8.5 5.5C7.67157 5.5 7 6.17157 7 7C7 7.82843 7.67157 8.5 8.5 8.5ZM14 18H17V14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5V18Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
