document.addEventListener('DOMContentLoaded', function() {


    // const clipboard_snippet_buttons = document.querySelectorAll('.offcanvas-body');
    const navbar_btn = document.getElementById("navbar-btn");
    const dropdown_menu_pet = document.getElementById("dropdown-menu-pet");
    // const navbar_btn = document.getElementById("navbar-btn");

    // const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    // const dropdown = new bootstrap.Dropdown(dropdownElementList[0]);

    // let test_dropdown = document.getElementById("test-dropdown");
    // new bootstrap.Dropdown(test_dropdown, {}).show()

    // const dropdown = new bootstrap.Dropdown(dropdownElementList[0], {
    //   popperConfig(defaultBsPopperConfig) {
    //     // const newPopperConfig = {...}
    //     // use defaultBsPopperConfig if needed...
    //     // return newPopperConfig
    //   }
    // });


    // console.log(dropdown);
    // dropdown.hide();


     navbar_btn.addEventListener('click', function(e) {

            dropdown_menu_pet.classList.add("show");

            // console.log(navbar_btn);

            // console.log(dropdown);
            // dropdown.hide();
            // const dd = bootstrap.Dropdown.getOrCreateInstance(test_dropdown);
            // console.log(dd);

            // dd.hide();

            // const myModal = document.getElementById('offcanvasRight')
            // console.log(myModal);
            // myModal.dispose();

            // const href = li.getAttribute("href");
            // a = document.querySelectorAll(href)[0];
            // // a.focus();
            // a.focus({ preventScroll: false });
            // console.log(a)

        }, false);


    // // console.log(clipboard_snippet_buttons);

    // // for (const li of document.querySelectorAll('#toc-modal-wrap>nav>ul>li>a')) {
    // for (const li of document.querySelectorAll('#toc-modal-wrap li')) {
        
    //     li.addEventListener('click', function(e) {

    //         console.log(li);

    //         // const myModal = document.getElementById('offcanvasRight')
    //         // console.log(myModal);
    //         // myModal.dispose();

    //         // const href = li.getAttribute("href");
    //         // a = document.querySelectorAll(href)[0];
    //         // // a.focus();
    //         // a.focus({ preventScroll: false });
    //         // console.log(a)

    //     }, false);

    // }




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



