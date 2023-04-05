

if(navigator.onLine){
    
}else{
    alert('Error 401 - Not Connected (Can not request Data)')
}
url = "https://api.nasa.gov/planetary/apod?api_key=7qjXfGJtmzm4cakoCt4wpr14eJwLD5xoDKdUFzrX"

    fetch(url)
        .then(resalut => {
            return resalut.json()
        })
        .then(data => {
            console.log(data)



            var url = data['url']
            var date = data['date']
            var c = data['copyright']
            var d = data['explanation']
            var titl = data['title']
           // var v = data['service_version']
            
            

            var img = document.getElementById('image');
            img.src = url;

            document.getElementById('time').innerHTML = date
            document.getElementById('copy').innerHTML = "© " + c 
            document.getElementById('in').innerHTML = d
           document.getElementById('topic').innerHTML = titl
           // document.getElementById('cou').innerHTML = v

        

        })
        //877da476-cd52-4144-9042-17cfc0193309