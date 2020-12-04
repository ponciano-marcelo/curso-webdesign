import React from 'react'

class ButtonMob extends React.Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.handleClick(event.target.value);
    }

    render() {
        return(
            <div className="buttonmob" onClick={this.handleClick}>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}

export default ButtonMob