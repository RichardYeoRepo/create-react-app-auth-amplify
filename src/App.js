import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Analytics.autoTrack('session', {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    // OPTIONAL, the attributes of the event, you can either pass an object or a function 
    // which allows you to define dynamic attributes
    attributes: {
        attr: 'sessionAttr-custom'
    },
    // when using function
    // attributes: () => {
    //    const attr = somewhere();
    //    return {
    //        myAttr: attr
    //    }
    // },
    // OPTIONAL, the service provider, by default is the Amazon Pinpoint
    provider: 'AWSPinpoint'
});
Analytics.autoTrack('pageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the event name, by default is 'pageView'
  eventName: 'pageView',
  // OPTIONAL, the attributes of the event, you can either pass an object or a function 
  // which allows you to define dynamic attributes
  attributes: {
      attr: 'pageViewAttr-custom'
  },
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // },
  // OPTIONAL, by default is 'multiPageApp'
  // you need to change it to 'SPA' if your app is a single-page app like React
  type: 'SPA',
  // OPTIONAL, the service provider, by default is the Amazon Pinpoint
  provider: 'AWSPinpoint',
  // OPTIONAL, to get the current page url
  getUrl: () => {
      // the default function
      return window.location.origin + window.location.pathname;
  }
});
Analytics.autoTrack('event', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, events you want to track, by default is 'click'
  events: ['click'],
  // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
  // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
  // always put 'data' as the first prefix
  // selectorPrefix: 'data-amplify-analytics-',
  // OPTIONAL, the service provider, by default is the Amazon Pinpoint
  provider: 'AWSPinpoint',
  // OPTIONAL, the default attributes of the event, you can either pass an object or a function 
  // which allows you to define dynamic attributes
  attributes: {
      attr: 'eventAttr-custom'
  }
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // }
});
Analytics.record({
  name: 'RichardStayOnRecord', 
  attributes: {}, 
  metrics: { minutesListened: 30 }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
