
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from '../components/Hello';

export default class HomeView extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { loaded: false };
    }
    
    componentDidMount() {
        this.setState({ loaded: true });
    }
    
    render() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>Home {loading}</h2>
            <Hello name="world" />
            <div><Link to="/about">About</Link></div>
        </div>;
    }
}
