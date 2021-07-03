import React, { Component } from 'react';
import AccountBalance from './AccountBalance';


class Debits extends Component {
    constructor () {
        super()
        this.state = {
          newDebit: {
            description: '',
            amount: ''
          },
          redirect: false
        }
      }

makeList = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
        return <li key={debit.id}>{debit.amount}{' '}{debit.description}{' '}{debit.date.substr(0,10)}</li>
      }) 
}

// handleChange = (e) => {
//     const newDescription = {...this.state.}
//     this.props.mockLogIn(this.state.user)
// }
    
    render() {
        const { debits, addDebit } = this.props
        return (
            <div>
                <center><h1>Debits</h1>
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

export default Debits;