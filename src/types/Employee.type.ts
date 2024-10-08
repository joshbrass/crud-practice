export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
}



export enum PageList {
    list,
    add,
    edit,
}