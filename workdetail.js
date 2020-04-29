import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WorkDetail extends Component {


    state = {
        workDetail: null,
    }

    render(){
        return(
            <WebView
            source={{uri: 'https://www.yahoo.co.jp/'}}
            style={{marginTop: 20}}
            onLoad={this._onLoad}
            onLoadEnd={this._onLoadEnd}
            onLoadStart={this._onLoadStart}
            />
        )
    }

    _onLoad() {
        console.log('onLoad');
    }
    _onLoadEnd() {
        console.log('onLoadEnd');
    }
    _onLoadStart() {
        console.log('onLoadStart');
    }
}    

export default WorkDetail;