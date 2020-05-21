
import React, { Component } from 'react';
import classNames from 'classnames';
import $ from 'jquery';


class MenuItem extends Component {
    
    get computedTitle() {
        try {
            return this.props.item.action[0].message.body;
        } catch (err) {
            return '';
        }
    }

    get computedOAAccount() {
        try {
            return this.props.item.action[0].message.oa_account;
        } catch (err) {
            return [];
        }
    }

    //OA호출
    OaClick = () => {

        //메뉴닫기
        let $infoLayer = $('#reserveList');
        if (!$infoLayer.is(':visible')) {
            $infoLayer.addClass('visible');
            $('.menuSelectBtn > span').html('메뉴닫기');
        } else {
            $infoLayer.removeClass('visible');
            $('.menuSelectBtn > span').html('메뉴선택');
        }

        //socketModule.CallOA(this.props.item.action[0])
        
    }

    render() {

        if(this.computedTitle !== '예약내역' && this.computedTitle !== '현지문의')
        {
            const liClass = classNames({
                overseasAir : this.computedOAAccount === 'overseas_air' ,
                overseasHotel : this.computedOAAccount === 'overseas_hotel' ,
                overseasTravel : this.computedOAAccount === 'overseas_tour' ,
                domesticAir : this.computedOAAccount === 'domestic_air' ,
                domesticStay : this.computedOAAccount === 'housing' ,
                domesticTravel : this.computedOAAccount === 'domestic_tour' ,
                etc : this.computedTitle === '기타문의', 
                jeju : this.computedOAAccount === 'jeju' ,
                useTicket : this.computedOAAccount === 'use_ticket' ,
                airHotel : this.computedOAAccount === 'air_hotel' ,
            });
            const styles = {
                background: 'rgb(255, 255, 255)'
            };

            return (
                <li className={liClass}>
                    <button type="button" onClick= { this.OaClick } style={styles}>
                        <span>{this.props.item.title}</span>
                    </button>
                </li>
            );            
        }else{
            return null
        }
    }
}

export default MenuItem;