import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import useContracts from "../hooks/useContracts";

function MintNowButton() {
  const [count, setCount] = useState(0);
  const { mintNFT } = useContracts();
  
  const increaseCount = () => {
    setCount((pre) => pre + 1);
  };

  const decreaseCount = () => {
    if (count === 0) return;
    setCount((pre) => pre - 1);
  };

  const handleMint = async () => {
    const res = await mintNFT(count);
    console.log(res);
    setCount(0);
  };

  return (
    <div className=" flex flex-col sm:flex-row flex_col_responsive_btn w-[100%] justify-center gap-0 sm:gap-8 items-center ">
      <div className="flex items-center justify-center gap-[10px] my-[20px] sm:my-[50px] xl:my-6 bg-[#E748C6] w-[200px] h-[35px] px-2 py-6 sm:py-9  rounded-lg">
        <button onClick={decreaseCount} className="">
          <LuMinus className="text-2xl" />
        </button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="bg-white
                  text-center
                   text-black min-w-[70px] h-[30px] text-2xl font-semibold flex items-center justify-center py-6 sm:py-8"
        />

        <button onClick={increaseCount}>
          <IoAdd className="text-2xl" />
        </button>
      </div>
      <button
        className=" h-min w-[150px] px-2 py-3 sm:py-5 bg-[#E748C6] rounded-md text-xl"
        onClick={handleMint}
      >
        MINT NOW
      </button>
    </div>
  );
}

export default MintNowButton;
