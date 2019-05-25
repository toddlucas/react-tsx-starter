
import * as React from 'react';
// import { Helmet } from 'react-helmet';

export interface MainProps {
    content: string;
    min: boolean;
}

export default class MainPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        // Add helmet to control title at the view level
        // const helmet = Helmet.rewind();
        const suffix = this.props.min ? '.min' : '';

        return (
            <html lang="en-us">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/*
                    {helmet.meta.toComponent()}
                    {helmet.title.toComponent()}
                    {helmet.link.toComponent()}
                    */}
                    <title>Starter</title>

                    <link rel="shortcut icon" href="/favicon.ico" />
                    {/*<link href={`/styles/app${suffix}.css`} rel="stylesheet" media="screen" />*/}
                    <link href={`/styles/site${suffix}.css`} rel="stylesheet" media="screen" />
                </head>
                <body>
                    <div id="body" dangerouslySetInnerHTML={{__html: this.props.content}}/>
                    <script src={`/scripts/vendor${suffix}.js`}></script>
                    <script src={`/scripts/app${suffix}.js`}></script>
                    <script src={`/scripts/site${suffix}.js`}></script>
                </body>
            </html>
        );
    }
}
