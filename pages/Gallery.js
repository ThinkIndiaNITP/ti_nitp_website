import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../constants";
const Gallery = () => {
  // return (
  //   <>
  //     <section className="glassmorphism mx-auto m-12">
  //       <h1> Gallery</h1>
  //     </section>
  //   </>
  // );

  return (
    <>
      <div className=" mx-auto m-12">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-transparent  font-extrabold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl">
              My Gallery
            </h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      <Link
                        className="flex justify-center items-center bg-orange-600 bg-opacity-40  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click for Full Image
                      </Link>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-orange-600 transition-colors duration-200 text-center"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
