document.addEventListener('DOMContentLoaded', function() {


    // unreal snippet --------------------------

    const clipboard_snippet_buttons = document.querySelectorAll('.clipboard-snippet-copy-btn');

    clipboard_snippet_buttons.forEach(clipboard_btn => {

        clipboard_btn.addEventListener('click', function(e) {
            var data = clipboard_btn.dataset.clipboard_snippet;
            navigator.clipboard.writeText(data);
            // console.log(data);
        }, false);
    });

    const clipboard_expand_buttons = document.querySelectorAll('.clipboard-snippet-expand-btn');

    clipboard_expand_buttons.forEach(expand_btn => {

        expand_btn.addEventListener('click', function(e) {
            // var data = expand_btn.dataset.clipboard_snippet;

            // var parent_div = expand_btn.parentNode;

            var vex_div = expand_btn.parentNode.getElementsByClassName("vex-snippet")[0];
            console.log(vex_div);

            if(vex_div.style.display == "block") {
            vex_div.style.display = "none";
            }
            else {
                vex_div.style.display = "block";
            }

            // navigator.clipboard.writeText(data);
            // console.log(data);
        }, false);
    });


});