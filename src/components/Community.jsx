// src/components/Community.jsx
import community1 from "../assets/community1.png";
import community2 from "../assets/community2.png";
import community3 from "../assets/community3.png";
import community4 from "../assets/community4.png";
import Image from "./Image";

const Community = () => {
  const features = [
    {
      img: community1,
      title: "10,000 provably rare Charlie tokens.",
    },
    {
      img: community2,
      title: "Fair launch and fair distribution: All Charlie's cost $250",
    },
    {
      img: community3,
      title:
        "Ownership and commercial usage rights given to the consumer over their NFT",
    },
    {
      img: community4,
      title: "Gain exclusive benefits through holding a Charlie NFT",
    },
  ];

  return (
    <section id="community" className="text-white  p-2  sm:py-12 sm:px-8 ">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-5xl font-bold mb-8">
          WELCOME TO THE COMMUNITY
        </h2>
        <p className="mb-12  sm:text-left text-lg sm:text-2xl font-bold">
          When you buy a Charlie, you&apos;re not just buying some random JPEG,
          you&apos;re purchasing a historic and rare piece of artwork that has
          been hand-crafted for the Charlie Unicorn project. By holding a
          Charlie NFT you will also gain early access to our animated video
          series and other benefits that will be announced at a later time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                relativeSrc={feature.img}
                alt={`Community feature ${index + 1}`}
                divClassName="relative flex items-center justify-center"
                className="w-[200px] h-[200px] mb-4"
                absoluteClassName="w-[140%] max-w-[160%] top-[-20%]"
              />
              <p className="text-2xl text-center font-bold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
