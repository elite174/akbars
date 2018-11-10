import React from 'react';
import './competitors.css';

class Competitors extends React.Component{
    state = {
        competitors: []
    }

    fetchCompetitors = () =>{
        fetch('')
    }

    componentDidMount(){
        this.fetchCompetitors();    
    }

    render(){
        return <div className='competitors'>
        </div>
    }
}

export default Competitors;