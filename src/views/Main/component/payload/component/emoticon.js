
import React, { PureComponent } from 'react';

class Emoticon extends PureComponent {
    
    constructor(props){
        super(props)
        this.state ={
            defaultImg: 'http://openimage.interpark.com/tourpark/tour_ui/butlerChat/emoticon/01.png'
        }
    }
    
    EmoClick = () => {
        console.log("이모티콘클릭");
    }

    render() {
        let { message } = this.props
        let url = message.url ? message.url : this.state.defaultImg;

        return (
            <div className="msgWrap">
                <div className="emoticon" onClick={ this.EmoClick() }>
                    <img src={ url } alt="emoticon" ></img>
                </div>
            </div>
        );
    }
}

export default Emoticon;