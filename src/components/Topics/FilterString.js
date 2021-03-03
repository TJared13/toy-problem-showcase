import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        
        this.state = {
            artists: ['Illenium', 'Seven Lions', 'BTSM', 'Slander', 'Rezz', 'Synymata', 'Excision'],
            userInput: '',
            filteredArtists: [],
        }
    }

    handleChange(val){ 
        this.setState({userInput: val})
    };

    filterArtist(elem){
        let artist = this.state.artists;
        let filteredArtists = [];

        for(let i = 0; i < artist.length; i++){
            if (artist[i].includes(elem)){
                filteredArtists.push(artist[i])
            }
        }
        
        this.setState({filteredArtists: filteredArtists})
    };

    render (){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Artists: {JSON.stringify(this.state.artists)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArtist(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Artists: {JSON.stringify(this.state.filteredArtists)}</span>
            </div>
        )
    }
};
