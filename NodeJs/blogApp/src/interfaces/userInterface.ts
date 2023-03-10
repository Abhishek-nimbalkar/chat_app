interface IUserSignUp{
    emailId?:string,
    userName?:string,
    phone?:string,
    password?:string
}
interface IUserLogin{
    emailId?:string,
    password?:string
}

export {IUserSignUp,IUserLogin}