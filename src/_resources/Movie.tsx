class MovieResource {
    private url;
    constructor(){
        this.url='http://www.omdbapi.com/?apikey=e3b349a'
    }
    
    async search(searchKey:string){
        const response = await fetch(`${this.url}&s=${searchKey}`);
        const body = await response.json();
        let status = response.status;
        if(body.Response === "False"){
            status = 500;
        }
        return({
            status:status,
            body: body.Search !== undefined ? body.Search : []
        });
    }
    async get(imdbID:string){
        const response = await fetch(`${this.url}&i=${imdbID}`);
        const body = await response.json();
        let status = response.status;
        if(response.status!==200){
            return ({body:null,status:status})
        }
        return({
            status:status,
            body: body
        });
    }
}
export default new MovieResource();