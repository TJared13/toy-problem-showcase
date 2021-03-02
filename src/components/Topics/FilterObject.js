import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            festivals: [
                {
                    name: 'EDCLV',
                    genre: 'all',
                    timesAttended: 7,
                    organizer: 'Pasquale Rotella',
                    location: 'Las Vegas',
                },
                {
                    name: 'Lost Lands',
                    genre: 'BASS IN YO FACE',
                    organizer: 'Excision'
                },
                {
                    name: 'Tomorrowland',
                    genre: 'Trance, House, and various',
                    epicLevel: 'Off the Charts',
                    location: 'Belgium'
                }
            ],

            userInput: '',
            filteredFestivals: [],
        }
    };

    handleChange(val){
        this.setState({userInput: val})
    };

    filterFestivals(elem){
        let festivals = this.state.festivals;
        let filteredFestivals = [];

        for (let i = 0; i < festivals.length; i++){
            if (festivals[i].hasOwnProperty(elem)){
                filteredFestivals.push(festivals[i]);
            }
        }
        this.setState({filteredFestivals: filteredFestivals})
    };

    render (){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.festivals)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={ () => this.filterFestivals(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredFestivals, null, 10)}</span>
            </div>
        )
    }
};
