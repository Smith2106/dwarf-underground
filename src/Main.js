import React, { Component } from 'react';

import Article from './Article';
import Ad from './Ad';
import OtherArticles from './OtherArticles';

class Main extends Component {
    render() {
        return (
            <main className="expanded row">
                <Article />
                <Ad />
                <OtherArticles />
            </main>
        );
    }
}

export default Main;