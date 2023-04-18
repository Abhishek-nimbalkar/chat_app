import * as yup from "yup"

const YupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
const YupEmailSchema=yup.object().shape({
    email: yup.string().email().required(),

});
const YupPasswordSchema=yup.object().shape({
    password: yup.string().min(8).max(32).required()

});

export {YupSchema,YupEmailSchema,YupPasswordSchema}