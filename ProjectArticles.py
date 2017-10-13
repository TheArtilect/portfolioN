import json
import httplib2
import requests
import pprint

from Handler import Handler


class ProjectArticles(Handler):
    def get(self, article_name):

        url = "https://chronicle-170419.appspot.com/projects/%s/JSON" % article_name
        h = httplib2.Http()
        results = json.loads(h.request(url, "GET")[1])
        # pprint.pprint(results)
