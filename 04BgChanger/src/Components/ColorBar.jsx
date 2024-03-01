import Btn from "./Btn";

function ColorBar({ setBG }) {
  return (
    <div className="color-plates bg-black w-3/4 max-{800px} text-white absolute bottom-7 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow-lg flex gap-4 flex-wrap justify-between">
      <Btn setBGG={setBG} />
    </div>
  );
}

export default ColorBar;
