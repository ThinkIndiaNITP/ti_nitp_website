import React, { useState } from "react";
import styles from "../styles";
import TeamCard from "../components/TeamCard";

const teamData1 = [
  {
    id: "team11",
    name: "Harsh Kumar",
    role: "PRESIDENT",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team12",
    name: "Shwet Ketu",
    role: "VICE PRESIDENT",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team13",
    name: "Ravi Raj Ranjan",
    role: "TREASURER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team14",
    name: "Mahi",
    role: "SECRETARY",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team15",
    name: "Ravi Raj",
    role: "JOINT TREASURER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team16",
    name: "Aditya Kumar",
    role: "JOINT SECRETARY",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team17",
    name: "Ravi Ranjan",
    role: "EVENT HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team18",
    name: "Suraj Kumar",
    role: "MEDIA HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team19",
    name: "Shashi Ranjan",
    role: "PR Head",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team20",
    name: "Richa",
    role: "CONTENT HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team41",
    name: "Sneha Saumya",
    role: "EVENT COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team42",
    name: "Yash Singh",
    role: "PR COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team43",
    name: "Atul Kumar",
    role: "WEB COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team44",
    name: "Abhijeet Kumar",
    role: "TECHNICAL HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team45",
    name: "Suraj Sinha",
    role: "TECHNICAL COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team46",
    name: "Atul Kumar",
    role: "WEB COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  // Add more team members here
];

const teamData2 = [
  {
    id: "team21",
    name: "Anish Kumar",
    role: "PRESIDENT",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team22",
    name: "Mayank Kumar",
    role: "VICE-PRESIDENT",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team23",
    name: "Shailendra Yadav",
    role: "TREASURER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team24",
    name: "Abhishek Kumar",
    role: "JOINT TREASURER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team25",
    name: "Prakhar Krishna",
    role: "CORRESPONDING SECRETARY",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team26",
    name: "Priya Kanaujia",
    role: "RECORDING SECRETARY",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team27",
    name: "Aditya Jaiswal",
    role: "EVENT HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team28",
    name: "Komal Kumari",
    role: "EVENT COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team29",
    name: "Aman Sinha",
    role: "PR HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team30",
    name: "Pankaj Kumar",
    role: "PR COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team31",
    name: "Sandeep Singh Yadav",
    role: "PR COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team32",
    name: "Akash Saurav",
    role: "TECHNICAL COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team47",
    name: "Suraj Mishra",
    role: "TECHNICAL COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team48",
    name: "Mahtab Alam",
    role: "MEDIA HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team49",
    name: "Aisha Raj",
    role: "MEDIA COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team50",
    name: "Ritika Kumari",
    role: "CONTENT HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team51",
    name: "Suraj Kumar",
    role: "DESIGN HEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team52",
    name: "Sonu Kumar",
    role: "DESIGN COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team53",
    name: "Arun Singh",
    role: "WEB LEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team54",
    name: "Ashutosh Singh",
    role: "WEB CO-LEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team55",
    name: "Akash Saurav",
    role: "WEB CO-LEAD",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team56",
    name: "Md. Shakir Khan",
    role: "SPONSORSHIP COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team57",
    name: "Aman Anand",
    role: "SPONSORSHIP COORDINATOR",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team57",
    name: "Saurav Kumar",
    role: "SENIOR MEMBER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team57",
    name: "Deepak Kumar",
    role: "SENIOR MEMBER",
    imageSrc:
      "https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg",
  },
  {
    id: "team57",
    name: "Munquab Anwer",
    role: "SENIOR MEMBER",
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
