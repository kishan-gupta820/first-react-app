

const Counter = ({AppleCount, BasketName}) => {
    return (
        <div className="box-content">
            <h2>{BasketName}</h2>
             <span>Apples {AppleCount}</span>
        </div>
    )
}

export default Counter