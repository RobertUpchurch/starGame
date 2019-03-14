import React from 'react'
import { connect } from 'react-redux'
import { addPoint } from '../actions'
import './Star.css'

class Star extends React.Component {
    constructor(props){
        super(props);
        this.starType = this.starType.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.state = {
            x: (Math.random() * 115) - 15,
            y:  (Math.random() * 115) - 15,
            size: (Math.random() * 3)
        }
    }

    starType() {
        var rand = Math.random() * 100

        if (rand < 65) {
            return (
                    <div className="starArea" onMouseMove = {this.onMouseMove} style={{top: this.state.y + '%', left: this.state.x + '%' , width: this.state.size, height: this.state.size }} > 
                        <div className="Star StarWhite" style={{ width: this.state.size, height: this.state.size }}/>
                    </div>
            )
        }
        else if (rand < 80) {
            return (
                <div className="starArea" onMouseMove = {this.onMouseMove}style={{top: this.state.y + '%', left: this.state.x + '%' , width: this.state.size, height: this.state.size }} > 
                    <div className="Star StarBlue" style={{ width: this.state.size, height: this.state.size }} />
                </div>
            )
        }
        else if (rand < 95) {
            return (
                <div className="starArea" onMouseMove = {this.onMouseMove} style={{top: this.state.y + '%', left: this.state.x + '%' , width: this.state.size, height: this.state.size }}> 
                    <div className="Star StarPurple" style={{ width: this.state.size, height: this.state.size }} />
                </div>
            )        
        }
        else {
            return (
                <div className="starArea" onMouseMove = {this.onMouseMove} style={{top: this.state.y + '%', left: this.state.x + '%' , width: this.state.size, height: this.state.size }}> 
                    <div className="Star StarYellow" style={{ width: this.state.size, height: this.state.size }} />
                </div>
            )        
        }
    }


    //This will be a good function for disappearing stars
    onMouseMove = (e) => {
            {this.props.addPoint()}
            
            this.setState({
                x: -30,
                y: -30
            })
    }

    render () {
        return (
             this.starType()          
        );
    } 
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { addPoint })(Star);