interface IUserSignUp{
    emailId?:string,
    userName?:string,
    phone?:string,
    password?:string,
    imgUrl?:string
}
interface IUserLogin{
    emailId?:string,
    password?:string
}

export {IUserSignUp,IUserLogin}