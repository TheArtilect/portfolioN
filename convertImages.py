import os
import subprocess
from shutil import copyfile

# status = subprocess.call('mkdir' + ' test', shell=True)

def convert():
    original_path = os.getcwd()

    #   use your own directory path

    directory = "/home/onyx/projects/u-portfolio/images/images_src/"

    # create images-jpg
    subprocess.call("mkdir" + " images/images-jpg", shell=True)

    destination = '/home/onyx/projects/u-portfolio/images/images-jpg/'

    file_list = os.listdir(directory)

    os.chdir(directory)

    for picture in file_list:
        if (os.path.isdir(picture) == False):
            name = picture.split(".")[0]
            argument = " " + picture + " " + name + ".jpg"
            subprocess.call("convert" + argument, shell=True)
            os.rename(directory + name + '.jpg', destination + name + '.jpg')

    os.chdir(original_path)


convert()
