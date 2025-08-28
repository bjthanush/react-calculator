import { useContext } from "react";
import { Basic } from "./Basic";
import { UseFitText } from "./UseFitText";

const Screen = () => {
  const { calc } = useContext(Basic);
  const { ref } = UseFitText(70, 20);

  return (
    <div className="screen" ref={ref}>
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
