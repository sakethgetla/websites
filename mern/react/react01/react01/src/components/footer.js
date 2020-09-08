import React,{ Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)

        console.log(this.props)
    }

    render(){
        return(
            <footer>
                { this.props.footerText }
            </footer>
        )
    }
}

export default Footer;