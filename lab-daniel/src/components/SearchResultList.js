import React from 'react';

class SearchResultList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Sport 1</li>
                    <li>Sport 2</li>
                    <li>Sport 3</li>
                </ul>
            </div>
        )
    }
}

module.exports = SearchResultList;