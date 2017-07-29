from Handler import Handler
from my_projects import featured, special

class FrontPage(Handler):
    def get(self):
        for project in featured:
            print project.articles

        return self.render("index.html", featured=featured, special=special)
