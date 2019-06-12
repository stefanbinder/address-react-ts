import * as Yup from "yup";

export class State {
    public code: string;
    public name: string;
}

export const StateValidation = Yup.object({
    code: Yup.string().required('Required code').min(2).max(2),
    name: Yup.string().required('Required name'),
});

export const StateListValidation = Yup.object({
    states: Yup.array().of( StateValidation ),
});
