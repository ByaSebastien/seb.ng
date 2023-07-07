import { Validators } from "@angular/forms";
import { CustomValidators } from "src/app/core/validators/custom.validators";

export const BookForm = {
    isbn: [null, [Validators.required, Validators.maxLength(13)]],
    title: [null, [Validators.required, Validators.maxLength(255)]],
    description: [null, [Validators.maxLength(65535)]],
    releaseDate: [null, []],
    authorName: [null, []],
    file: [null, [CustomValidators.validExtensions("jpg", "png")]]
}