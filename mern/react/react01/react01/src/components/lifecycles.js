import React, { Component } from 'react';


class Lifecycles extends Component {
    constructor(props){
        super(props)

        this.state = {name:'Steve'}
        console.log('1- constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('2- getDerivedStateFromProps')
        if(state.name === 'RON'){
            return {
                name:'Milhouse'
            };
        }
        return null
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        let age = 20;
        return age;
    }


    shouldComponentUpdate(nextProps, nextState){
        //console.log('x - shouldComponentUpdate');
        if(nextState.name === 'Francis'){
            return false
        }
        return true
    }

    render(){
        console.log('3- render')
        return(
            <>
                Lifecycles
                <br/>
                { this.state.name}
                
                <div onClick={()=> this.setState({name:'RON'})}>
                    CLICK TO CHANGE
                </div>
            </>
        )
    }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('x componentDidUpdate');
        console.log(prevState)
        console.log(this.state)
        console.log(snapshot)
    }

    componentDidMount(){
        console.log('4- componentDidMount');
        setTimeout(()=>{
            // go to server fetch info
            console.log('Fetched info....')
        },5000)
    }

    componentWillUnmount(){
        console.log('x - componentWillUnmount')
    }

}

export default Lifecycles;