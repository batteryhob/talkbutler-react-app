
import React, { PureComponent } from 'react';
import ClevisURL from '../../../../../assets/script/ClevisURL';

class Text extends PureComponent {

    get computedBody () {
        //URL추출
        let title = this.props.title;
        let str = this.props.message.body;

        if (str === "")
            return str;

        //타이틀결합
        if (title != null && title !== "")
            str = "<span class='title'>" + title + "</span>" + str;

        try{
            var rs = ClevisURL.collect(str);

            if (rs.length > 0) {                
                for (var n = 0; n < rs.length; n++) {
                    var link = "";
                    var temprs = "";
                    temprs = rs[n].replace(/&/g, '&amp;');

                    var httpstr = "";
                    if (temprs.indexOf('http://') === -1 && temprs.indexOf('https://') === -1)
                        httpstr = "http://";

                    if (this.vwriter === 'system' || this.vwriter === 'tour')
                        link = '<a href=\'' + httpstr + '' + temprs + '\' target=\'_blank\' style=\'color:#333\'>' + temprs + '</a>';
                    else
                        link = '<a href=\'' + httpstr + '' + temprs + '\' target=\'_blank\' >' + temprs + '</a>';

                    str = str.replace(rs[n], link);
                }
            }
        } catch (ex) {

        }

        return str;
    }

    LinkClick = () => {
        window.open(this.props.link.url, "", "");
    }

    render() {

        /*
        * 링크버튼
        */
        let btnLink
        let styles = {
            background: 'rgb(255, 255, 255)'
          };

        if (this.props.link !== null)
            btnLink = <button type="button" className="button" onClick={ this.LinkClick } style={styles}>{this.props.link.body}</button>
        
        //링크타입 렌더링안함
        if(this.props.message.type === 'link')
            return null;

        return (
            <div className="msgWrap">
                <div className="chatWrap">
                    <pre className="text" dangerouslySetInnerHTML={{__html: this.computedBody}} >                       
                    </pre>
                    {btnLink}
                </div>
                <time>{this.props.date}</time>
            </div>
        );
    }
}

export default Text;