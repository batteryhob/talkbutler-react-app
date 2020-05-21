
import React, { Fragment } from 'react';

const Dialog = () => {

    const dialogOverlayStyle = { position: 'fixed', left: '0px', top: '0px', opacity: 0.6 }
    const chatErrorLayerStyle = { position: 'fixed', left: '123.5px', top: '288px', visibility: 'visible', opacity: 1 }

    return (
        <Fragment>
            <div className="dialogOverlay" style={dialogOverlayStyle}>
            </div>
            <div className="dialogWindow chatErrorLayer" style={chatErrorLayerStyle}>
                <div className="dialogHeaderOuter">
                    <div className="dialogHeader">
                        <h3>네트워크 오류</h3>
                    </div>
                </div>
            </div>
            <div className="dialogBodyOuter">
                <div className="dialogBody">
                    <p>고객님!
                        <br />현재, 네트워크 상태가 원활하지 않아
                        <br />메세지 전송에 실패했습니다.
                        <br />새로고침을 클릭하여 다시 시도해주세요.
                        </p>
                </div>
            </div>
            <div className="dialogButtonsOuter">
                <div className="dialogButtons">
                    <button type="button" className="button_0 butlerClose">톡집사 닫기</button>
                    <button type="button" className="button_1 refresh">새로고침</button>
                </div>
            </div>
        </Fragment>
    );
}


export default Dialog;