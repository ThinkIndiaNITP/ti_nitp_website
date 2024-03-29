"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings}  glassmorphism m-4 py-9  mt-24  relative z-10`}
  >
    {/* <div className="gradient-02 z-0" /> */}
    
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <p className="font-normal text-2xl leading-3 text-green-600 hover:text-green-600 cursor-pointer pb-2"></p>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl text-orange-600 lg:leading-10 leading-9">About Us</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 text-justify">Think India is a manifestation of the vision to connect the students across India's educational Institutes to a nationalistic thought process and to harness their collective potentials towards the aim of national reconstruction. We, as a pan-India organization, have been striving to bring together the best talents & minds of the country and infuse in them a nation-first attitude, to develop in them a solution-oriented thinking process, and to inspire young India to serve the society.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full shadow-2xl" src="/galleryImages/about2.jpg" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src="/galleryImages/about2.jpg" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="/galleryImages/about2.jpg" alt="people discussing on board" />
                </div>
            </div>

            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600 mt-6">Founded</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 text-justify">Think India Student Chapter, NITP was established on 28th February, 2023 and that day marks
an auspicious culmination in conversion of TECTONIX NITP into THINK INDIA STUDENT
CHAPTER NITP by group of our brilliant seniors with their intellect and unwavering dedication
under the guidance of our esteemed PI Dr. Shiv Shankar Choudhary.</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600 mt-6">Transformation</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 text-justify">With profound gratitude, we want to inform everyone that 28th February, 2023 marks an auspicious culmination of TECTONIX NITP Club into Think India Student Chapter NIT Patna.A Memorandum of Understanding (MoU) was signed between NIT Patna and Think India Organisation under the kind presence of Registrar Dr. Asit Narayan, Dean Alumni Affairs NITP Dr. Sanjay Kumar & Dean Student Welfare NITP Dr. Prakash Chandra along with Dr. Shiv Shankar Choudhary and Dr. Saroj Sarangi to finalise the establishment. With this we embark on the continuous journey of bringing together all the branches at a single platform.</p>
                </div>
                <div className="sm:block hidden ">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600 mt-6">Memorandum of understanding</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 text-justify">It gives us immense pleasure to announce that an MoU has
been signed between Think India and National Institute of
Technology Patna in the kind presence of Dr. Asit Narayan
(Registrar NIT Patna), Dr. Sanjay Kumar (Dean Alumni Affairs), Dr.
Prakash Chandra (Dean Student Welfare), Dr. Shiv Shankar
Choudhary, Dr. Saroj Sarangi, Sh. Manish Kumar (Think India

Bihar Convenor) and Ram Kumar (Think India Bihar Co-
Convenor) .We believe that this MoU will further help the

students of NIT Patna in their academic as well as co-curricular
pursuit.</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4 text-justify">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600 mt-6">Memorandum of Understanding</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It gives us immense pleasure to announce that an MoU has
been signed between Think India and National Institute of
Technology Patna in the kind presence of Dr. Asit Narayan
(Registrar NIT Patna), Dr. Sanjay Kumar (Dean Alumni Affairs), Dr.
Prakash Chandra (Dean Student Welfare), Dr. Shiv Shankar
Choudhary, Dr. Saroj Sarangi, Sh. Manish Kumar (Think India

Bihar Convenor) and Ram Kumar (Think India Bihar Co-
Convenor) .We believe that this MoU will further help the

students of NIT Patna in their academic as well as co-curricular
pursuit.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16 text-justify">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-green-600">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">Think India embodies a visionary quest to unite students across its educational landscape in a shared nationalistic ethos, channelling the collective potential for the noble pursuit of national reconstruction within the panoramic endeavour, we, as a pan – India organisation, tirelessly endeavour to converge the brightest minds instilling in them a resolute “Nation First” attitude. Our mission is to cultivate solution-oriented thinking, igniting a spirit that inspires the youth if India to selflessly serve society.</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">Embark on an exhilarating odyssey with the THINK INDIA SC NITP – a journey that unfolds the boundless opportunities for honing your skills across diverse domains. This club is dedicated to elevate your prowessin technology management and soft skills converging under a singular platform where ideas and knowledge converge with excellence. Our primary aim is to illuminate the path for brilliant minds to flourish.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">A powerhouse of diverse talents and shared goals, our teams thrive on innovation and creativity. Each member contributes a unique perspective, fostering a collaborative environment where ideas flourish.</p>
                            </div>
                        </div>

                        {/* <!-- Events Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600">Events</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">Discover diverse and engaging events – from thought-provoking conferences to cultural festivals. Connect, grow, and immerse yourself in a world of possibilities. Unforgettable experiences await.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-green-600">Contact Us</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">Connect effortlessly with us. Have questions, suggestions, or just want to say hello? Reach out, and we'll respond promptly. Your feedback is invaluable, and we look forward to hearing from you. Get in touch today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      {/* <motion.img
        variants={fadeIn("up", "tween", 0.2, 1)}
        src="/thinkinidalogo.png"
        // alt="arrow down"
        className="w-[40px] h-[40px] object-contain "
      /> */}
    
  </section>
);

export default About;
