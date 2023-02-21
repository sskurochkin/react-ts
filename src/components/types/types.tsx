export interface IAddress {
    city: string
    street: string
    zipcode: string
}

export interface IUser {
    name:string
    email:string
    id:number
    address: IAddress

}