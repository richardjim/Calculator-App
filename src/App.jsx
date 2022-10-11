import './App.css';
import Wrapper from './component/Wrapper'
import Screen from './component/Screen'
import ButtonBox from './component/ButtonBox'
import Button from './component/Button'
import CalProvider from './context/CalcContext'

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function App() {
  return (
      <CalProvider> 
        <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, index) =>
            <Button
              key={index}
              value={btn} />)}
        </ButtonBox>
      </Wrapper></CalProvider>
     
  )
}
