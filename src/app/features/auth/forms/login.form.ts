import { Validators } from "@angular/forms";

export const LoginForm = {
    username: [null, [ Validators.required ]],
    password: [null, [ Validators.required ]]
}