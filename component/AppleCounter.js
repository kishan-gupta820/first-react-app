import Button from "./Button"
import RightArrow from "../img/next.png"
import LeftArrow from "../img/back.png"
import Counter from "./Counter"
import "../css/style.css"
import { useState } from "react"

const AppleCounter = () => {
    const totalAppleCount = 10
    const [rightAppleCount, setRightApplecount] = useState(0)
    const [leftAppleCount, setLeftApplecount] = useState(totalAppleCount - rightAppleCount)

    const leftClick = () => {
        if(rightAppleCount > 0){
            setRightApplecount(rightAppleCount -1)
            setLeftApplecount(leftAppleCount + 1)
        }
    }
    const rightClick = () => {
        if(leftAppleCount > 0){
            setRightApplecount(rightAppleCount + 1)
            setLeftApplecount(leftAppleCount - 1)
        }
    }

  return (
    <section>
        <Counter AppleCount={leftAppleCount} BasketName="basket 1"/>
        <Button imgUrl={LeftArrow} ButtonName="Left Arrow" ClickName={leftClick}/>
        <Button imgUrl={RightArrow} ButtonName="right Arrow" ClickName={rightClick}/>
        <Counter AppleCount={rightAppleCount} BasketName="basket 2"/>
    </section>
  )
}

export default AppleCounter