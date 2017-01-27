function minLength() {

    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.minLength = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue) || typeof viewValue == 'string' && viewValue.length >= attrs.minLength) {
                    return true;
                }

                return false;
            };
        }
    };
}

export default minLength;
