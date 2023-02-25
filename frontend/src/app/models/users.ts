export class User{
    firstame: string;
    lastname: string;
    username: string;
    password: string;
    phoneNumber: number;
    email: string;
    ogranizationName: string;
    ogranizationAddress: string;
    organizationMN: number;
    status: string;
    type: number;
}


export interface Profile{
    _id:  string;
    name: string;
    imagePath: string;
}