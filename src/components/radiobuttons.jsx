import React from "react"
import RadioElem from "./radio"

class Ratio extends React.Component {
    state = {
        position: "All"
    }

    currentElem = (elem)=>{
        switch(elem){
            case 'Movies': 
                elem = 'movie';
                break; 
            case 'Games':
                elem = 'game';
                break;
            case 'Series':
                elem = 'series'
                break;
            default:
                elem = 'All'
        }
        this.setState({position: elem}, ()=>{
            this.props.rad(this.state.position)
        })
    }

    render() {
        return (
            <form action="#" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <RadioElem name={'All'} checked={true} val={this.currentElem}/>
                <RadioElem name={'Movies'} val={this.currentElem}/>
                <RadioElem name={'Games'} val={this.currentElem}/>
                <RadioElem name={'Series'} val={this.currentElem}/>
            </form>
        )
    }
}

export default Ratio
