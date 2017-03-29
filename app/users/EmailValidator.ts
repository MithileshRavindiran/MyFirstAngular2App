/**
 * Created by x073880 on 3/14/2017.
 */


import {Control, ControlGroup} from 'angular2/common';


export class EmailValidator {
    static checkValidEmail(control:Control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var email = control.value;
        var valid = regex.test(control.value);
        return valid ? null : { checkValidEmail: true };
    }

}