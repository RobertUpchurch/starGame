import React from 'react'

import './ShootingStar.css'

class ShootingStar extends React.Component {
    constructor(props) {
        super(props);
        this.shootStar = this.shootStar.bind(this);
        this.state = {
            x: (Math.random() * -100),
            y:  (Math.random() * 100),
            intervalId: null
        }
    }

    componentDidMount() {
        var intervalId = setInterval(this.shootStar, .01);

        this.setState({intervalId: intervalId});
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    shootStar() {
        var newx = this.state.x + 1;
        var newy = this.state.y + 1;

        if (newx < 100 && newy < 100) {
            this.setState({
                x: newx,
                y: newy 
            })
        }
        else {
            this.setState({
                x: (Math.random() * -100),
                y:  (Math.random() * 100)
            })
        }
    }


    render() {
        return (
            <div className="ShootingStar" style={{top: this.state.y + '%', left: this.state.x + '%' }}></div>
        )
    }
}

export default ShootingStar;