import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        };
    };

    handleChange(val){ 
        this.setState({userInput: val})
    };

    palindromeCheck(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('').reverse().join('');

        if (forwards === backwards){
            this.setState({palindrome: 'True!'})
        } else {
            this.setState({palindrome: 'Not a palindrome'})
        }
    };

    render (){
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.palindromeCheck(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Is a Palindrome? {this.state.palindrome} </span>
            </div>
        )
    }
};
