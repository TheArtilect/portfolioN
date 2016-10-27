import my_projects


a = my_projects.blog
b = my_projects.simon

def change(arr):
    new = []
    for x in arr:
        new.append(x.__dict__)
    return new



def dicting(x):
    return x.__dict__

c = [a,b]


list((map(dicting, c)))

allKeys = {}

def keys(arr):
    listing = ''
    if (arr == my_projects.featured):
        listing = 'featured'
    else:
        listing = 'projects'
    count = 0
    for x in arr:
        allKeys[x["title"]] = [listing, count]
        count += 1
    return allKeys
    
print keys(my_projects.featured)