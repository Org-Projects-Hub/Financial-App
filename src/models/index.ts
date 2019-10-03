export type action =  {
    type : string,
    school ?: string,
    className ?: string,
    code ?: string
}

export type User =  {
    firstName : string,
    lastName : string,
    username : string,
    email: string
}
export type Class =  {
    className : string,
    school : string,
    code : string,
}