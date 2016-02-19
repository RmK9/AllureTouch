function shareCurrentPageOnFB() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(window.location.href) +
        "&t=" + document.title, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
    return false;
}

function shareCurrentPageOnTW() {
    window.open("https://twitter.com/home?status=" + escape(window.location.href),
        "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
    return false;
}

function shareCurrentPageOnGP() {
    window.open("https://plus.google.com/share?url=" + escape(window.location.href),
        "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
    return false;
}

function shareCurrentPageOnLI() {
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + escape(window.location.href) +
        "&title=" + document.title + "&summary=&source=", "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
    return false;
}

function shareCurrentPageOnPI() {
    window.open("https://pinterest.com/pin/create/button/?url=asdadsa" + escape(window.location.href) +
        "&description=" + document.title, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
    return false;
}
