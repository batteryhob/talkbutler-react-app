import React,{ Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as socketModule from '../../../../services/sockets'

class ChatInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
      }

    get lengthCheck() {
        let inputlength = this.state.inputValue.length
        if(navigator.userAgent.match(/msie 9.0/i))
            inputlength = inputlength + 1;

        if (inputlength > 0) {
            return true;
        } else {
            return false;
        }
    }

    KeyUp = (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            if(this.state.inputValue.length > 1)
            {
                socketModule.SendText(this.state.inputValue);
                this.setState({
                    inputValue: ''
                });
            }
        }
    }

    KeyCheck = (e) => {
        if (e.target.valuelength > 1000) {
            this.setState({
                inputValue: e.target.value.substring(0, 1000)
            });
        }else{
            this.setState({
                inputValue: e.target.value
            });
        }
    }

    SendText = () =>{        

        if(this.state.inputValue.length > 1)
        {
            socketModule.SendText(this.state.inputValue);
            this.setState({
                inputValue: ''
            });
        }

    }

    FocusChat = () =>{
        //lengthFlag = true; 
        $('.chattingTalk').focus();
    }

    render() {

        let descDiv
        let descDivStyle = { 'color':'#666', 'fontSize':'13px', 'width':'210px', }
        let { chatAble } = this.props;

        let chatDesc = "메뉴선택 아이콘을 클릭하면 이용가능한 메뉴가 나타납니다."
        if(chatAble)
            chatDesc = "메세지를 입력하세요."

        if(navigator.userAgent.match(/msie 9.0/i))
        {
            descDiv =  <div onClick={ this.FocusChat } style={descDivStyle}>
                         {chatDesc}
                       </div>
        }

        return (
            <div className="chatInputsWrapper" disabled={chatAble === false ? true : false}>
                {descDiv}
                <span className="col">
                    <label>
                        <textarea className="chattingTalk" name="chattingTalk" rows="5" cols="80" placeholder={chatDesc} disabled={!navigator.userAgent.match(/msie 9.0/i) && chatAble === false ? true : false}
                                onKeyUp={ this.KeyUp } onChange={ this.KeyCheck } maxLength="1000" value={this.state.inputValue}>                                
                        </textarea>
                    </label>
                </span>
                <span className="col submitButtonCol">
                    <button type="button" className="chatSend" onClick={ this.SendText } disabled={(this.lengthCheck === false || chatAble === false) ? true : false}>
                        <span>전송</span>
                    </button>
                </span>
            </div>          
        );
    }
}


const mapStateToProps = state => ({
    chatAble: state.payloads.chatAble
})

export default connect(
    mapStateToProps,
    undefined
)(ChatInput)
