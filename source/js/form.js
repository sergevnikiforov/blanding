(function() {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
    };
    me.close = function() {
        form.classList.add('is-hidden');
    };
    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;
        if (!me.isAllCompleted(requiredFields)) {
            alert('Заполните, пожалуйста, все необходимые поля!');
            return false;
        } else if (!VALID.validation.isEmail(emailValue)) {
            alert('Неверно введенный email!');
            return false;
        } else if (!VALID.validation.isNumber(numberValue)) {
            alert('Некорректно введенный номер!');
            return false;
        }
        return true;
    };
    me.isAllCompleted = function(data) {
        var result = true;
        for (var i = 0; i < data.length; i++) {
            if (!VALID.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }
        return result;
    };
    VALID.form = me;
}());