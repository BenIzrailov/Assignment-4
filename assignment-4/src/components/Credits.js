import React, { Component } from 'react';
import AccountBalance from './AccountBalance';


class Credits extends Component {
    constructor () {
        super()
        this.state = {
          newCredit: {
            description: '',
            amount: ''
          },
          redirect: false
        }
      }

makeList = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
        return <li key={credit.id}>{credit.amount}{' '}{credit.description}{' '}{credit.date.substr(0,10)}</li>
      }) 
}

// handleChange = (e) => {
//     const newDescription = {...this.state.}
//     this.props.mockLogIn(this.state.user)
// }
    
    render() {
        const { credits, addCredit } = this.props
        return (
            <div>
                <center><h1>Credits</h1>
                <ul>{this.makeList()}</ul>
                {/* <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Description">Description</label>
            <input type="text" name="Description" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="Amount" name="Amount" />
          </div>
          <button>Add Credit</button>
        </form> */}
                </center>
            </div>
        );
    }
}

export default Credits;