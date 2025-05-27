export class PeliculaModel {
    id: string;
    url: string;
    primaryTitle: string;
    primaryImage: string;

    description: string;
    interest: Array<string>;
    genres: Array<string>;
    director: string;

    constructor(){
        this.id = '';
        this.url = '';
        this.primaryTitle = '';
        this.primaryImage = '';
        this.description = '';
        this.interest = [];
        this.genres = [];
        this.director = '';
    }
}
