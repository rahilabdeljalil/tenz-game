export default function  Die(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"}
    return (
        <button
          style={style}
          onClick={props.holdDice}
        >
            {props.value}
        </button>
    )

}