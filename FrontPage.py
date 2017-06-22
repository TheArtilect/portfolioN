from Handler import Handler
from my_projects import featured, projects, special

class FrontPage(Handler):
    def get(self):
        return self.render("index_revamp.html", featured=featured, special=special)
