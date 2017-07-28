from Handler import Handler
from my_projects import featured, special

class FrontPage(Handler):
    def get(self):
        info = {}
        for project in featured + [special]:
            print project.title
            # print project.get_articles()
            articles = project.get_articles()
            number_of_articles = len(articles)
            info[project.title] = [number_of_articles, articles]
        return self.render("index.html", featured=featured, special=special, info=info)
