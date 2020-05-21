
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MenuItem from './menuItem';

import $ from 'jquery';

class MenuPanel extends PureComponent {

    get computedMenu(){
        try {
            return this.props.systemMenu.common.items;
        } catch (err) {
            return [];
        }
    }

    ReservationClick = () => {

        //메뉴닫기
        let $infoLayer = $('#reserveList');
        if (!$infoLayer.is(':visible')) {
            $infoLayer.addClass('visible');
            $('.menuSelectBtn > span').html('메뉴닫기');
        } else {
            $infoLayer.removeClass('visible');
            $('.menuSelectBtn > span').html('메뉴선택');
        }

        //mem_no, iv
        // apiModule.GetReservation(window.mytalk).then((data)=>{
            
        //     if (!data.result) {
        //         console.log("API ERROR: " + data.error_desc);
        //         return;
        //     }  
        //     socketModule.CallReservation(data.swipe_list);    

        // }).catch((result)=>{
        //     console.log(result);
        // });

    }

    render() {
        return (
            <div className="innerWrapper">
                <div className="infoWrap">
                    <ul className="cateList">
                        {  
                            this.computedMenu.map((item, i)=>{
                                return (
                                    <MenuItem item={item} key={i}>
                                    </MenuItem>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="buttonWrap" onClick={ this.ReservationClick } >
                    <button type="button" className="reserveListBtn" >
                        <span>예약내역</span>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    systemMenu: state.payloads.systemMenu
})

export default connect(
    mapStateToProps,
    undefined
)(MenuPanel)