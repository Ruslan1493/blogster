document.onload = (function () {
    function redirect(page) {
        if(page === 'strength'){
            location.href = "../pages/strength.html";
        }else if(page === 'fat loss'){
            location.href = "../pages/fat_loss.html";
        }else if(page === 'condition'){
            location.href = "../pages/conditioning.html";
        }
    };

    function emailChecker(){
        let email = $(this).val();
        email.val("Yes!");
    };
    return {
        redirect: redirect,
    };
})();

