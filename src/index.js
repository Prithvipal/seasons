import React from 'react'
import ReactDOM from 'react-dom'
 

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat: null, errMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({errMessage: err.message})
            }
        );
    }
    render(){
        if (this.state.lat){
            return <div>Latitude: {this.state.lat} </div> 
        } else if (this.state.errMessage){
            return <div>Error: {this.state.errMessage} </div> 
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))