import React, { PureComponent } from 'react';

class Wait extends PureComponent {

    WaitClick = () => {
        console.log("대기중클릭");
    }

    render() {

        /*
        * 로더
        */     
        let loader; 
        if(navigator.userAgent.match(/msie 9.0/i))
        {
            loader = <div className="progress">
                        <img src="http://talk-tour.interpark.com/Images/pages/butlerChat/loading.gif" alt="loading..."/>
                     </div>
            
        }else{
            loader = <div className="progress">
                        <i className="icons"></i>
                        <i className="icons"></i>
                        <i className="icons"></i>
                     </div>           
        }
                
        return(
            <div className="msgWrap">
                <div className="chatWrap" onClick={ this.WaitClick }>
                    <pre className="text">{this.props.message.body}</pre>
                    {loader}
                </div>
            </div>
        );       

    }
}

export default Wait;