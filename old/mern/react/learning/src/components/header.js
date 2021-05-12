import React, { Component } from 'react';

class Header extends Component {

    state = {
        title:'title',
        inputs:'',
        count:0
    }
    inputChange(event){
        //console.log('changed');
        //console.log(event.target.value);
        this.setState({
            inputs: event.target.value
        })
        this.props.getInputs(event)
    }
    addOne(){
        this.setState((state, props) => ({
            count: state.count +1
        }))
        console.log('add one');
    }

    render(){
        return (
            <header>
                <div className="logo" onClick={(event)=> console.log('i was clicked')}>Header</div>
                <input
                    onChange={(event) => this.inputChange(event)}
                />
                <div>inputs are: {this.state.inputs}</div>
                <br/>
                <div onClick = {()=> this.addOne()}> +=1 </div>
                <div>{this.state.count}</div>

            </header>
        )
    }
}

//const Header = () => {
//    return (
//        <header>
//            <div>Header</div>
//            <input/>
//        </header>
//    )
//}

// default only exports Header funtion
export default Header;
