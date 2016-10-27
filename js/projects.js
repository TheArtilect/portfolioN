

    function displayAll(){

        array = [{"description": "An image search microservice using the Google Custom Search API.", "title": "Image Search", "url": "https://imgsearch-ia.herokuapp.com", "repo": "https://github.com/TheArtilect/imageSearch", "date": "Oct. 2016", "tools": ["MongoDB", "Express", "Node", "Heroku"], "thumbnail": "ImageSearch.png"}, {"description": "A url shortener microservice.  Shortened url addresses redirect to the original url.  First project using MongoDB.", "title": "Url Shortener", "url": "https://u-short.herokuapp.com", "repo": "https://github.com/TheArtilect/urlShortener", "date": "Sept. 2016", "tools": ["MongoDB", "Express", "Node", "Heroku"], "thumbnail": "UrlShortener.png"}, {"description": "Fullstack javascript local weather app, utilizing Weather Underground API.  An improvement on previous local weather project.", "title": "Local Weather", "url": "https://weather-ia.herokuapp.com/", "repo": "https://github.com/TheArtilect/weather", "date": "Oct. 2016", "tools": ["Express", "Node", "Heroku"], "thumbnail": "weather.png"}]
        console.log("this worked")
        console.log(array)

    }

    $(document).ready(displayAll);
    $(document).on("page:load", displayAll)


