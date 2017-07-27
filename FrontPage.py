from Handler import Handler
from my_projects import featured, special

class FrontPage(Handler):
    def get(self):
        return self.render("index.html", featured=featured, special=special)
