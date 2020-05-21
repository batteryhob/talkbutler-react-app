import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';

import { setFirstMsgId, unshiftPayload } from '../../../redux/actions/payloadTypes'

import * as apiModule from '../../../services/apis'

import $ from 'jquery';

class Prev extends PureComponent {

    GetChat = () => {

      const { roomId , firstMsgId } = this.props

      //room_id, mem_no, msg_id, iv
      apiModule.GetChat(roomId, firstMsgId, window.mytalk).then((data) => {

        if (!data.result) {
            return
        }

        let payloadList = [];
        if(data.response.msg_list != null && data.response.msg_list.length >= 1)
        {
           data.response.msg_list.reverse();
           data.response.msg_list.forEach(payload => {              
              //notice & event & comment type은 받지 않는다.
              if (payload.message.type === 'notice'||
                  payload.message.type === 'event'||
                  payload.message.type === 'comment') {
                return;
              }
              //메세지푸쉬
              payloadList.push(payload)
           });
           this.props.UnshiftPayload(payloadList)
           this.ScrollUp();
        }else{
            //이전내역이 없을 경우
            this.props.SetFirstMsgId('');
        }
      });
    }

    ScrollUp = () => {
        var $chat = $('#chat');
        if (!$chat.length) {
            return;
        }
        var $screen = $chat.find('.chatScreen');
        $screen.scrollTop(0);
    }

    render() {
        const { firstMsgId } = this.props

        if (firstMsgId !== '') {
            return (
                <div className="row chatPrev">
                    <div className="chatPrevWrapper">
                        <button type="button" className="prevButton" onClick={ this.GetChat }>
                            <span>이전대화 보기</span>
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row chatPrev">
                    <div className="chatPrevWrapper">
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    roomId: state.payloads.roomId,
    firstMsgId: state.payloads.firstMsgId
})

const mapDispatchToProps = (dispatch) => ({
    SetFirstMsgId: (roomId) => dispatch(setFirstMsgId(roomId)),
    UnshiftPayload: (payload) => dispatch(unshiftPayload(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Prev)
