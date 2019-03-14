import React from 'react'
import Earth from '../images/earth1.png'
import './Globe.css'

class Globe extends React.Component {
    constructor(props) {
        super(props);
        this.rotateGlobe = this.rotateGlobe.bind(this);
        this.state = {
            degrees: 260,
            intervalId: null
        }
    }

    componentDidMount() {
        var intervalId = setInterval(this.rotateGlobe, 1);

        this.setState({intervalId: intervalId});
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    rotateGlobe() {
        var newDegrees = this.state.degrees + .007

        if (newDegrees < 360) {
            this.setState({
                degrees: newDegrees
            })
        }
        else {
            this.setState({
                degrees: 0
            })
        }
    }


    render() {

        return (
                    <img id="globe" src={Earth} alt="earth" style={{transform: 'rotate(' + this.state.degrees +'deg)'}} />
        )
    }
}

export default Globe;