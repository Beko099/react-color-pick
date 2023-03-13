
export const Wrapper = (props) => {
    return (
        <div className={`bg color-${props.color}`}>
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    )
}





















    // let num = 0
    // for (let i = 0; i<children.length; i++) {
    //     num = children[0].props.colorPick
    // }
    // console.log(children[0].props.colorPick.colorNum)
    // if (num.colorNum === '') {
    //     console.log('asdasiodjsaoidjasod')
    // } else {
    //     console.log('213213123213123')
    // }

    // setTimeout(() => {
    //     children[0].props.colorPick.colorNum = num.colorNum
    // }, 2000)
