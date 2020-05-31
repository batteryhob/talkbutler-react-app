import { call, put, takeEvery, takeLatest, spawn } from 'redux-saga/effects'

export const PUSH_PAYLOAD = 'payload/PUSH_PAYLOAD';
export const PUSH_PAYLOAD_SUCCESS = 'payload/PUSH_PAYLOAD_SUCCESS';

function* fetchPayload(action) {
   try {
        console.log(action.payload)
        //소켓통신
        let payload = {
            _id: new Date(),
            timestamp: 1542184533582,
            writer: {
                user_gender: "",
                app_id: "tour",
                user_tp: "member",
                online: true,
                user_age: "00",
                user_id: "tourservice",
                site_id: "",
                hash: "5dc22fad58e9e55923cab59cc29eb225",
                mem_no: "100007105194",
                user_nm: "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
                room_id: "80999022b88250d42cf275137de93620",
            },
            message: {
                node_id: "",
                bot: 1,
                dialog_id: "5578",
                body: action.payload,
                disp_id: "housing",
                type: "text",
                key: 1542184533171,
                req: "oa_srch_dialog"
            }
        }
        yield put({type: PUSH_PAYLOAD_SUCCESS, payload: payload});

   } catch (e) {
      console.log(e)
   }
}

function* payloadSaga() {
    yield takeEvery(PUSH_PAYLOAD, fetchPayload);
}

export default function* rootSaga() {
  yield spawn(payloadSaga);
}
