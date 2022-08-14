export interface Event {
        id:number;
        name:string;
        date:string;
        time: string;
        price: number;
        imageUrl: string;
        location: {
            address: string;
            city: string;
            country: string
        }    
    }
