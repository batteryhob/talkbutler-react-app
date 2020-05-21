import React from 'react';

const Header = () => (
    <div className="row chatHeader">
        <div className="chatHeaderWrapper">
            <div className="titleWrap">
                <h1>챗봇</h1>
            </div>
            <div className="closeWrap">
                <button type="button" data-layer="chatCloseLayer" className="closeBtn">
                    <span>닫기</span>
                </button>
            </div>
        </div>
    </div>
)

export default Header;