/*
 * payload reducer
 */

import {
  SET_SYSTEM_MENU,
  PUSH_PAYLOAD,
  UNSHIFT_PAYLOAD,
  CHANGE_PAYLOAD
} from '../actions/payloadTypes'

import * as moment from 'moment';

//더미데이터
import init from '../../assets/data/init'
import post from '../../assets/data/post'
import reservation from '../../assets/data/reservation'

const payLoadState = {

  //시스템메뉴
  systemMenu: {},
  //메세지리스트
  payloadList: [],
  //1대1상담가능여부
  chatAble: false,
  //메세지상태
  firstMsgId: '',
  lastMsgId: '',
  lastUserTp: 'history'


};

const payloads = (state = payLoadState, action) => {

  moment.locale('ko', {
    weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
  });

  switch (action.type) {

    case SET_SYSTEM_MENU:
      return {
        ...state,
        systemMenu: init.system_menu
      }

    case PUSH_PAYLOAD:

      //room상태값체크
      let chatAble = false
      try {
        if (action.payload.rooms.state === 'no-zipsa' ||
          action.payload.rooms.state === 'wait' ||
          action.payload.rooms.state === 'ing' ||
          action.payload.rooms.state === 'holding' ||
          action.payload.rooms.state === 'no-answer' ||
          action.payload.rooms.state === 'transfer'
        ) {
          chatAble = true
        }
      } catch (e) {}

      let payloadAdd = [action.payload]

      //날짜객체삽입
      try {

        if (state.payloadList.length > 1) {
          let beforestamp = state.payloadList[state.payloadList.length - 1].timestamp;
          let before = moment(beforestamp)
          let next = moment(action.payload.timestamp);
          if (moment.duration(next.diff(before,'days')).asDays() > 1) {
            const payLoadDate = {
              message: {
                type: 'date',
                body: before.format("YYYY년 MM월 DD일(ddd)")
              },
              msg_id: beforestamp,
              timestamp: beforestamp,
              writer: {
                user_tp: 'server'
              }
            }
            payloadAdd.unshift(payLoadDate);
          }
          
          //직전 Payload와 writer비교
          payloadAdd[payloadAdd.length-1] = {
            ...payloadAdd[payloadAdd.length-1],
            same_writer: state.lastUserTp === payloadAdd[payloadAdd.length-1].writer.user_tp ? true : false
          }

        }
      } catch (e) {
        console.log(e)
      }

      //last메세지상태
      let lastMsgId = window.client.lastMsgId;
      let currentUserTp = action.payload.writer.user_tp;
      
      return {
        ...state,
        payloadList: [...state.payloadList, ...payloadAdd],
        chatAble: chatAble,
        lastMsgId: lastMsgId,
        lastUserTp: currentUserTp
      }

    case UNSHIFT_PAYLOAD:  

      console.log(post.msg_list)

      let payloadList = [...post.msg_list];
      let unshiftPayloadList = [];
      let firstMsgId = '';

      //날짜객체삽입
      try {
        payloadList.forEach((payload, idx)=>{

          if(idx === 0)
          {
            //firstMsgId메세지상태
            firstMsgId = payload._id;
          }

          if(idx > 0)
          {
            let beforestamp = unshiftPayloadList[unshiftPayloadList.length - 1].timestamp;
            let before = moment(beforestamp)
            let next = moment(payload.timestamp);
            if (moment.duration(next.diff(before,'days')).asDays() > 1) {
              const payLoadDate = {
                _id: `date${unshiftPayloadList[unshiftPayloadList.length - 1]._id}`,
                message: {
                  type: 'date',
                  body: before.format("YYYY년 MM월 DD일(ddd)")
                },                
                timestamp: beforestamp,
                writer: {
                  user_tp: 'server'
                }
              }
              unshiftPayloadList.push(payLoadDate);
            }

            //직전 Payload와 writer비교
            if(unshiftPayloadList.length > 2)
            {
              unshiftPayloadList[unshiftPayloadList.length-1] = {
                ...unshiftPayloadList[unshiftPayloadList.length-1],
                same_writer: unshiftPayloadList[unshiftPayloadList.length-2].writer.user_tp === unshiftPayloadList[unshiftPayloadList.length-1].writer.user_tp ? true : false
              }
            }

          }
          unshiftPayloadList.push(payload)
        })

      } catch (e) {
        console.log(e)
      }

      return {
        ...state,
        payloadList: [...unshiftPayloadList, ...state.payloadList],
        firstMsgId: firstMsgId
      }

    case CHANGE_PAYLOAD:
      let tempList = Object.assign([], state.payloadList);
      let idx = tempList.findIndex(el => el.msg_id === action.payload.message.wait_key);
      tempList.splice(idx, 1, {
          ...action.payload,
          same_writer: false
      });
      return {
        ...state,
        payloadList: tempList
      }

    default:
      return state;
  }
}

export default payloads