document.addEventListener('DOMContentLoaded', function() {


    // const clipboard_snippet_buttons = document.querySelectorAll('.offcanvas-body');
    const myElement = document.getElementById("toc-modal-wrap");
    // console.log(clipboard_snippet_buttons);

    // for (const li of document.querySelectorAll('#toc-modal-wrap>nav>ul>li>a')) {
    for (const li of document.querySelectorAll('#toc-modal-wrap li')) {
        
        li.addEventListener('click', function(e) {

            console.log(li);

            // const myModal = document.getElementById('offcanvasRight')
            // console.log(myModal);
            // myModal.dispose();

            // const href = li.getAttribute("href");
            // a = document.querySelectorAll(href)[0];
            // // a.focus();
            // a.focus({ preventScroll: false });
            // console.log(a)

        }, false);

    }




    // for (const child of myElement.children) {
    //       // console.log(child);
    //       child.addEventListener('click', function(e) {

    //         console.log(child);
    //         // child.focus();
    //         // child.focus({ preventScroll: true });

    //     }, false);

    // }


    // clipboard_snippet_buttons.forEach(clipboard_btn => {

    //     clipboard_btn.addEventListener('click', function(e) {

    //         console.log('apa');
    //     }, false);
    // });



});



