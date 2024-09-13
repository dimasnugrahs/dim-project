import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const SpinWheel = () => {
  const data = [
    { option: "Hadiah 1" },
    { option: "Hadiah 2" },
    { option: "Hadiah 3" },
    { option: "Hadiah 4" },
    { option: "Hadiah 5" },
    { option: "Hadiah 6" },
    { option: "Hadiah 7" },
    { option: "Hadiah 8" },
    { option: "Hadiah 9" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  console.log({ mustSpin, prizeNumber });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={["#f2f2f2"]}
        outerBorderWidth={[10]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[1]}
        fontSize={15}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#F22B35",
          "#F99533",
          "#24CA69",
          "#514E50",
          "#46AEFF",
          "#9145B7",
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      <button onClick={handleSpinClick} style={{ marginTop: "20px" }}>
        Spin the Wheel!
      </button>
      <div>{!mustSpin ? data[prizeNumber].option : "0"}</div>
    </div>
  );
};

export default SpinWheel;
