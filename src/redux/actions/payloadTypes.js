/*
* payload action
*/

export const SET_SYSTEM_MENU = 'payload/SET_SYSTEM_MENU';
export const PUSH_PAYLOAD = 'payload/PUSH_PAYLOAD';
export const UNSHIFT_PAYLOAD = 'payload/UNSHIFT_PAYLOAD';
export const CHANGE_PAYLOAD = 'payload/CHANGE_PAYLOAD';



export const setSystemMenu = (systemMenu) => ({
  type: SET_SYSTEM_MENU,
  systemMenu: systemMenu
})

export const pushPayload = (payload) => ({
  type: PUSH_PAYLOAD,
  payload: payload 
})

export const unshiftPayload = (payloadList) => ({
  type: UNSHIFT_PAYLOAD,
  payloadList: payloadList 
})

export const changePayload = (payload) => ({
  type: CHANGE_PAYLOAD,
  payload: payload 
})


