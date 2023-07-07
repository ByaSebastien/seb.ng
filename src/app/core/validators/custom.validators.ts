import { AbstractControl, ValidatorFn } from "@angular/forms";

export const CustomValidators = {
    validExtensions: (...extensions: string[]): ValidatorFn => {
        return control => {

            console.log(control.value);
            

            if(!control.value) {
                return null;
            }
            if(extensions.includes(control.value.split('.')[1])) {
                return null;
            }
            return { fileExtensionError: { ext: control.value.split('.')[1] } }
        }
    }
}
