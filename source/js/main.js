(function() {
    var openFormButton = document.querySelector('.btn-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');
    if (openFormButton) {
        openFormButton.addEventListener('click', function() {
            VALID.form.open();
        })
    }
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (VALID.form.isValid()) {
                console.log('Форма заполнена верно!');
            } else {
                console.log('Введенные данные не прошли проверку на валидность! Форма заполнена неверно!');
            }
        })
    }
    if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;
            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            VALID.navigation.toggleToActiveLink(target);
        });
    }
}());