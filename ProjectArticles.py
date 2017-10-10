import json
import httplib2
import requests
import pprint

from Handler import Handler


class ProjectArticles(Handler):
    def get(self):

        project = "Monitor"
        url = "https://chronicle-170419.appspot.com/projects/%s/JSON" % project
        h = httplib2.Http()
        results = json.loads(h.request(url, "GET")[1])
        
