import React, { Component } from 'react'
import Loading from './Loading';



class Home extends Component {

    
    render() {
        document.title="Home";
        return (
            <div>
                <h1>I am from Home</h1>
                <Loading></Loading>
            </div>
        )
    }
}

export default Home
