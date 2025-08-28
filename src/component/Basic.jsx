import { createContext, useState } from "react"

export const Basic = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <Basic.Provider value={providerValue}>
      {children}
    </Basic.Provider>
  )
}

export default CalcProvider