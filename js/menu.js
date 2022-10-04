document.addEventListener('DOMContentLoaded', function() {

    // TOC

    const toc_btn = document.getElementsByClassName('toc-btn')[0];

    if(toc_btn){

        const toc_content = document.getElementsByClassName('toc-content')[0];

        toc_btn.addEventListener('click', function(e) {

             if (toc_content.classList.contains('visible')) {
                    // console.log('remove');
                    toc_content.classList.remove('visible');
             }
             else {
                // console.log('add')
                toc_content.classList.add('disp-block');
                // seems like we need this for a smooth fade up...
                // maybe to force some calculation...
                toc_content.clientWidth;
                toc_content.classList.add('visible');
             }
             
        }, false);
    }
    /*
    if(toc_btn){
        toc_btn.addEventListener('click', function(e) {

            const toc_aside = document.getElementsByClassName('toc-aside')[0];

            if (window.getComputedStyle(toc_aside).right == "0px") {
                toc_aside.style.right = "-310px";
                // console.log('open');
             }
             else {
                toc_aside.style.right = "0px";
                // console.log('close');
             }
        }, false);
    }
    */

    // unreal snippet --------------------------

    const clipboard_snippet_buttons = document.querySelectorAll('.clipboard-snippet-copy-btn');

    clipboard_snippet_buttons.forEach(clipboard_btn => {

        clipboard_btn.addEventListener('click', function(e) {
            var data = clipboard_btn.dataset.clipboard_snippet;
            navigator.clipboard.writeText(data);
            // console.log(data);
        }, false);
    });


    // mobile menu --------------------------

    var trigger = document.getElementsByClassName('mobile-menu-trigger')[0];
    var menu_wrap = document.getElementsByClassName('menu-wrap')[0];

    trigger.addEventListener('click', function(e) {

         if (menu_wrap.classList.contains('visible')) {
                // console.log('remove');
                menu_wrap.classList.remove('visible');
         }
         else {
            // console.log('add')
            menu_wrap.classList.add('disp-block');
            // seems like we need this for a smooth fade up...
            // maybe to force some calculation...
            menu_wrap.clientWidth;
            menu_wrap.classList.add('visible');
         }
         
    }, false);

    menu_wrap.addEventListener('click', function(e) {
        // console.log('remove by menu-wrap');
        menu_wrap.classList.remove('visible');
    }, false);

    // when transition is done, remove
    menu_wrap.addEventListener('transitionend', function() {

        if (!menu_wrap.classList.contains('visible')) {
                // console.log('transition done');
                menu_wrap.classList.remove('disp-block');
        }
    }, false);

});

