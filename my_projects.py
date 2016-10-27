import webbrowser
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
                ("A url shortener microservice.  Shortened url addresses "
                "redirect to the original url.  First project using MongoDB."),
                "https://u-short.herokuapp.com",
                "https://github.com/TheArtilect/urlShortener",
                ["MongoDB", "Express", "Node", "Heroku"],
                "UrlShortener.png",
                "Sept. 2016")


weather = Project("Local Weather",
                ("Fullstack javascript local weather app, utilizing Weather ", 
                "Underground API.  An improvement on previous local weather project."),
                "https://weather-ia.herokuapp.com/",
                "https://github.com/TheArtilect/weather",
                ["Express", "Node", "Heroku"],
                "weather.png",
                "Oct. 2016")

simon = Project("Simon Says",
                ("A Simon Says game. First project utilizing audio elements and", 
                " setTimeout()."),
                "https://simon-says-ia.herokuapp.com",
                "https://github.com/TheArtilect/simon-says",
                ["Ruby on Rails", "Heroku"],
                "SimonSays.png",
                "Jul. 2016")

quote = Project("Random Quote Generator",
                "A few of my favorite quotes.  My first Javascript project.",
                "https://rand-quote-gen.herokuapp.com",
                "https://github.com/TheArtilect/random-quote",
                ["Ruby on Rails", "Heroku"],
                "RandomQuote.png",
                "Mar. 2016")


tictactoe = Project("Tic Tac Toe",
                "A tic tac toe game.",
                "https://theartilect.github.io/TickyTacky",
                "https://github.com/TheArtilect/TickyTacky",
                ["Github"],
                "TicTacToe.png",
                "Jul. 2016")


calculator = Project("Javascript Calculator",
                "A fully functional simple calculator. First project "
                "utilizing 'this' in js.",
                "https://theartilect.github.io/calculator",
                "https://github.com/TheArtilect/calculator",
                ["Github"],
                "calc.png",
                "Jun. 2016")

pomodoro = Project("Pomodoro Productivity Timer",
                ("A timer that can be used to for cooking pomodoro sauce or ", 
                "scheduling productivity.  First project utilizing ", 
                "setInterval()."),
                "https://pomodoro-timer-ia.herokuapp.com",
                "https://github.com/TheArtilect/pomodoro",
                ["Ruby on Rails", "Heroku"],
                "Pomodoro.png",
                "Jun. 2016")

metadata = Project("File Metadata",
                ("A file metadata microservice.  Uploading files will return ",
                "a  JSON object of the file's name, file type, and size",
                " in bytes."),
                "https://metadata-ia.herokuapp.com",
                "https://github.com/TheArtilect/metadata",
                ["Express", "Node", "Heroku"],
                "metadata.png",
                "Oct. 2016")

header = Project("Request Header Parser",
                ("A request header parser microservice that will return your ", 
                "browser IP address, language, and operating system."),
                "https://header-parser-ia.herokuapp.com",
                "https://github.com/TheArtilect/headerParser",
                ["Express", "Node", "Heroku"],
                "headerParser.png",
                "Sep. 2016")

timestamp = Project("TimeStamp",
                "A timestamp microservice.  First Node api project.",
                "https://timestamp-microservice-ia.herokuapp.com/",
                "https://github.com/TheArtilect/timestamp",
                ["Express", "Node", "Heroku"],
                "headerParser.png",
                "Sep. 2016")


twitch = Project("Twitch",
                "For tracking some Twitch streamers.  Utilized Twitch API.",
                "https://timestamp-microservice-ia.herokuapp.com",
                "https://github.com/TheArtilect/timestamp",
                ["Ruby on Rails", "Heroku"],
                "twitch.png",
                "May 2016")



wiki = Project("Wiki",
                ("For searching and viewing a listing of wikipedia articles. ",  
                "Utilized Wikipedia API."),
                "https://wiki-it-ia.herokuapp.com",
                "https://github.com/TheArtilect/wiki",
                 ["Ruby on Rails", "Heroku"],
                "wiki.png",
                "Apr. 2016")

finance = Project("Finance Tracker",
                ("Ruby on Rails social stocks tracker project built using ", 
                "scaffolding and bootstrap.  Functionality complete, ",
                "styling in progress."),
                "https://thawing-plains-40720.herokuapp.com/users/sign_in",
                "https://github.com/TheArtilect/finance-tracker",
                 ["Ruby on Rails", "Heroku"],
                "finance.png",
                "Mar. 2016")

tribute = Project("Tribute Project",
                ("Tribute Project about Hunter S. Thompson.  My first HTML and",
                " CSS project."),
                "https://hunter-s-tribute.herokuapp.com",
                "https://github.com/TheArtilect/tribute",
                 ["Ruby on Rails", "Heroku"],
                "tribute.png",
                "Feb. 2016")

blog = Project("AlphaBlog",
                ("My first project, a Ruby on Rails blog  built from the ",
                "ground up.  Functionality finalized, styling and ",
                "content in progress."),
                "https://project-prometheus-alphablog.herokuapp.com",
                "https://github.com/TheArtilect/tribute",
                 ["Ruby on Rails", "Heroku"],
                "blog.png",
                "Jan. 2016")



projects = [ quote.__dict__, tictactoe.__dict__, calculator.__dict__, 
            pomodoro.__dict__, metadata.__dict__, header.__dict__, 
            timestamp.__dict__, twitch.__dict__, wiki.__dict__, 
            finance.__dict__, tribute.__dict__, blog.__dict__]

featured = [image.__dict__, shortener.__dict__, weather.__dict__, 
            simon.__dict__]



#   javascript template
main_content = '''
    featured = {featured_insert}

    projects = {project_insert}

'''

#   creates javascript file of projects (featured and the rest)
def createjs(featured, projects):
    
    output_file = open("js/projects.js", 'w')

    featured_content = main_content.replace('{featured_insert}',
                   json.dumps(featured))

    rendered_content = featured_content.replace("{project_insert}",
                    json.dumps(projects))

    output_file.write(rendered_content)
    output_file.close()


    webbrowser.open('index.html', new=2)





createjs(featured, projects)
