import theSpecs from "../assets/thespecs.png"; // Replace with actual image path
import Image from "./Image";

const Specs = () => {
  return (
    <section
      id="specs"
      className=" flex flex-col lg:flex-row justify-between items-center  text-white p-2 py-8 sm:px-8 sm:py-28"
    >
      <div className="w-[100%]">
        <h2 className="text-3xl text-center sm:text-left font-extrabold text-[#b32d2d]">
          THE SPECS
        </h2>
        <p className="mt-4 text-lg sm:text-2xl sm:text-justify font-bold">
          Each Charlie is unique and programmatically generated from over 100
          possible traits. All Charlie's are unique and dope but some traits are
          rarer than others.
        </p>
        <p className="mt-4 text-lg sm:text-2xl sm:text-justify font-bold">
          Each Charlie is stored as an ERC-721 token on the Ethereum blockchain
          and hosted on our IPFS. Purchasing a Charlie costs $250.
        </p>
      </div>
      <div className="w-[100%] mt-[5rem]  md:mt-[5rem] lg:mt-0 flex items-center justify-center">
        <Image
          relativeSrc={theSpecs}
          alt={`Charlie Specs`}
          divClassName="relative flex items-center justify-center "
          className="mx-auto my-4 max-w-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] "
          absoluteClassName="w-[140%] max-w-[150%] top-[-16%]"
        />
      </div>
    </section>
  );
};

export default Specs;
