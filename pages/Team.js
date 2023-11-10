import React, { useState } from "react";
import styles from "../styles";
import TeamCard from "../components/TeamCard";

const teamData1 = [
  {
    id: "team11",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team12",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team13",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team14",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team15",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team16",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team17",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team18",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team19",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team20",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team41",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team42",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team43",
    name: "Deepak Kumar",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  // Add more team members here
];

const teamData2 = [
  {
    id: "team21",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team22",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team23",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team24",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team25",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team26",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team27",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team28",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team29",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team30",
    name: "shutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team31",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team32",
    name: "Ashutosh Singh",
    role: "CEO",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  // Add more team members here
];

const Team = () => {
  const [view, setView] = useState("22-23"); // Initialize view with a string, not a subtraction operation.

  return (
    <>
      <div
        className={`${styles.paddings} relative z-10`}
        style={{
          background: "linear-gradient(to bottom, #3498db, #ffffff)",
          borderRadius: "10px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="bg-gray-100 py-8"
          style={{
            background: "linear-gradient(to right, #ff5733, #f2b134)",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="container mx-auto">
            <div className="p-5">
              <h1 className="text-3xl font-semibold pl-4">
                Meet Our Exceptional Team: The Driving Force Behind Our Success
              </h1>
            </div>
            <div className="p-5">
              <button
                className="w-2/12 bg-yellow-500 mx-4 hover:bg-red-600"
                onClick={() => setView("22-23")}
              >
                22-23
              </button>
              <button
                className="w-2/12 bg-yellow-500 mx-3 hover:bg-red-600"
                onClick={() => setView("23-24")}
              >
                23-24
              </button>
            </div>

            {view === "22-23" && (
              <div className="flex flex-wrap p-5">
                {teamData1.map((member, index) => (
                  <TeamCard key={index.id} {...member} />
                ))}
              </div>
            )}
            {view === "23-24" && (
              <div className="flex flex-wrap p-5">
                {teamData2.map((member, index) => (
                  <TeamCard key={index.id} {...member} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
