document.addEventListener('DOMContentLoaded', function() {

    // unreal snippet --------------------------

    const ue_copy_buttons = document.querySelectorAll('.unreal-copy-btn');

    ue_copy_buttons.forEach(ue_copy_btn => {

        ue_copy_btn.addEventListener('click', function(e) {
            var data = ue_copy_btn.dataset.unreal;
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

