import os

directoryPath = input("enter the path of directory:")
fileName = input("enter filename:")
fileExtension = input("enter file extension:")
size = float(input("enter size of file (mb):"))

if  size < 0: 
    print("invalid size") 


def copyFile(directoryPath,copyPath,file):
    origFile = open(f"{directoryPath}/{file}","r")
    fileData = origFile.read()
    copyFile = open(f"{copyPath}/{file}","w")
    copyFile.write(fileData)
    
def main():
    filteredFiles = []

    for files in allFiles:
        if fileName in files and fileExtension in files:
            fsize = (os.path.getsize(f"{directoryPath}/{files}"))
            # print(fsize/1024/1024)
            if(size == fsize):
                filteredFiles.append(files)
            

    if(len(filteredFiles)==0):
        print("file not found")
    else:
        print(filteredFiles)
        
    try:
        edit = input("you want to edit file ? (Y/N)")
        if edit == "Y" or edit == "y" :
            action = input("action (copy/move/delete):")
            if action == "copy":
                copyPath = input("enter copy path:")
                for file in filteredFiles:
                    copyFile(directoryPath,copyPath,file)
                print("files copied")
            
            elif action == "move":
                movePath = input("enter move path:")
                for file in filteredFiles:
                    copyFile(directoryPath,movePath,file)
                    os.remove(f"{directoryPath}/{file}")
                print("files moved")
            
            elif action == "delete":
                for file in filteredFiles:
                    os.remove(f"{directoryPath}/{file}")
                print("files deleted")
            else:
                print("no such action possible")
        
    except:
        print("unable to perform action")



try:
    allFiles = os.listdir(f"{directoryPath}")
    main()
except:
    print("file not found")


