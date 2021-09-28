const getImagen = async() => { // para el manejo de errores en funciones async se usa try catch
    try {
        const apiKey = 'w6KmcEeHPFbokJszfOrxxssvqOrJww5x';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json(); //aplico desestructuracion
        const {url} =  data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        //manejo del error
        console.log(error)
    }
    
}

getImagen();
