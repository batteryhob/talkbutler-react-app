
import React, { PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import Payload from './payload';

class PayloadList extends PureComponent {
    render(){

        let { payloadList } = this.props

        if(navigator.userAgent.match(/msie 9.0/i))
        {
            return(         
                <div className="stream" >
                    {  
                        payloadList.map((el, i) => {
                            if(typeof el.msg_id != 'undefined')
                                return (<Payload payload={el} key={el.msg_id} />);
                            else
                                return (<Payload payload={el} key={el._id} />);                       
                        })          
                    }
                </div>
            );
        }else{
            return(         
                <div className="stream" >
                    <ReactCSSTransitionGroup
                    transitionName="list"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}>
                    {  
                        payloadList.map((el, i) => {
                            if(typeof el.msg_id != 'undefined')
                                return (<Payload payload={el} key={el.msg_id} />);
                            else
                                return (<Payload payload={el} key={el._id} />);                       
                        })                    
                    }
                    </ReactCSSTransitionGroup>
                </div>
            );        
        }
    }    
}

const mapStateToProps = state => ({
    payloadList: state.payloads.payloadList
}) 

export default connect(
    mapStateToProps,
    undefined
)(PayloadList)