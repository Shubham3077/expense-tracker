import './Card.css'

function Card (props) {
    const classes = "card " + props.className;   //leave a space after classname here card.
    // this above syntax is adding other classes to the card class as a string
    return <div className={classes}>{props.children}</div>
}

export default Card;