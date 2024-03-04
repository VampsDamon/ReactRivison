import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
function App() {
  const [amount,setAmount]=useState(0);
  const [amountConverted, setAmountConverted] = useState(0);
  const [from,setFrom]=useState("ada");
  const [to,setTo]=useState("aed");

const currencyInfo = useCurrencyInfo
(from);

const swap=()=>{
  setTo(from);
  setFrom(to);
  setAmount(amountConverted);
  setAmountConverted(amount)

}


const convert=()=>{
setAmountConverted(amount * currencyInfo[to]);
}

  const options = Object.keys(currencyInfo)
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://w.forfun.com/fetch/9f/9f2d0e3840ab815c6807d791aa58eb68.jpeg?w=1470&r=0.5625')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  labl="From"
                  amount={amount}
                  onAmountChange={(val) => {
                    setAmount(val);
                  }}
                  options={options}
                  currency={from}
                  onCurrencyChange={(val) => {
                    setFrom(val);
                  }}
                />
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 uppercase -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={() => swap()}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    labl="TO"
                    amount={amountConverted}
                    onAmountChange={(val) => {
                      setAmountConverted(val);
                    }}
                    options={options}
                    currency={to}
                    onCurrencyChange={(val) => {
                      setTo(val);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 uppercase font-semibold text-white px-4 py-3 rounded-lg"
            
                >
                  Convert <span className="text-yellow-500">{from}</span> to{" "}
                  <span className="text-red-500">{to}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
