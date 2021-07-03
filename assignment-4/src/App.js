import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios';


    class App extends Component {

      mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
      }
      constructor() {
        super();
    
        this.state = {
          accountBalance: 0,
          currentUser: {
            userName: 'Ben_Izra',
            memberSince: '11/25/95',
          },
          credits: [],
          debits: [],
          total: 0,
          credTotal: 0,
          debTotal:0
        }
      }

      //fetch api and add to credits/debits array
      componentDidMount = async () => {

        let linktoCred = 'https://moj-api.herokuapp.com/credits';
        let linktoDeb = 'https://moj-api.herokuapp.com/debits';
        let responseCred = await axios.get(linktoCred);
        let responseDeb = await axios.get(linktoDeb);
        this.setState({credits: responseCred.data, debits: responseDeb.data});
      }

      // updateCredits = (credits) => {
      //   // let totalcredits = this.state.credits
      //   let totalcred = this.state.credTotal
      //   totalcredits.forEach(credit => {
      //     totalcred = totalcred + credits.amount
      //   })
      //   this.setState({accountBalance: totalcred})
      //   // let totaldebits = this.state.debits
      //   // let totaldeb = this.state.debTotal
      //   // totaldebits.forEach(debit => {
      //   //   totaldeb = totaldeb + debit.amount
      //   // })
      //   let totalBalance = this.state.total
      //   totalBalance = totalcred - totaldeb
      //   let number = 100;
      //   this.setState({accountBalance: number})
      // }

      // addCredit = (e)
      
      //add components to be able to be used in respective components
      render() {

        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
        const UserProfileComponent = () => (
          <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
        const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={this.state.credits} />)
        const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={this.state.debits} />)

        //route to components
        return (
          <Router>
            <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Credits" component={CreditsComponent}/>
            <Route exact path="/Debits" component={DebitsComponent}/>
            </div>
            </Router>
        );
      }
    }
    
    
    export default App;

      

    

