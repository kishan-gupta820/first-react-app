

 const Button = ({imgUrl, ButtonName, ClickName}) => {
  return (
    <button title={ButtonName} onClick={ClickName}>
        <img src={imgUrl} alt="left Arrow image"/>
    </button>
  )
}

export default Button