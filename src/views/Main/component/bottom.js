
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import ChatInput from './chatInput/chatInput';
import MenuPanel from './menu/menuPanel';

class Bottom extends PureComponent {
    
    ChangeImage = (e) => {
        
        //이미지업로드
        if(navigator.userAgent.match(/msie 9.0/i)) {
            var file, img;
            if ((file = e.target.value)) {
                img = new Image();
                img.onload = function () {
                    alert("이미지 업로드 작업")
                };
                img.src = e.target.value;
            }
            return
        }    

        const _URL = window.URL || window.webkitURL;

        if ((file = e.target.files[0])) {

            img = new Image();
            img.onload = () => {
                alert("이미지 업로드 작업")
            };

            img.src = _URL.createObjectURL(file);
        }       

    }

    OpenGuide = () => {
        window.open('http://talk-tour.interpark.com/Guide', 'TalkTourGuide', 'width=890, height=790, toolbar=no, menubar=no, resizable=no, scrollbars=yes').focus();
    }

    CloseChat = () => {
        alert("채팅방 나가기")
    }

    get nomemberFlag(){
        try {
            return window.mytalk.nomember
        } catch (err) {
            return 'N'
        }
    }

    get getMemno(){
        try {
            return window.mytalk.mem_no
        } catch (err) {
            return ''
        }
    }

    get getIv(){
        try {
            return window.mytalk.iv
        } catch (err) {
            return ''
        }
    }

    render() {   

        let { chatAble, roomId } = this.props;
        let nomember = this.nomemberFlag;
        let iv = this.getIv;
        let mem_no = this.getMemno;

        let selection = <div className="menu">
                            <button type="button" className="menuSelectBtn" data-layer="reserveList">
                                    <span>메뉴선택</span>
                            </button>
                          </div>

        if(nomember === 'Y')          
            selection = null;

        return (
            <div className="row chatBottom">
                <div className="inputsWrapper">
                    <form id="chatInput" action="" encType="multipart/form-data" method="post" >
                        <div className="chatMenuWrapper">
                            <div className="menuImgUploadWrapper">
                                {selection}                                
                                <div className="menu">
                                    <div className="fileBtnWrap">
                                        <input type="file" id="fileAttach" name="fileAttach" accept=".jpg, .png, .bmp" onChange={ this.ChangeImage } disabled={chatAble === true ? false : true}/>
                                        <label htmlFor="fileAttach">사진전송</label>
                                    </div>
                                </div>
                                <div className="innerPopupWrapper left reserveList" id="reserveList">
                                    <MenuPanel/>
                                </div>
                            </div>
                            <div className="chatInfoWrapper">
                                <div className="menu">
                                    <button type="button" className="closeInfoBtn" data-layer="chatInfo">
                                        <span>채팅창나가기정보</span>
                                    </button>
                                </div>
                                <div className="innerPopupWrapper right chatInfo" id="chatInfo">
                                    <div className="innerWrapper">
                                        <h3>[여행톡집사 이용안내]</h3>
                                        <div className="infoWrap">
                                            <p>여행 계획 중 또는 도중에 궁금한 점을 물어시면 집사가 답해드립니다. 예약내역이 있는 경우 '상담하기' 또는 제시되는 카테고리를 선택하시면 집사가 맞춤 상담을 해드립니다.</p>
                                            <p><a href="#/" onClick={ this.OpenGuide } >이용가이드 보기</a></p>
                                        </div>
                                        <div className="buttonWrap">
                                            <button type="button" className="getOutBtn" onClick={ this.CloseChat } data-layer="chatCloseLayer">
                                                <span>대화방 나가기</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ChatInput/>
                        <input type="hidden" name="mem_no" value={mem_no} />
                        <input type="hidden" name="room_id" value={roomId}/>
                        <input type="hidden" name="iv" value={iv}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Bottom 