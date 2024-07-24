import charlie from "../assets/charlie.png"; // Replace with actual images
import Image from "./Image";
import morty from "../assets/morty.png";
import felix from "../assets/felix.png";
import welcome3 from "../assets/welcome3.png";
import welcome5 from "../assets/welcome5.png";
import welcome6 from "../assets/welcome6.png";

const teamMembers = [
  { name: "Charlie", img: charlie },
  { name: "Huey", img: welcome5 },
  { name: "Felix", img: felix },
  { name: "Morty", img: morty },
  { name: "Wojack", img: welcome3 },
  { name: "Hefner", img: welcome6 },
];

const Team = () => {
  return (
    <section id="team" className=" text-[#dadada]  sm:p-8">
      <h1 className="text-center text-[4rem] sm:text-[5rem] md:text-[10rem]  font-bold">
        The Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <Image
              relativeSrc={member.img}
              alt={member.name}
              divClassName="relative flex items-center justify-center "
              className="w-[200px] h-[200px]"
              absoluteClassName="w-[150%] max-w-[150%]"
            />
            <h3 className="mt-10 text-lg sm:text-3xl font-semibold ">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
