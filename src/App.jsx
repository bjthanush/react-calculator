import * as React from 'react';
import Button from "./component/Button";
import ButtonBase from "./component/ButtonBase";
import Wrap from "./component/Wrap"
import Screen from "./component/Screen"
import Basic from './component/Basic';
import HeaderBar from "./component/HeaderBar"

import Demo from './component/Demo';

const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div>
    <HeaderBar />
    <Basic>
      <Wrap>
        <Screen />
        <ButtonBase>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBase>
      </Wrap>
    </Basic>
    </div>
  );
}

export default App;