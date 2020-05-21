
import React, { PureComponent, Fragment } from 'react';
import Text from './text'

class TextList extends PureComponent {

    get computedMessageLink() {
        try {
            let link = null;
            let mlist = this.props.messageList;
            if(mlist[mlist.length - 1].type === 'link')
            {
                link = mlist[mlist.length - 1];
            }
            return link;
        } catch (err) {
            return null;
        }
    }

    render() {
        return (
            <Fragment>
            {
                this.props.messageList.map((message, i) => {                    
                    if((this.props.messageList.length - 2) === i)
                    {  
                        return (<Text title={null} message={message} date={this.props.date} link={ this.computedMessageLink } key={i} />)
                    } 
                    else
                        return (<Text title={null} message={message} date={this.props.date} link={ null } key={i} />)
                })
            }
            </Fragment>
        );
    }
}

export default TextList;