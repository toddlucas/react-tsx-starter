
import * as React from 'react';

interface AboutState {
    loaded: boolean;
}

export default class AboutView extends React.Component<{}, AboutState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    render() {
        const loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>About {loading}</h2>
            <p>
                This project includes a working example of React, React Router, and TypeScript.
                It is <a href="https://github.com/toddlucas/react-tsx-starter">hosted on Github</a>.
            </p>
        </div>;
    }
}
