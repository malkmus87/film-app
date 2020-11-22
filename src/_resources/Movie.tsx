class MovieResource {
    async search(searchKey:string){
        const response = await fetch('http://www.omdbapi.com/?apikey=e3b349a&s='+searchKey);
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

}
export default new MovieResource();