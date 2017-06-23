from Handler import Handler
from my_projects import projects

class OtherProjects(Handler):
    def get(self):
        return self.render("other_projects.html", projects=projects)
