import json
from projects import Project

image = Project("Image Search", 
                "An image search microservice using the Google Custom Search API.", 
                "https://imgsearch-ia.herokuapp.com",
                "https://github.com/TheArtilect/imageSearch",
                ["MongoDB", "Express", "Node", "Heroku"],
                "ImageSearch.png",
                "Oct. 2016")
                
shortener = Project("Url Shortener", 
                "A url shortener microservice.  Shortened url addresses redirect "
                "to the original url.  First project using MongoDB.", 
                "https://u-short.herokuapp.com",
                "https://github.com/TheArtilect/urlShortener",
                ["MongoDB", "Express", "Node", "Heroku"],
                "UrlShortener.png",
                "Sept. 2016")
                
                
weather = Project("Local Weather", 
                "Fullstack javascript local weather app, utilizing Weather "
                "Underground API.  An improvement on previous local weather project.",
                "https://weather-ia.herokuapp.com/",
                "https://github.com/TheArtilect/weather",
                ["Express", "Node", "Heroku"],
                "weather.png",
                "Oct. 2016")
                

projects = {"image": image, "weather": weather }