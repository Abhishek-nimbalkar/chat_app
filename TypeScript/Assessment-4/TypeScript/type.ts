// Question 1
// type Num=number;
// type Css="em"|"rem"|"px";

// type Both=`${Num}${Css}`

// let x:Both="90px";
// console.log(x);


// Question 2

type Success="OK"|"Create"|"Accepted";
type ClientError="Bad Request"|"Unautorized"|"Forbidden";
type ServerError="Inernal Server Error"|"Bad Gateway"|"Service Unavailable";
type NetworkSuccess={
    code:200
    message:Success
}
type NetworkClientSide={
    code:400,
    message:ClientError
}
type NetworkServerError={
    code:500
    message:ServerError
}

type NetworkStatus=NetworkClientSide|NetworkServerError|NetworkSuccess;

const obj:NetworkStatus={
    code:200,
    message:"OK"
}
