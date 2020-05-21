export default
{
  "http_code": 200,
  "http_desc": "ok",
  "requests": {
    "version": "s1",
    "namepath": "s1.channel.Message",
    "command": "get_message",
    "query": {
      "0": "",
      "app_id": "tour",
      "svc_group": "tour",
      "site_id": "",
      "limit": "51",
      "mem_no": "100007105194",
      "msg_id": "5bebefcab5538e0da585acf4"
    },
    "method": "POST"
  },
  "del_msg_id": "5be13c758610e724850be559",
  "msg_list": [
    {
      "_id": "5bebde55b5538e0da585aca7",
      "timestamp": 1542184533582,
      "writer": {
        "user_gender": "",
        "app_id": "tour",
        "user_tp": "member",
        "online": true,
        "user_age": "00",
        "user_id": "tourservice",
        "site_id": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "node_id": "",
        "bot": 1,
        "dialog_id": "5578",
        "body": "이용권",
        "disp_id": "housing",
        "type": "text",
        "key": 1542184533171,
        "req": "oa_srch_dialog"
      }
    },
    {
      "_id": "5bebde55b5538e0da585aca8",
      "message": {
        "disp_id": "housing",
        "type": "group",
        "wait_key": "5bebde55b5538e0da585aca8",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "이용권에 대해 궁금한 사항을 선택하세요.\r\n"
          }
        ]
      },
      "timestamp": 1542184533584,
      "writer": {
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebde67b5538e0da585acab",
      "writer": {
        "site_id": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "online": true,
        "user_age": "00",
        "app_id": "tour",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice",
        "user_gender": ""
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "housing",
        "type": "text",
        "key": 1542184551581,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5572",
        "body": "관광지입장권/워터파크/유람선"
      },
      "timestamp": 1542184551996
    },
    {
      "_id": "5bebde67b5538e0da585acac",
      "message": {
        "msg_list": [
          {
            "bot": 1,
            "body": "관광지 / 워터파크 / 유람선 입장권에 대한 궁금한 사항을 선택하세요.",
            "type": "text"
          }
        ],
        "disp_id": "housing",
        "type": "group",
        "wait_key": "5bebde67b5538e0da585acac"
      },
      "timestamp": 1542184551998,
      "writer": {
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1"
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebde69b5538e0da585acaf",
      "timestamp": 1542184553302,
      "writer": {
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "app_id": "tour",
        "site_id": "",
        "user_id": "tourservice",
        "online": true,
        "user_age": "00",
        "user_gender": ""
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542184552888,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5570",
        "body": "이용 전인데 사용완료 문자가 왔어요",
        "disp_id": "housing",
        "type": "text"
      }
    },
    {
      "_id": "5bebde69b5538e0da585acb0",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "wait_key": "5bebde69b5538e0da585acb0",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "이용권 상품 중 일부 상품은 구매 시 보내드린 문자(LMS)가 아닌, 대행사에서 발송하는 바코드 등의 문자로 이용이 가능합니다.\r\n\r\n대행사에서 바코드 등을 고객님께 발송한 경우, 확인 차원에서 미리 '사용완료' 처리를 한 것입니다.\r\n실제 미 사용 하신 경우 고객센터로 연락 주시면 취소/환불 가능합니다.\r\n\r\n◆대행사 상품◆\r\n1. 제주도 관광지 입장권 (상품명- \"(제주)···\" 상품 제외 ex) (제주) 난타공연 입장권 등 제외) \r\n2. 전국 한화 아쿠아플라넷 / 설악워터피아\r\n3. 전국 대명리조트 아쿠아월드 / 오션월드 / 전국 워터파크 (금산한방스파 제외)\r\n\r\n※ 이용권 고객센터 ☎ 02-3479-0900"
          }
        ],
        "disp_id": "housing",
        "type": "group"
      },
      "timestamp": 1542184553304,
      "writer": {
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system"
      }
    },
    {
      "_id": "5bebde69b5538e0da585acb2",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "bot": 1,
        "body": "제가 알려드린 내용이 궁금증 해결에 도움이 되었나요?",
        "disp_id": "housing",
        "type": "text"
      },
      "timestamp": 1542184553417,
      "writer": {
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사"
      }
    },
    {
      "_id": "5bebde6ab5538e0da585acb4",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "housing",
        "type": "text",
        "key": 1542184554303,
        "req": "oa_srch_node",
        "node_id": "7080",
        "bot": 1,
        "dialog_id": 5560,
        "body": "도움이 되었어요."
      },
      "timestamp": 1542184554714,
      "writer": {
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "app_id": "tour",
        "mem_no": "100007105194",
        "user_id": "tourservice",
        "online": true,
        "user_age": "00",
        "user_gender": "",
        "site_id": ""
      }
    },
    {
      "_id": "5bebde6ab5538e0da585acb5",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "도움이 되셨다니 다행입니다~\r\n다른 문의사항이 있으시면 언제든지 여행톡집사를 찾아주세요. ^^\r\n\r\n대화창이 닫힙니다!"
          }
        ],
        "reset_menu": true,
        "type": "group",
        "wait_key": "5bebde6ab5538e0da585acb5",
        "disp_id": "housing",
        "room_close": true,
        "room_close_delay": 2
      },
      "timestamp": 1542184554716,
      "writer": {
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true
      }
    },
    {
      "_id": "5bebde77b5538e0da585acb7",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542184567550,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5576",
        "body": "취소/변경",
        "disp_id": "housing",
        "type": "text"
      },
      "timestamp": 1542184567958,
      "writer": {
        "mem_no": "100007105194",
        "user_age": "00",
        "user_gender": "",
        "site_id": "",
        "app_id": "tour",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice",
        "online": true
      }
    },
    {
      "_id": "5bebde77b5538e0da585acb8",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "wait_key": "5bebde77b5538e0da585acb8",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "국내숙박 취소나 기간/인원변경 중 궁금한 사항을 선택해주세요~"
          }
        ],
        "disp_id": "housing",
        "type": "group"
      },
      "timestamp": 1542184567962,
      "writer": {
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1"
      }
    },
    {
      "_id": "5bebdec3b5538e0da585acbb",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "body": "도움이 되었어요.",
        "disp_id": "housing",
        "type": "text",
        "key": 1542184642780,
        "req": "oa_srch_node",
        "node_id": "7080",
        "bot": 1,
        "dialog_id": 5560
      },
      "timestamp": 1542184643187,
      "writer": {
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice",
        "online": true,
        "app_id": "tour",
        "site_id": "",
        "user_age": "00",
        "user_gender": ""
      }
    },
    {
      "_id": "5bebdec3b5538e0da585acbc",
      "message": {
        "type": "group",
        "wait_key": "5bebdec3b5538e0da585acbc",
        "disp_id": "housing",
        "room_close": true,
        "room_close_delay": 2,
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "도움이 되셨다니 다행입니다~\r\n다른 문의사항이 있으시면 언제든지 여행톡집사를 찾아주세요. ^^\r\n\r\n대화창이 닫힙니다!"
          }
        ],
        "reset_menu": true
      },
      "timestamp": 1542184643190,
      "writer": {
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1"
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebdf79b5538e0da585acbe",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "overseas_tour",
        "type": "text",
        "oa_account": "overseas_tour",
        "key": 1542184825379,
        "bot": 1,
        "req": "oa_srch_word",
        "body": "해외여행 문의"
      },
      "timestamp": 1542184825786,
      "writer": {
        "mem_no": "100007105194",
        "user_tp": "member",
        "user_id": "tourservice",
        "user_age": "00",
        "app_id": "tour",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "online": true,
        "user_gender": "",
        "site_id": ""
      }
    },
    {
      "_id": "5bebdf79b5538e0da585acbf",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "해외여행에 대한 문의가 있으신가요?\r\n아래 메뉴에서 궁금한 내용을 선택해 주세요~"
          }
        ],
        "wait_key": "5bebdf79b5538e0da585acbf",
        "disp_id": "overseas_tour",
        "type": "group"
      },
      "timestamp": 1542184825789,
      "writer": {
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7"
      }
    },
    {
      "_id": "5bebdf7bb5538e0da585acc2",
      "timestamp": 1542184827329,
      "writer": {
        "mem_no": "100007105194",
        "user_id": "tourservice",
        "user_age": "00",
        "user_gender": "",
        "app_id": "tour",
        "site_id": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "online": true
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542184826921,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5297",
        "body": "예약 취소",
        "disp_id": "overseas_tour",
        "type": "text"
      }
    },
    {
      "_id": "5bebdf7bb5538e0da585acc3",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "overseas_tour",
        "type": "group",
        "wait_key": "5bebdf7bb5538e0da585acc3",
        "msg_list": [
          {
            "bot": 1,
            "body": "해외 여행 예약 취소에 대해 궁금하신가요?\r\n\r\n예약 취소 규정에 대해 알려드리겠습니다~",
            "type": "text"
          }
        ]
      },
      "timestamp": 1542184827333,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebdf7cb5538e0da585acc6",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542184828355,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "7880",
        "body": "다국적 배낭여행",
        "disp_id": "overseas_tour",
        "type": "text"
      },
      "timestamp": 1542184828762,
      "writer": {
        "app_id": "tour",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_gender": "",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice",
        "online": true,
        "user_age": "00",
        "site_id": "",
        "mem_no": "100007105194",
        "user_tp": "member"
      }
    },
    {
      "_id": "5bebdf7cb5538e0da585acc7",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "wait_key": "5bebdf7cb5538e0da585acc7",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "전세계 다양한 친구들과 함께 문화체험과 언어를 배울 수 있는 배낭여행을 원하시나요? \r\n\r\n지역별,시즌별, 테마별 다양한 프로모션 제공과 다국적 배낭여행지 추천이 필요하신가요? \r\n\r\n아래 <b>[상담 톡 연결하기]</b> 버튼을 누르시면 고객님께 꼭 맞는 상품을 추천해드립니다.\r\n"
          }
        ],
        "disp_id": "overseas_tour",
        "type": "group"
      },
      "timestamp": 1542184828769,
      "writer": {
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour"
      }
    },
    {
      "_id": "5bebdf7eb5538e0da585acca",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "bot": 1,
        "dialog_id": "5296",
        "body": "해외여행 취소 규정은 어떻게 되나요?",
        "disp_id": "overseas_tour",
        "type": "text",
        "key": 1542184830114,
        "req": "oa_srch_dialog",
        "node_id": ""
      },
      "timestamp": 1542184830549,
      "writer": {
        "user_age": "00",
        "user_gender": "",
        "app_id": "tour",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_id": "tourservice",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "online": true,
        "site_id": "",
        "mem_no": "100007105194",
        "user_tp": "member"
      }
    },
    {
      "_id": "5bebdf7eb5538e0da585accb",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "overseas_tour",
        "type": "group",
        "wait_key": "5bebdf7eb5538e0da585accb",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "일반적인 해외여행 취소규정에 대해서 알려드리겠습니다.※ 자세한 사항은 해당 상품페이지 내 약관을 확인하시기 바랍니다.\r\n예약금 입금 후 여행을 취소하실 경우, 국외여행 표준약관 제 15조의 소비자피해보상규정에 따라 아래의 비율로 취소료가 부과됨을 양지하여 주시기 바랍니다.\r\n◆해외 여행 취소 규정◆① 여행사 혹은 여행자의 귀책사유로 여행사가 취소하는 경우(동일한 규정 적용)- 여행 개시 30일 전까지(～30일) 통보 시 : 계약금 환급- 여행 개시 20일 전까지(29～20일) 통보 시 : 여행요금의 10% 배상- 여행 개시 10일 전까지(19～10일) 통보 시 : 여행요금의 15% 배상- 여행 개시 8일 전까지( 9～8일) 통보 시 : 여행요금의 20% 배상- 여행 개시 1일 전까지( 7～1일) 통보 시 : 여행요금의 30% 배상- 여행 당일 통보 시 : 여행요금의 50% 배상\r\n② 여행 참가자 수의 미달로 여행 개시 7일 전까지 여행계약 해제 통지 시 : 계약금 환급\r\n③ 여행 참가자 수의 미달로 인한 여행 개시 7일 전 까지 통지 기일 미준수- 여행 개시 1일 전까지 통지 시 : 여행요금의 30% 배상- 여행 출발 당일 통지 시 : 여행요금의 50% 배상\r\n※ 참고\r\n- 상품에 따라 특별약관이 적용되는 상품이 있으니 홈페이지에서 보신 해당 상품에 기재된 일정표, 상세정보 혹은 담당자의 유선상 안내를 참고해 주시기 바랍니다.\r\n- 해외항공권 취소규정은 여행약관과 상이하오니 반드시 항공권의 환불 규정을 확인하여 주시기 바랍니다.자세한 사항은 담당자에게 문의 바랍니다."
          }
        ]
      },
      "timestamp": 1542184830553
    },
    {
      "_id": "5bebdf7eb5538e0da585accd",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "bot": 1,
        "body": "제가 알려드린 내용이 궁금증 해결에 도움이 되었나요?",
        "disp_id": "overseas_tour",
        "type": "text"
      },
      "timestamp": 1542184830668,
      "writer": {
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사"
      }
    },
    {
      "_id": "5bebebbab5538e0da585accf",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542187962033,
        "type": "group",
        "swipe_list": [
          {
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_id": "housing_voucher",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "type": "reserved",
            "oa_keyword": "200002oaB06",
            "r_system_type": "005002",
            "disp_id": "housing_voucher",
            "r_goods_type": "200002",
            "bot": "1",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "r_trip_status": "여행중",
            "r_title": "(제주)우도잠수함",
            "oa_account": "housing",
            "choice": "1"
          },
          {
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "bot": "1",
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text"
          }
        ]
      },
      "timestamp": 1542187962515,
      "writer": {
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system"
      }
    },
    {
      "_id": "5bebebe8b5538e0da585acd0",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "type": "group",
        "swipe_list": [
          {
            "r_id": "housing_voucher",
            "r_trip_status": "여행중",
            "type": "reserved",
            "r_goods_type": "200002",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_system_type": "005002",
            "disp_id": "housing_voucher",
            "bot": "1",
            "r_title": "(제주)우도잠수함",
            "oa_account": "housing",
            "choice": "1",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188007966
      },
      "timestamp": 1542188008443,
      "writer": {
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true
      }
    },
    {
      "_id": "5bebec80b5538e0da585acd1",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "type": "group",
        "swipe_list": [
          {
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_system_type": "005002",
            "choice": "1",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_id": "housing_voucher",
            "disp_id": "housing_voucher",
            "type": "reserved",
            "bot": "1",
            "oa_account": "housing",
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_goods_type": "200002"
          },
          {
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188159545
      },
      "timestamp": 1542188160019,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebecb9b5538e0da585acd2",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542188216726,
        "type": "group",
        "swipe_list": [
          {
            "oa_keyword": "200002oaB06",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "disp_id": "housing_voucher",
            "type": "reserved",
            "oa_account": "housing",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_id": "housing_voucher",
            "r_no": "T7120006655",
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "choice": "1",
            "r_goods_type": "200002",
            "bot": "1",
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word"
          },
          {
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more"
          }
        ],
        "msg_list": [
          {
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요.",
            "type": "text",
            "bot": "1"
          },
          {
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1"
          }
        ],
        "client_wait_key": "client_wait"
      },
      "timestamp": 1542188217199
    },
    {
      "_id": "5bebecd6b5538e0da585acd3",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "type": "group",
        "swipe_list": [
          {
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "disp_id": "housing_voucher",
            "choice": "1",
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word",
            "oa_keyword": "200002oaB06",
            "r_status_code": "B06",
            "type": "reserved",
            "bot": "1",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_system_type": "005002",
            "r_no": "T7120006655",
            "r_status": "구매완료",
            "r_trip_status": "여행중",
            "r_goods_type": "200002",
            "oa_account": "housing",
            "r_id": "housing_voucher"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188244754
      },
      "timestamp": 1542188246011,
      "writer": {
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system"
      }
    },
    {
      "_id": "5bebecdbb5538e0da585acd4",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188251341,
        "type": "group",
        "swipe_list": [
          {
            "disp_id": "housing_voucher",
            "r_title": "(제주)우도잠수함",
            "oa_keyword": "200002oaB06",
            "r_status": "구매완료",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_id": "housing_voucher",
            "r_status_code": "B06",
            "r_no": "T7120006655",
            "r_system_type": "005002",
            "type": "reserved",
            "bot": "1",
            "req": "oa_srch_word",
            "oa_account": "housing",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "choice": "1",
            "r_goods_type": "200002"
          },
          {
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "bot": "1",
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text"
          }
        ]
      },
      "timestamp": 1542188251813,
      "writer": {
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사"
      }
    },
    {
      "_id": "5bebecf1b5538e0da585acd5",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188273106,
        "type": "group",
        "swipe_list": [
          {
            "oa_account": "housing",
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "choice": "1",
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "r_goods_type": "200002",
            "r_id": "housing_voucher",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "disp_id": "housing_voucher",
            "r_trip_status": "여행중",
            "bot": "1"
          },
          {
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false
          }
        ],
        "msg_list": [
          {
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요.",
            "type": "text",
            "bot": "1"
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      },
      "timestamp": 1542188273580,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebee20b5538e0da585acd6",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "type": "group",
        "swipe_list": [
          {
            "oa_account": "housing",
            "r_id": "housing_voucher",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "choice": "1",
            "oa_keyword": "200002oaB06",
            "r_status": "구매완료",
            "r_goods_type": "200002",
            "bot": "1",
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "r_system_type": "005002",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "disp_id": "housing_voucher",
            "type": "reserved"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "type": "text",
            "bot": "1",
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다."
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188576392
      },
      "timestamp": 1542188576859,
      "writer": {
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour"
      }
    },
    {
      "_id": "5bebeed1b5538e0da585acd7",
      "timestamp": 1542188753753,
      "writer": {
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188753287,
        "type": "group",
        "swipe_list": [
          {
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "bot": "1",
            "oa_account": "housing",
            "r_id": "housing_voucher",
            "r_no": "T7120006655",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "oa_keyword": "200002oaB06",
            "r_trip_status": "여행중",
            "disp_id": "housing_voucher",
            "choice": "1",
            "r_title": "(제주)우도잠수함",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "req": "oa_srch_word",
            "r_status_code": "B06",
            "type": "reserved",
            "r_goods_type": "200002"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요.",
            "type": "text"
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      }
    },
    {
      "_id": "5bebeed3b5538e0da585acd8",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188753991,
        "type": "group",
        "swipe_list": [
          {
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "r_goods_type": "200002",
            "r_title": "(제주)우도잠수함",
            "r_trip_status": "여행중",
            "choice": "1",
            "req": "oa_srch_word",
            "bot": "1",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_system_type": "005002",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "disp_id": "housing_voucher",
            "r_id": "housing_voucher",
            "r_no": "T7120006655",
            "r_status_code": "B06",
            "r_status": "구매완료"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      },
      "timestamp": 1542188755094
    },
    {
      "_id": "5bebef22b5538e0da585acd9",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188833569,
        "type": "group",
        "swipe_list": [
          {
            "r_no": "T7120006655",
            "r_title": "(제주)우도잠수함",
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "disp_id": "housing_voucher",
            "bot": "1",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_goods_type": "200002",
            "r_id": "housing_voucher",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "type": "reserved",
            "choice": "1",
            "req": "oa_srch_word"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      },
      "timestamp": 1542188834041,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebef23b5538e0da585acda",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "swipe_list": [
          {
            "r_status_code": "B06",
            "r_title": "(제주)우도잠수함",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "r_id": "housing_voucher",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_trip_status": "여행중",
            "disp_id": "housing_voucher",
            "type": "reserved",
            "choice": "1",
            "oa_account": "housing",
            "bot": "1",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_goods_type": "200002",
            "oa_keyword": "200002oaB06"
          },
          {
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "type": "text",
            "bot": "1",
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다."
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188834005,
        "type": "group"
      },
      "timestamp": 1542188835041,
      "writer": {
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1"
      }
    },
    {
      "_id": "5bebef39b5538e0da585acdb",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542188856911,
        "type": "group",
        "swipe_list": [
          {
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "r_trip_status": "여행중",
            "req": "oa_srch_word",
            "r_id": "housing_voucher",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_goods_type": "200002",
            "r_no": "T7120006655",
            "bot": "1",
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "disp_id": "housing_voucher",
            "type": "reserved",
            "choice": "1",
            "r_title": "(제주)우도잠수함"
          },
          {
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in"
          }
        ],
        "msg_list": [
          {
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요.",
            "type": "text"
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait"
      },
      "timestamp": 1542188857374
    },
    {
      "_id": "5bebef3bb5538e0da585acdc",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188857768,
        "type": "group",
        "swipe_list": [
          {
            "r_id": "housing_voucher",
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_title": "(제주)우도잠수함",
            "r_no": "T7120006655",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "disp_id": "housing_voucher",
            "bot": "1",
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "choice": "1",
            "r_goods_type": "200002",
            "r_system_type": "005002",
            "type": "reserved",
            "req": "oa_srch_word"
          },
          {
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      },
      "timestamp": 1542188859006,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebef41b5538e0da585acdd",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "key": 1542188864755,
        "type": "group",
        "swipe_list": [
          {
            "disp_id": "housing_voucher",
            "bot": "1",
            "r_title": "(제주)우도잠수함",
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status": "구매완료",
            "choice": "1",
            "r_no": "T7120006655",
            "r_system_type": "005002",
            "req": "oa_srch_word",
            "r_id": "housing_voucher",
            "r_status_code": "B06",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "r_goods_type": "200002"
          },
          {
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait"
      },
      "timestamp": 1542188865226,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebef43b5538e0da585acde",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "type": "group",
        "swipe_list": [
          {
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "choice": "1",
            "bot": "1",
            "req": "oa_srch_word",
            "r_status": "구매완료",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "r_goods_type": "200002",
            "oa_account": "housing",
            "r_id": "housing_voucher",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "r_system_type": "005002",
            "r_trip_status": "여행중",
            "disp_id": "housing_voucher",
            "r_title": "(제주)우도잠수함"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188865756
      },
      "timestamp": 1542188867005,
      "writer": {
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system"
      }
    },
    {
      "_id": "5bebef45b5538e0da585acdf",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "oa_account": "domestic_tour",
        "key": 1542188868780,
        "bot": 1,
        "req": "oa_srch_word",
        "body": "국내여행 문의",
        "disp_id": "domestic_tour",
        "type": "text"
      },
      "timestamp": 1542188869244,
      "writer": {
        "mem_no": "100007105194",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_age": "00",
        "user_gender": "",
        "site_id": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "user_tp": "member",
        "user_id": "tourservice",
        "online": true,
        "app_id": "tour"
      }
    },
    {
      "_id": "5bebef45b5538e0da585ace0",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "domestic_tour",
        "type": "group",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "국내여행에 대한 문의가 있으신가요?\r\n아래 메뉴에서 궁금한 내용을 선택해 주세요~"
          }
        ],
        "wait_key": "5bebef45b5538e0da585ace0"
      },
      "timestamp": 1542188869246
    },
    {
      "_id": "5bebef46b5538e0da585ace3",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "domestic_tour",
        "type": "text",
        "key": 1542188870079,
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5677",
        "body": "테마여행"
      },
      "timestamp": 1542188870543,
      "writer": {
        "online": true,
        "user_age": "00",
        "user_gender": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_tp": "member",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice",
        "app_id": "tour",
        "site_id": ""
      }
    },
    {
      "_id": "5bebef46b5538e0da585ace4",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "domestic_tour",
        "type": "group",
        "wait_key": "5bebef46b5538e0da585ace4",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "테마여행에 대한 궁금한 사항을 선택해주세요~~"
          }
        ]
      },
      "timestamp": 1542188870545,
      "writer": {
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour"
      }
    },
    {
      "_id": "5bebef6cb5538e0da585ace7",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188908057,
        "type": "group",
        "swipe_list": [
          {
            "req": "oa_srch_word",
            "oa_account": "housing",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "disp_id": "housing_voucher",
            "type": "reserved",
            "r_goods_type": "200002",
            "r_title": "(제주)우도잠수함",
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "r_trip_status": "여행중",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "r_id": "housing_voucher",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "choice": "1",
            "r_status_code": "B06",
            "bot": "1"
          },
          {
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "margin_top": 5,
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1"
          }
        ]
      },
      "timestamp": 1542188908522
    },
    {
      "_id": "5bebef6fb5538e0da585ace8",
      "message": {
        "swipe_list": [
          {
            "r_status_code": "B06",
            "r_status": "구매완료",
            "r_trip_status": "여행중",
            "r_goods_type": "200002",
            "r_title": "(제주)우도잠수함",
            "r_no": "T7120006655",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "disp_id": "housing_voucher",
            "choice": "1",
            "r_id": "housing_voucher",
            "oa_keyword": "200002oaB06",
            "type": "reserved",
            "bot": "1",
            "oa_account": "housing",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_system_type": "005002",
            "req": "oa_srch_word"
          },
          {
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188909764,
        "type": "group"
      },
      "timestamp": 1542188911001,
      "writer": {
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebef74b5538e0da585ace9",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "req": "oa_srch_word",
        "body": "해외여행 문의",
        "disp_id": "overseas_tour",
        "type": "text",
        "oa_account": "overseas_tour",
        "key": 1542188916428,
        "bot": 1
      },
      "timestamp": 1542188916894,
      "writer": {
        "user_tp": "member",
        "online": true,
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_age": "00",
        "user_gender": "",
        "app_id": "tour",
        "site_id": "",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_id": "tourservice"
      }
    },
    {
      "_id": "5bebef74b5538e0da585acea",
      "message": {
        "disp_id": "overseas_tour",
        "type": "group",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "해외여행에 대한 문의가 있으신가요?\r\n아래 메뉴에서 궁금한 내용을 선택해 주세요~"
          }
        ],
        "wait_key": "5bebef74b5538e0da585acea"
      },
      "timestamp": 1542188916896,
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebef76b5538e0da585aced",
      "message": {
        "req": "oa_srch_dialog",
        "node_id": "",
        "bot": 1,
        "dialog_id": "5353",
        "body": "지역별 해외여행 정보",
        "disp_id": "overseas_tour",
        "type": "text",
        "key": 1542188917961
      },
      "timestamp": 1542188918426,
      "writer": {
        "app_id": "tour",
        "user_nm": "%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4",
        "user_age": "00",
        "user_gender": "",
        "user_id": "tourservice",
        "online": true,
        "site_id": "",
        "hash": "5dc22fad58e9e55923cab59cc29eb225",
        "mem_no": "100007105194",
        "user_tp": "member"
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebef76b5538e0da585acee",
      "writer": {
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour"
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "disp_id": "overseas_tour",
        "type": "group",
        "wait_key": "5bebef76b5538e0da585acee",
        "msg_list": [
          {
            "type": "text",
            "bot": 1,
            "body": "해외 여행 지역 별 궁금하신 지역을 선택해주세요~"
          }
        ]
      },
      "timestamp": 1542188918430
    },
    {
      "_id": "5bebefc1b5538e0da585acf1",
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "client_wait_key": "client_wait",
        "key": 1542188993228,
        "type": "group",
        "swipe_list": [
          {
            "r_system_type": "005002",
            "type": "reserved",
            "r_status_code": "B06",
            "r_no": "T7120006655",
            "oa_keyword": "200002oaB06",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "disp_id": "housing_voucher",
            "req": "oa_srch_word",
            "oa_account": "housing",
            "r_trip_status": "여행중",
            "bot": "1",
            "r_id": "housing_voucher",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "choice": "1",
            "r_goods_type": "200002",
            "r_title": "(제주)우도잠수함",
            "r_status": "구매완료"
          },
          {
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ]
      },
      "timestamp": 1542188993535,
      "writer": {
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7"
      }
    },
    {
      "_id": "5bebefc4b5538e0da585acf2",
      "message": {
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542188994907,
        "type": "group",
        "swipe_list": [
          {
            "choice": "1",
            "r_goods_type": "200002",
            "oa_account": "housing",
            "oa_keyword": "200002oaB06",
            "r_trip_status": "여행중",
            "disp_id": "housing_voucher",
            "bot": "1",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "req": "oa_srch_word",
            "r_no": "T7120006655",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status_code": "B06",
            "r_id": "housing_voucher",
            "r_title": "(제주)우도잠수함"
          },
          {
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx",
            "icon": "keyword-more",
            "body": "마이페이지"
          }
        ]
      },
      "timestamp": 1542188996004,
      "writer": {
        "user_id": "tour",
        "online": true,
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사"
      },
      "room_id": "80999022b88250d42cf275137de93620"
    },
    {
      "_id": "5bebefc9b5538e0da585acf3",
      "timestamp": 1542189001439,
      "writer": {
        "app_id": "tour",
        "hash": "83dcefb7",
        "mem_no": "1",
        "user_tp": "system",
        "user_nm": "집사",
        "user_id": "tour",
        "online": true
      },
      "room_id": "80999022b88250d42cf275137de93620",
      "message": {
        "swipe_list": [
          {
            "req": "oa_srch_word",
            "r_status_code": "B06",
            "body": "예약번호 : T7120006655\n상품명 : (제주)우도잠수함",
            "r_status": "구매완료",
            "r_system_type": "005002",
            "disp_id": "housing_voucher",
            "choice": "1",
            "bot": "1",
            "oa_account": "housing",
            "r_trip_status": "여행중",
            "r_goods_type": "200002",
            "r_title": "(제주)우도잠수함",
            "r_id": "housing_voucher",
            "oa_keyword": "200002oaB06",
            "r_desc": "2017.01.01~2018.12.31\n1개\n1,020원",
            "type": "reserved",
            "r_no": "T7120006655"
          },
          {
            "icon": "keyword-more",
            "body": "마이페이지",
            "depend": false,
            "type": "link",
            "target": "in",
            "url": "https://mtour.interpark.com/MyPage.aspx"
          }
        ],
        "msg_list": [
          {
            "type": "text",
            "bot": "1",
            "body": "안녕하세요 %EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%EC%8B%A4님,\n예약하신 상품이 <font color=\"#f65c52\">1</font>건 있습니다.\n예약 문의는 ‘상담하기’를 선택해주세요."
          },
          {
            "body": "원활한 상담 진행을 위하여 대화내용이 저장되며 상담 이외의 용도로는 활용되지 않습니다.",
            "type": "text",
            "bot": "1",
            "margin_top": 5
          }
        ],
        "client_wait_key": "client_wait",
        "key": 1542189001122,
        "type": "group"
      }
    }
  ]
}