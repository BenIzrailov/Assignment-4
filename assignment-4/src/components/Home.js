import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

    
    class Home extends Component {
      render() {
        document.body.style = 'background: #90ee90;';
        return (
            <div>
              <center><img src="https://img.freepik.com/free-vector/cartoon-retro-bank-building-courthouse-with-columns-illustration-isolated-white_53562-8133.jpg?size=626&ext=jpg" alt="bank"/>
              <h1 style= {{color:'white'}}>Bank of React</h1>
              <Link to="/Login" style = {{marginRight:"1rem"}} >
                Login
                </Link>
              <Link to="/userProfile">User Profile</Link>

              <AccountBalance accountBalance={this.props.accountBalance}/></center>
            </div>
        );
      }
    }
    
    export default Home;