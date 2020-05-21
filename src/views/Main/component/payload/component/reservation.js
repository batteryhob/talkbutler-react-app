
import React, { PureComponent } from 'react';
import classNames from 'classnames';

// import * as apiModule from '../../../../../services/apis'
// import * as socketModule from '../../../../../services/sockets'

class ReservationItem extends PureComponent {  

    get computedOAAccount() {
        try {                
            return this.props.reservation.oa_account;
        } catch (err) {
            return '';
        }
    }

    get computedDispid() {
        try {
            return this.props.reservation.disp_id;
        } catch (err) {
            return '';
        }
    }

    get computedRno() {
        try {
            var templist = this.props.reservation.r_no.split('|');
            if (templist.length > 1)
                return templist[1];
            else
                return this.props.reservation.r_no;

        } catch (err) {
            return '';
        }
    }

    get computedCheck() {
        try {

            //취소상태체크
            if (this.props.reservation.r_goods_type === '300001' && this.props.reservation.r_status_code === 'CY')
                return false;
            if (this.props.reservation.r_goods_type === '500001' && this.props.reservation.r_status_code === 'CA')
                return false;
            if (this.props.reservation.r_goods_type === '400001' && this.props.reservation.r_status_code === '104104')
                return false;
            if (this.props.reservation.r_goods_type === '700001' && this.props.reservation.r_status_code === '103')
                return false;
            if (this.props.reservation.r_goods_type === '100002' && this.props.reservation.r_status_code === '104')
                return false;
            if (this.props.reservation.r_goods_type === '100001' && this.props.reservation.r_status_code === '104')
                return false;
            if (this.props.reservation.r_goods_type === '600001' && this.props.reservation.r_status_code === '102')
                return false;
            if (this.props.reservation.r_goods_type === '200002' && this.props.reservation.r_status_code === 'A02')
                return false;
            if (this.props.reservation.r_goods_type === '200002' && this.props.reservation.r_status_code === 'B02')
                return false;

            return true;

        } catch (err) {
            return false;
        }
    }

    get computedTripDay() {
        try {
            //앱 용 엔터표시 삭제
            var tempitem = this.props.reservation.r_desc.replace(/↵/gi, '\n');

            var descArr = tempitem.split('\n');

            var returnDay = '';
            if (descArr[0].indexOf('~') > -1)
            {
                var descArr2 = descArr[0].split('~');
                returnDay += descArr2[0].replace(descArr2[0].substring(0, 2), '') + '~' + descArr2[1].replace(descArr2[1].substring(0, 2), '');
            } else {
                returnDay += descArr[0].replace(descArr[0].substring(0, 2), '');
            }

            return returnDay;
        } catch (err) {
            return '';
        }
    }

    get computedAirName() {
        try {
            //앱 용 엔터표시 삭제
            var tempitem = this.props.reservation.r_desc.replace(/↵/gi, '\n');

            var descArr = tempitem.split('\n');
            if (descArr.length === 3)
            {
                return descArr[1];
            }else{
                return '';
            }
        } catch (err) {
            return '';
        }
    }

    get computedPrice() {
        try {
            //앱 용 엔터표시 삭제
            var tempitem = this.props.reservation.r_desc.replace(/↵/gi, '\n');

            var descArr = tempitem.split('\n');
            return descArr[descArr.length - 1];
        } catch (err) {
            return '';
        }
    }

    get computedTitle() {
        try {

            var title = '';
            if (this.props.reservation.oa_account === 'overseas_air')
            {
                title = '해외항공';
            }
            if (this.props.reservation.oa_account === 'overseas_tour')
            {
                title = '해외여행';
            }
            if (this.props.reservation.oa_account === 'housing')
            {
                title = '해외호텔';
            }             
            if (this.props.reservation.oa_account === 'domestic_air')
            {
                title = '국내항공';
            }
            if (this.props.reservation.oa_account === 'domestic_tour')
            {
                title = '국내여행';
            }
            if (this.props.reservation.disp_id === 'domestic_tour_jeju')
            {
                title = '제주';
            }
            if (this.props.reservation.disp_id === 'housing_voucher')
            {
                title = '이용권';
            }
            if (this.props.reservation.disp_id === 'overseas_hotel_airtel')
            {
                title = '에어텔';
            }
            return title;
        } catch (err) {
            return '';
        }
    }

    ReservationClick = () => {
        if (!this.computedCheck)
            return;

        alert("예약상태를 확인합니다.")
    }

    render() {

        let divClass = classNames({
            'section': true,
            'cancel': !this.computedCheck
        })

        let titleClass = classNames({
            icons : true, 
            overseasAir : this.computedOAAccount === 'overseas_air',
            overseasHotel : this.computedOAAccount === 'overseas_hotel',
            overseasTravel : this.computedOAAccount === 'overseas_tour',
            domesticAir : this.computedOAAccount === 'domestic_air',
            domesticStay : this.computedOAAccount === 'housing',
            domesticTravel : this.computedOAAccount === 'domestic_tour' && this.computedDispid !== 'domestic_tour_jeju',
            jeju : this.computedOAAccount === 'domestic_tour' && this.computedDispid === 'domestic_tour_jeju',
            etc : this.computedTitle === '기타문의', 
            useTicket : this.computedDispid === 'housing_voucher' ,
            airHotel : this.computedDispid === 'overseas_hotel_airtel' 
        })

        let styles = {
          background: 'rgb(255, 255, 255)'
        };        

        let tripdayTitle
        let tripdayContent
        if(this.computedTripDay !== '')
        {
            tripdayTitle = <dt>이용일</dt>
            tripdayContent = <dd>{this.computedTripDay}</dd>    
        }
        let airnameTitle
        let airnameContent
        if(this.computedAirName !== '')
        {
            airnameTitle = <dt>설명</dt>
            airnameContent = <dd>{this.computedAirName}</dd>    
        }
        let priceDiv
        if(this.computedPrice !== '')
        {
            priceDiv =  <dl className="price">
                            <dt>가격</dt>
                            <dd>{this.computedPrice}</dd>
                        </dl>  
        }

        if(this.props.reservation.type !== 'reserved')
            return null

        return (  
            <div className={divClass}>
                    <div className="contents">
                        <div className="col">
                            <div className="prodInfo">
                                <span className="col">
                                    <span className={titleClass}>
                                    {this.computedTitle}
                                    </span>
                                </span>
                                <span className="col">
                                    <p className="stateWrap">
                                        <span className="state">[{this.props.reservation.r_status}]</span>
                                        <span className="number">{this.computedRno}</span>
                                    </p>
                                    <p className="title">{this.props.reservation.r_title}</p>
                                </span>
                            </div>
                            <div className="etcInfo">
                                <dl className="info">
                                    {tripdayTitle}
                                    {tripdayContent}
                                    {airnameTitle}
                                    {airnameContent}
                                </dl>
                                {priceDiv}
                            </div>
                        </div>
                        <div className="col">
                            <button type="button" className="chatButton" style={styles} onClick={ this.ReservationClick }>
                                <span>상담<br/>하기</span>
                            </button>
                        </div>
                    </div>
                </div>
        );
    }
}

class Reservation extends PureComponent {

    get computedReservationList() {
        try {
            return this.props.message.swipe_list;
        } catch (err) {
            return [];
        }
    }

    get computedLink() {
        try {

            let reservationList = this.props.message.swipe_list;
            let lastElement = reservationList[reservationList.length - 1];
            if (lastElement.type === 'link')
                return lastElement.url;
            else
                return '';
            
        } catch (err) {
            return '';
        }
    }

    GoLink = ()  => {

        //모바일용URL만 있어 하드코딩
        if (this.computedLink !== '')
            window.open('http://tour.interpark.com/mypage/Default.aspx?mbn=tour&mln=tour_mypage', '_blank');
            
    }

    render() {

        let btnMypage
        let styles = {
          background: 'rgb(255, 255, 255)'
        };

        if(this.computedLink !== '')
        {
            btnMypage = <button type="button" className="allReserveBtn" style={styles} onClick={ this.GoLink } >
                            <span>모든 예약내역 (마이페이지)</span>
                        </button>
        }

        return (
            <div className="reserveList">
                {
                    this.computedReservationList.map((reservation, i) => {
                        return (<ReservationItem reservation={reservation} key={i} />);
                    })
                }
                {btnMypage}
            </div>
        );
    }
}

export default Reservation;