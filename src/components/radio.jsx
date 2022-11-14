import React from "react"

class RadioElem extends React.Component {
    state = {
        checked: "false"
    }

    handleClick = () => {
        this.setState({ checked: "true" }, ()=>{
            this.props.val(this.props.name)
        })
    }

    render() {
        return (
            <p>
                <label>
                    <input
                        name="with-gap"
                        type="radio"
                        defaultChecked={this.props.checked}
                        onClick={this.handleClick}
                    />
                    <span>{this.props.name}</span>
                </label>
            </p>
        )
    }
}

export default RadioElem
