
import React, { PureComponent } from 'react';
import classNames from 'classnames'


class OaItem extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            overFlag : false
        };
    }

    OaOver = () =>{
        this.setState(state => ({
            overFlag: true
        }));
    }    

    OaOut = () => {
        this.setState(state => ({
            overFlag: false
        }));    
    }  

    OaClick = () => {
        try {

            this.setState(state => ({
                overFlag: true
            }));

            // if (typeof this.props.message.action[0] != 'undefined' && this.props.message.action[0].cmd === "popup.form.inquiry") {
            //     //운영외시간
            //     popup.facePopup(this.props.message.action[0].message);                
            // } else {
            //     socketModule.CallOA(this.props.message.action[0])
            // }

        } catch (err) {
            return;
        }

    }

    get computedDirectTalk () {
        try {

            //상담원Talk아이콘체크
            if (this.props.message.title === '상담톡 바로가기')
                return true;
            
            if (this.props.message.title === '상담 톡 바로가기')
                return true;

            if (this.props.message.title === '상담 톡 요청하기')
                return true;

            if (this.props.message.title === '상담 톡 요청할래요')
                return true;

            if (this.props.message.title === '좀 더 자세한 안내가 필요해요.')
                return true;

            return false;

        } catch (err) {
            return false;
        }
    }

    render() {

        let { overFlag } = this.state

        let liClass = classNames({
            'selected' : overFlag === true,     
            'talk' : this.computedDirectTalk === true
        });

        let styles = {
            background: 'rgb(255, 255, 255)'
          };

        return (            
            <li className={ liClass } onMouseOver={ this.OaOver } onMouseOut={ this.OaOut }>
                <button type="button" onClick={ this.OaClick } style={styles}>
                    <span>{this.props.message.title}</span>
                </button>
            </li>
        );
    }
}

class Oa extends PureComponent {

    render() {
        return (
            <div className="qaSelectList">
                <ul>
                    {
                        this.props.message.items.map((el, i) => {
                            return (<OaItem message={el} key={i} />);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Oa;