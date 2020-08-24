import json
from textblob import TextBlob

#get JSON data
def readJSON(data):
    file=open("smallTwitter.json","r")
    checkFile=json.load(file)
    data.extend(checkFile)
    file.close()
    return data

def readSentiment(data):
    count=0
    totalPolarity=0
    totalObjectivity=0
    for item in data:
        count+=1
        text=TextBlob(item["text"])
        polarityNum=text.polarity
        objectivityNum=text.objectivity
        totalPolarity+=polarityNum
        totalObjectivity+=objectivityNum
    avgPolarity=totalPolarity/count
    avgObjectivity=totalObjectivity/count
    print("The average polerity is:", avgPolarity)
    print("Th average objectivity is:", avgObjectivity)

def main():
    data=[]
    sentimentData=[]
    readJSON(data)
    readSentiment(data)

main()
