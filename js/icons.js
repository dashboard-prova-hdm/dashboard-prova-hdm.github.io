// ---- FACEBOOK ---- //

var facebookShare = document.querySelector('[data-js="facebook-share"]');

facebookShare.onclick = function(e) {
    e.preventDefault();
    var top = window.screen.height - 500;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 500;
    left = left > 0 ? left / 2 : 0;

    var uploadWin = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, "Upload Chapter content", "width=500,height=500" + ",top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    uploadWin.moveTo(left, top);
    uploadWin.focus();

    if (mailWindow.focus) {
        mailWindow.focus();
    }
    return false;
}


// ---- TWITTER ---- //

var twitterShare = document.querySelector('[data-js="twitter-share"]');

twitterShare.onclick = function(e) {
    e.preventDefault();
    var top = window.screen.height - 500;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 500;
    left = left > 0 ? left / 2 : 0;

    var uploadWin = window.open('https://twitter.com/share?url=' + document.URL, "Upload Chapter content", "width=500,height=500" + ",top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    uploadWin.moveTo(left, top);
    uploadWin.focus();

    if (mailWindow.focus) {
        mailWindow.focus();
    }
    return false;
}


// ---- TELEGRAM ---- //

var telegramShare = document.querySelector('[data-js="telegram-share"]');

telegramShare.onclick = function(e) {
    e.preventDefault();
    var top = window.screen.height - 500;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 500;
    left = left > 0 ? left / 2 : 0;

    var uploadWin = window.open('https://t.me/share/url?url=' + document.URL, "Upload Chapter content", "width=500,height=500" + ",top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    uploadWin.moveTo(left, top);
    uploadWin.focus();

    if (mailWindow.focus) {
        mailWindow.focus();
    }
    return false;
}


// ---- LINKEDIN ---- //

var linkedinShare = document.querySelector('[data-js="linkedin-share"]');

linkedinShare.onclick = function(e) {
    e.preventDefault();
    var top = window.screen.height - 500;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 500;
    left = left > 0 ? left / 2 : 0;

    var uploadWin = window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + document.URL, "Upload Chapter content", "width=500,height=500" + ",top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    uploadWin.moveTo(left, top);
    uploadWin.focus();

    if (mailWindow.focus) {
        mailWindow.focus();
    }
    return false;
}


// ---- MAIL ---- //

var mailShare = document.querySelector('[data-js="mail-share"]');

mailShare.onclick = function(e) {
    e.preventDefault();
    var top = window.screen.height - 500;
    top = top > 0 ? top / 2 : 0;

    var left = window.screen.width - 500;
    left = left > 0 ? left / 2 : 0;

    var uploadWin = window.open('mailto:?subject=Vaccini&body=' + document.URL);
    uploadWin.moveTo(left, top);
    uploadWin.focus();

    if (mailWindow.focus) {
        mailWindow.focus();
    }
    return false;
}