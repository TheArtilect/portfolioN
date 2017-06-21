class Project():
    ''' This class is for my projects
    Attributes:
        title (str):  Title of project.
        description (str): Description of project.
        details (str): Details of the project.
        url (str): Url link to website.
        source_code (str): Url link to github repo.
        tools (arr): Tools used in the development of project.
        thumbnail (str): Thumbnail preview image of project homepage.
        date (str): Date completed.
    '''

    def __init__(self, title, description, details, url, repo, tools, thumbnail, date):
        self.title = title
        self.description = description
        self.details = details
        self.url = url
        self.repo = repo
        toolString = ''
        i = 0
        while i < (len(tools) - 1):
            toolString += tools[i] + ", "
            i += 1
        toolString += "and " + tools[i] + '.'

        self.tools = toolString
        self.thumbnail = thumbnail
        self.date = date
