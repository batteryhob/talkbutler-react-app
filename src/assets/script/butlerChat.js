import jQuery from 'jquery';
(function (jQuery) {
    var DUI = {};
    DUI.check = {
        siteCode: window.LOCALE ? window.LOCALE : '', browser: (function () {
            var agent = navigator.userAgent;
            var browserList = {
                'ie7': agent.match(/msie 7.0/i),
                'ie8': agent.match(/msie 8.0/i),
                'ie9': agent.match(/msie 9.0/i),
                'ie10': agent.match(/msie 10.0/i),
                'ie11': agent.match(/rv:11.0/i),
                'edge': agent.match(/edge/i),
                'chrome': agent.match(/chrome/i),
                'safari': agent.match(/safari/i),
                'firefox': agent.match(/firefox/i),
                'opera': agent.match(/opera/i)
            };

            for (var prop in browserList) {
                if (browserList[prop]) { // agent.match()
                    return prop;
                }
            }
        })()
    };

    jQuery.screenHeight = function () {
        var jQuerychatScreen = jQuery('.chatScreen');
        var chatHeaderHeight = jQuery('.chatHeader').height() || 0;
        var chatPrevHeight = jQuery('.chatPrev').height() || 0;
        var chatBottomHeight = jQuery('.chatBottom').innerHeight() || 0;

        var streamHeight = function () {
            var winHeight = window.innerHeight;
            var tableHegiht = winHeight - (chatHeaderHeight + chatPrevHeight + chatBottomHeight);

            jQuerychatScreen.css({ 'height': tableHegiht });
        };

        jQuery(window).resize(function () {
            streamHeight();
        });

        jQuery(window).on('load', function () {
            streamHeight();
        });
    };
    

    jQuery.innerPopupVisible = function (elem) {

        if (elem === null) {
            if (jQuery('#chatInfo').is(':visible')) {
                jQuery('#chatInfo').removeClass('visible');
            }

            if (jQuery('#reserveList').is(':visible')) {
                jQuery('#reserveList').removeClass('visible');
                jQuery('.menuSelectBtn > span').html('메뉴선택');
            }

            return;
        }

        var jQueryelem = elem;
        var infoLayerName = jQueryelem.data('layer');
        var jQueryinfoLayer = jQuery('#' + infoLayerName);

        if (infoLayerName === 'reserveList') {
            if (jQuery('#chatInfo').is(':visible')) {
                jQuery('#chatInfo').removeClass('visible');
            }
        }

        if (infoLayerName === 'chatInfo') {
            if (jQuery('#reserveList').is(':visible')) {
                jQuery('#reserveList').removeClass('visible');
                jQuery('.menuSelectBtn > span').html('메뉴선택');
            }
        }

        if (!jQueryinfoLayer.is(':visible')) {
            jQueryinfoLayer.addClass('visible');
            if (jQuery('.menuSelectBtn')[0] === elem[0]) {
                jQuery('.menuSelectBtn > span').html('메뉴닫기');
            }
        } else {
            jQueryinfoLayer.removeClass('visible');
            if (jQuery('.menuSelectBtn')[0] === elem[0]) {
                jQuery('.menuSelectBtn > span').html('메뉴선택');
            }
        }
    };

    jQuery.chat = function () {
        var jQuerychat = jQuery('#chat');

        if (!jQuerychat.length) {
            return;
        }

        var jQueryscreen = jQuerychat.find('.chatScreen');
        var jQuerystream = jQueryscreen.find('.stream');
        var jQueryform = jQuerychat.find('#chatInput');
        var jQuerychattingTalk = jQuerychat.find('.chattingTalk');
        var jQuerychatSend = jQuerychat.find('.chatSend');

        var msg = function () {
            return jQuerychattingTalk.val().trim();
        };

        var checkSubmit = function () {

        };

        var scrollToBottom = function () {
            jQueryscreen.scrollTop(jQueryscreen.prop('scrollHeight'));
        };

        jQuerychattingTalk.on('keydown', function (e) {

        });

        jQueryform.on('submit', function (e) {
            e.preventDefault();
        });
    };

    jQuery(document).ready(function () {
        
        if (DUI.check.browser === 'ie9') {

            //ie9용문자길이제한
            var txts = document.getElementsByTagName('TEXTAREA');

            for (var i = 0, l = txts.length; i < l; i++) {
                if (/^[0-9]+jQuery/.test(txts[i].getAttribute("maxlength"))) {
                    var func = function () {
                        var len = parseInt(this.getAttribute("maxlength"), 10);

                        if (this.value.length > len) {
                            alert('최대 ' + len + '자 까지 가능합니다');
                            this.value = this.value.substr(0, len);
                            return false;
                        }
                    }

                    txts[i].onkeyup = func;
                    txts[i].onblur = func;
                }
            };
        }

        jQuery('.mainspinner').hide();

        jQuery.chat();

        if (DUI.check.browser === 'ie9') {
            jQuery.screenHeight();
            jQuery('.container').addClass('ie9');
        };

        if (DUI.check.browser === 'ie10') {
            jQuery.screenHeight();
        };

        jQuery('.closeBtn').on('click', function () {
            window.close();
        });

        jQuery('.getOutBtn').on('click', function () {
            alert("대화방 나가기")
        });

        jQuery('.closeInfoBtn').on('click', function () {
            jQuery.innerPopupVisible(jQuery(this));
        });

        jQuery('.menuSelectBtn').on('click', function () {
            jQuery.innerPopupVisible(jQuery(this));
        });
        
        jQuery('.chatInputsWrapper').on('click', function () {
            jQuery.innerPopupVisible(null);
        });

        jQuery('.titleWrap').on('click', function () {
            jQuery.innerPopupVisible(null);
        });

        jQuery('.stream').on('click', function () {
            jQuery.innerPopupVisible(null);
        });

        //jQuery('input, textarea').placeholder();
    });

})(jQuery);

//# sourceMappingURL=../../../map/scripts/pages/butlerChat/butlerChat.js.map