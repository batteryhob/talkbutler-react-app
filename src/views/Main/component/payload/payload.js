
import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames'

import Text from './component/text';
import TextList from './component/textList';
import Emoticon from './component/emoticon';
import Wait from './component/wait';
import Image from './component/image';
import Reservation from './component/reservation';
import Oa from './component/oa';

class Payload extends PureComponent {

    get computedSame() {
        try {
            if(typeof this.props.payload.same_writer === 'undefined')        
                return false
            return this.props.payload.same_writer;
        } catch (err) {      
            return false;
        }
    }

    get computedWriter() {
        try {
            return this.props.payload.writer.user_tp;
        } catch (err) {
            return '';
        }
    }

    get computedDate() {
        try {

            if (this.props.payload.timestamp === '')
                return '';

            let timestamp = this.props.payload.timestamp;
            let date = new Date(timestamp);

            let mHour = date.getHours();
            let mMin = date.getMinutes();

            if (mMin < 10)
                mMin = "0" + mMin;

            if (mHour < 12 && mHour >= 0) {
                return "오전 " + mHour + ":" + mMin;
            } else if (mHour > 12 && mHour < 24) {
                return "오후 " + (mHour - 12) + ":" + mMin;
            }else{
                return ''
            }
        } catch (err) {
            return '';
        }
    }

    get computedType () {
        try {

            //1대1문의는 text로 반환
            if (this.props.payload.message.type === 'form-inquiry')
            {
                return 'text';
            }

            return this.props.payload.message.type;
        } catch (err) {
            return '';
        }
    }

    get computedTitle() {
        try {

            if (typeof this.props.payload.message.title !== 'undefined' && this.props.payload.message.title !== '' && this.props.payload.message.title !== null)
                return this.props.payload.message.title;
            else
                return '';

        } catch (err) {
            return '';
        }
    }

    get computedMessage() {
        try {
            return this.props.payload.message;
        } catch (err) {
            return {};
        }
    }

    get computedMessageList() {
        try {
            return this.props.payload.message.msg_list;
        } catch (err) {
            return [];
        }
    }

    get computedMessageListLastIdx() {
        try {
            return this.props.payload.message.msg_list.length - 2;
        } catch (err) {
            return 0;
        }
    }

    get computedMessageLink() {
        try {
            let link = null;
            let mlist = this.props.payload.message.msg_list;                
            if(mlist[mlist.length - 1].type === 'link')
            {
                link = mlist[mlist.length - 1];
            }
            return link;
        } catch (err) {
            return null;
        }
    }
    
    get reservationCnt () {
        try {
            return this.props.payload.message.swipe_list.length;
        } catch (err) {
            return 0;
        }
    }

    render(){

        /*
        * 말풍선 style
        */
        let payLoadClass = classNames({
            'msg' : this.computedType !== 'date',
            'date' : this.computedType === 'date',
            'selectList' : this.computedType === 'menu',
            'mine' : this.computedWriter === 'member' && this.computedType !== 'menu',
            'butler' : (this.computedWriter === 'tour' && this.computedType !== 'menu') || (this.computedWriter === 'system' && this.computedType !== 'menu') || (this.computedWriter === 'system' && this.computedType === 'group')
        });

        /*
        * 프로필
        */
        let profile;
        if(
            (this.computedWriter === 'system' || this.computedWriter === 'tour') && 
            this.computedType !== 'menu' && this.computedSame === false
        )
        {
            profile = <div className="profile">
                        <img src="http://openimage.interpark.com/tourpark/tour_ui/butlerChat/icons_butler.png" alt="톡집사프로필"/>
                      </div>  
        }  

        /*
        * 메세지
        */
        let message;
        //일반텍스트
        if(this.computedType === 'text' || this.computedType === 'notice' || this.computedType === 'reserved')
        {
            message = <Text title={this.computedTitle} message={this.computedMessage} date={this.computedDate} link={null}/>
        }
        //텍스트리스트
        if(this.computedType === 'group' || this.computedType === 'commit')
        {
            message = <TextList messageList={this.computedMessageList} date={this.computedDate}/>
        }
        //이모티콘
        if(this.computedType === 'img' && this.computedWriter !== 'member')
        {
            message = <Emoticon message={this.computedMessage} />
        }
        //이미지
        if(this.computedType === 'img' && this.computedWriter === 'member')
        {
            message = <Image message={this.computedMessage} />
        }
        //웨이팅
        if(this.computedType === 'wait')
        {
            message = <Wait message={this.computedMessage} />
        }
        //oa
        if(this.computedType === 'menu')
        {
            message = <Oa message={this.computedMessage} />
        }
        //예약리스트
        if(this.computedType === 'group' && this.reservationCnt > 0)
        {
            message = <Fragment>
                        <TextList messageList={this.computedMessageList} date={this.computedDate}/>
                        <Reservation message={this.computedMessage} />
                      </Fragment>
        }
        //날짜구분선
        if(this.computedType === 'date')
        {
            message = <span>{this.computedMessage.body}</span>
        }

        return(
            <div className={payLoadClass} >
                {profile}
                {message}
            </div>
        );
    }    
}

export default Payload;