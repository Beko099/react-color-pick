export const Circle = (props) => {
    const handleClick = (event) => {
        props.changeSetColor(event.target.textContent)
    }
    return (
        <div className={`circle color-${props.count}`} onClick={handleClick}>
            {props.count}
        </div>
    )
} 
