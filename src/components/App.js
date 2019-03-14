import React from 'react'
import Globe from './Globe'
import Jumbotron from './Jumbotron'
import Space from './Space'
import ScoreBoard from './ScoreBoard'

import '../components/App.css'

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <ScoreBoard />
                <Space />
                <Jumbotron />
                <Globe />
            </div>
        )
    }
}

export default App;