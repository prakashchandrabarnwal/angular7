export class Recipe {
    public name:string;
    public dscription:string;
    public imagePath:string;

    constructor(name:string,desc:string,imagePath:string){
        this.name=name;
        this.dscription=desc;
        this.imagePath=imagePath
    }
}