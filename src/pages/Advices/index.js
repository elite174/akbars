import React from 'react';
import './advices.css';

class Advices extends React.Component {
    state = {
        advices: []
    }

    fetchCompetitors = () => {
        fetch('')
    }

    componentDidMount() {
        this.fetchCompetitors();
    }

    render() {
        return <div className='advices'>
        </div>
    }
}

export default Advices;