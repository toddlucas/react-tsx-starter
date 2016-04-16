
import * as React from 'react';
import { Link } from 'react-router';
import Hello from '../components/Hello';

var HomeView = React.createClass({
    getInitialState: function() {
        return { loaded: false };
    },
    
    componentDidMount: function() {
        this.setState({ loaded: true });
    },
    
    render: function() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>HomeView {loading}</h2>
            <Hello name="world" />
            <div><Link to="/about">About</Link></div>
        </div>;
    }
});

export default HomeView;
