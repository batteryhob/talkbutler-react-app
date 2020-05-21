
import React, { PureComponent } from 'react';

class Image extends PureComponent {

    constructor(props){
        super(props)
        this.state ={
            defaultImg: 'http://openimage.interpark.com/tourpark/tour_ui/butlerChat/emoticon/01.png'
        }
    }
    
    render() {
        let { message } = this.props
        let url = message.url ? message.url : this.state.defaultImg;

        return (
            <div className="msgWrap">
                <div className="chatWrap">
                    <span className="img">
                        <a href={ url } target="_blank">
                            <img src={ url } alt="img"></img>                            
                        </a>
                    </span>
                </div>
                <time>{this.props.date}</time>
            </div>
        );
    }
}

export default Image;