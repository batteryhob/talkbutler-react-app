import React, {
    PureComponent,
    Fragment
} from 'react';

import {
    connect
} from 'react-redux';
import {
    setSystemMenu,
    pushPayload,
    unshiftPayload,
    changePayload
} from '../../redux/actions/payloadTypes'

import Header from '../../shared/header';
import Loader from '../../shared/loader';

//import Prev from './component/prev';
import Screen from './component/screen';
import Bottom from './component/bottom';

import $ from 'jquery'

class Main extends PureComponent  {

    componentDidMount() {
        this.Init();
    }

    //초기화
    Init = () => {

        //시스템메뉴세팅
        this.props.SetSystemMenu()

        //이전대화내역불러오기
        this.props.UnshiftPayload()


    }

    ScrollDown = () => {
        var $chat = $('#chat');
        if (!$chat.length) {
            return;
        }
        var $screen = $chat.find('.chatScreen');
        $screen.scrollTop($screen.prop('scrollHeight'));
    }

    render() {
        return ( 
            <Fragment>
                <Header/>
                <Loader/>
                <Screen/>
                <Bottom/>
            </Fragment>
        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    SetSystemMenu: (roomId) => dispatch(setSystemMenu(roomId)),
    PushPayload: (payload) => dispatch(pushPayload(payload)),
    UnshiftPayload: (payloadList) => dispatch(unshiftPayload(payloadList)),
    ChangePayload: (payload) => dispatch(changePayload(payload))
})

Main = connect(
    null,
    mapDispatchToProps
)(Main);

export default Main;