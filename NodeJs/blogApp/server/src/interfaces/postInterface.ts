export interface Ipost{
    userEmail?:string,
    title?:string,
    body?:string,
    images?:Array<string>,
    comments?:Array<object>,
    likes?:Array<object>
}