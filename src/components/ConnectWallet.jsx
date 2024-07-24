/* eslint-disable react/prop-types */

function ConnectWallet({ className = "" }) {
  return (
    <button
      type="button"
      className={`rounded-md bg-sky-500 px-3 py-2 text-2xl font-bold  text-[#fff] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  ${className}`}
    >
      WalletConnect
    </button>
  );
}

export default ConnectWallet;
