import React, { Component } from 'react';

class Header extends Component {

    inputChange(event){
        console.log('changed');
        console.log(event.target.value);
    }

    render(){
        return (
            <header>
                <div className="logo" onClick={()=> console.log('i was clicked')}>Header</div>
                <input
                    onChange={(event) => this.inputChange(event)}
                />
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
