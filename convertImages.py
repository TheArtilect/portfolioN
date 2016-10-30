import os
import subprocess

# status = subprocess.call('mkdir' + ' test', shell=True)

def convert():
    original_path = os.getcwd()

    directory = "/home/legion/railing/u-portfolio/images_src/"
    destination = '/home/legion/railing/u-portfolio/images-jpg/'

    file_list = os.listdir(directory)

    os.chdir(directory)

    for picture in file_list:
        name = picture.split(".")[0]
        argument = " " + picture + " " + name + ".jpg"
        subprocess.call("convert" + argument, shell=True)
        os.rename(directory + name + '.jpg', destination + name + '.jpg')

    os.chdir(original_path)


convert()
