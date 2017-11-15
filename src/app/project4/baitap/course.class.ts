export class course{
    id: string;
    name: string;
    picture: string;
    summary: string;
    price: number;
    cat: string[];

    constructor( id: string, name: string, price: number, picture: string, summary: string,  cat: string[]){
        this.id=id;
        this.name=name;
        this.picture=picture;
        this.summary=summary;
        this.price=price;
        this.cat=cat;
    }
}

