import { useContext } from 'react';
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {

  const className = {
    '=': ' equals',
    'x': 'opt',
    '+': 'opt',
    '/': 'opt',
    '-': 'opt',
  }
  return className[btn];
}
const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext)

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }
  const resetClick = () => {
    setCalc({sign:'', num : 0, res : 0})
  }
  const handleClickBtn = () => {
    const numberString = value.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0){
      numberValue === '0'
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num : numberValue
    })
  }
  const percenClick = () => {
    setCalc({
      num : (calc.num / 100),
      res : (calc.res / 100),
      sign : ''
    })
  }
  const equalClick = () => {
    if(calc.res && calc.num) {
    const math = (a, b, sign) => {
      const results ={
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        'x' : (a,b) => a * b,
        '/' : (a,b) => a / b,
         '%' : (a,b) => a % b,
        '+-' : (a,b) => a +- b
      }
      return results[sign](a,b)
    }
    setCalc({
      res: math(calc.res, calc.num, calc.sign),
      sign:'',
      num: 0
    })
  }
  }
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign : ''
    })
  }
  const signClick = () => {
    setCalc({
      sign : value,
      res : !calc.res && calc.num ? calc.num : calc.res,
      num : 0
    })
  } 
  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'C' : resetClick,
      '=' : equalClick,
      '-' : signClick,
      '+' : signClick,
      'x' : signClick,
      '/' : signClick,
      '%' : percenClick,
      '+-' : invertClick
    }
   if(results[value]){
      return results[value]()
   } else {
     return handleClickBtn()
   }
  }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}
export default Button;