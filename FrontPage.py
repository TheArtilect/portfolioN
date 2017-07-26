from Handler import Handler
from my_projects import featured, special

class FrontPage(Handler):
    def get(self):
        for a in featured:
            if a.title == "TacoHub":
                print a.title
                a.get_articles()
        return self.render("index.html", featured=featured, special=special)
