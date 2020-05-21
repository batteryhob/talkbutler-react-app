
import React, { PureComponent } from 'react';
import PayloadList from './payload/payloadList';

class Screen extends PureComponent {

    render() {
  
        const chatScreenStyle = { height: '592px' }

        return (
            <div className="row chatScreen" style={chatScreenStyle}>
                <div className="screenWrapper">
                    <PayloadList/>
                </div>
            </div>
        );
    }
}

export default Screen;