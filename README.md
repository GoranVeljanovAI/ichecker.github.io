# ichecker.github.io

# This is small project for work improvement
###### Firstly, I want to announce that this website is used only for Norna Ai analytics.The website is created to help company's employees to check images correction from the Data Base.
###### To better understand the application and the procces how it works you can visit the website at the following link https://goranveljanovai.github.io/ichecker.github.io/
## Start Guide

### Before you use the application first read the guide below:
#### 
     1. To test the application first you must to distinct all the image URLs in the database
     db.getCollection('product_data').distinct('images',{vendor:"vendor_region",date_record_creation:"DATE"})
     2. Open Notepad or text editor you prefer and then save to Desktop as .txt file.
     3. Copy only image URLs from the collection and than paste it into the text file. 
     4. Save changes.
     5. Go to application Upload the file and then click the check button
     6. Here you go, you've done the check.
# For more information contact the administrator at email goran.veljanov@norna.ai
