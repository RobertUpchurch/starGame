import React from 'react'
import Star from './Star'
import ShootingStar from './ShootingStar'

import './Space.css'
class Space extends React.Component {
    constructor(props) {
        super(props);
        this.createSpaceStars = this.createSpaceStars.bind(this);
        this.createSpaceShootingStars = this.createSpaceShootingStars.bind(this);
    }

    

    createSpaceStars() {
        var Stars = [];
        for (var i = 0; i < 4000; i++) {
            Stars.push(<Star key={i}/>)
        }

        return Stars
    }

    createSpaceShootingStars() {
        var ShootingStars = [];
        for (var i = 0; i < 20; i++) {
            ShootingStars.push(<ShootingStar key={i}/>)
        }

        return ShootingStars
    }

    render () {
        return (
            <div className="Space">
                {this.createSpaceStars()} 
            </div>
        );
    } 
}

export default Space;