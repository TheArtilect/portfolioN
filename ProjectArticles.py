import json
import httplib2
import requests
import pprint

from Handler import Handler


class ProjectArticles(Handler):
    def get(self, project_name):

        url = "https://chronicle-170419.appspot.com/projects/%s/JSON" % project_name
        h = httplib2.Http()
        articles = json.loads(h.request(url, "GET")[1])["Posts"]
        # pprint.pprint(results)
        return self.render('articles.html', articles=articles, project_name=project_name)
