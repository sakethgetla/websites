import React,{ Component } from 'react';

class Header extends Component {

    state = {
        active:'active',
        // keywords:''
    }

    // inputChange(event){
    //     const value = event.target.value === '' ? 'active' : 'non-active';
    //     this.setState({
    //         active: value,
    //         keywords: event.target.value
    //     })
    // }
    
    render(){
    
        // let style = {
        //     background: 'red'
        // }

        // if(this.state.keywords != ''){
        //     style.background = 'blue'
        // } else {
        //     style.background = 'red'
        // }
        
        return(
            <header className={this.state.active}>
                <div className="logo">Logo</div>
                <input
                    onChange={ this.props.keywords }
                />   
            </header>
        )
    }
}


export default Header;