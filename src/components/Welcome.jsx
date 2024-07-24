import welcome1 from "../assets/welcome1.png";
import welcome2 from "../assets/welcome2.png";
import welcome3 from "../assets/welcome3.png";
import welcome4 from "../assets/welcome4.png";
import welcome5 from "../assets/welcome5.png";
import welcome6 from "../assets/welcome6.png";
import Image from "./Image";
import MintNowButton from "./MintNowButton";

const welcomeImages = [
  welcome1,
  welcome2,
  welcome3,
  welcome4,
  welcome5,
  welcome6,
];

const Welcome = () => {
  return (
    <>
      <section
        id="welcome"
        className="lg:flex justify-between text-[#fff] p-2 sm:px-8 sm:py-8"
      >
        <div className="lg:w-[59%] flex justify-between flex-col">
          <div>
            <h1 className=" text-[1.5rem] sm:text-[3.5rem] ml-[0px] md:ml-[-35px] font-extrabold">
              WELCOME TO CHARLIE&apos;S NFT&apos;s
            </h1>
            <p className=" mt-4 sm:mt-16 text-lg sm:text-2xl sm:text-justify font-bold">
              Dive into the whimsical world of Charlie with a limited edition
              10,000 NFT collection! CHARLIE is a collection of 10,000 Charlie
              Unicorn NFT&apos;s. Each Charlie is a completely unique digital
              collectible living on the Ethereum blockchain. Rarity tiers add a
              playful dynamic, making certain NFT&apos;s highly sought after by
              collectors.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-extrabold text-[#b32d2d]">
              FAIR DISTRIBUTION
            </h2>
            <h2 className="text-2xl font-bold"> BONDING CURVES ARE A PONZI!</h2>
            <p className="mt-5 text-lg sm:text-2xl text-justify font-bold">
              {" "}
              There are no bonding curves here! Buying a Charlie costs $250.
              There are no price tiers, Charlie&apos;s cost the same for
              everyone!
            </p>
          </div>
          <h1 className="text-[2rem] md:text-[5rem] mt-[40px] text-center  sm:mt-[20px]">
            MINT NOW
          </h1>
          <MintNowButton/>
        </div>
        <div className="mt-6 lg:w-[38%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-16 justify-center">
            {welcomeImages.map((img, index) => (
              <Image
                key={index}
                relativeSrc={img}
                alt={`Charlie NFT ${index + 1}`}
                divClassName="relative flex items-center justify-center m-auto"
                className="w-[100px] h-[100px] rounded-full sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px]"
                absoluteClassName="w-[140%] max-w-[150%] top-[-16%]"
              />
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xl font-bold">
              NOTE: 50 Charlie&apos;s are being withheld from the sale. These
              will be used for giveaways.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
