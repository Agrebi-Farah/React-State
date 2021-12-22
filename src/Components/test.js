import React, { Component } from 'react'

export default class test extends Component { 

    state = { isInvisible: false}

    toggleButton = () => { 
        this.setState({ isInvisible:!this.state.isInvisible })
    }
alretButton = (props) => { alert(props.condition)}
   fruit = ['apple','orange','kiwi'] ;
    

    render() {
        return (
            <div>
                <button onClick={this.toggleButton}>{this.state.isInvisible ? 'click to hide list' : 'click to show list'}</button>
                {this.state.isInvisible? <ul>{this.fruit.map((el,i) => ( 
                    <li key={i}>{el}</li>
                )) }
                    
                    </ul> : <h2>there is nothing to display</h2>}
            
            </div>
        )
    }
}
