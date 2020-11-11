# CodekoTest

This is a so simple project to buy and sell products. this project contains most of all the CodeKo company technical tests which are required.

## Server Side

It has been created with CRUD Operations for CloudFunctions firebase using Nodejs.

![firebaseWithNodejs](https://github.com/AbdullahTaher93/CodekoTest/blob/main/images/firebasewithnodejs.png)

### 1) Add a New Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/AddNewItem)

    request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": "",
                "precio":int,
                "des": "",
                "url": ""
            }

### 2) Update an Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/Edittem)

    request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": "",
                "des": "",
                "url": ""
            }

### 3) Delete an Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/DeleteItem)

        request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": ""
            }

### 4) Get All Items
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/GetAll)

        request method: Get
        response: JSON with All Items
            
### 5) Get an Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/GetItem)

    request method: POST
                Content-Type: application/x-www-form-urlencoded || raw(json)
                {
                    "idItem": ""
                }

    response: JSON with Item Data

### 6) Buy an Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/Buy)

    request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": "",
                "precio":int,
                "des": "",
                "url": ""
            }

### 7) Get All buy Items 
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/GetAllBuy)

        request method: Get
        response: JSON with All Items


### 8) Delete an buy Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/DeleteItemBuy)

        request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": ""
            }


## Client Side 

It has been created with Javascript, Jquery, Html and Css.


### 1) Home Page

![HomePage](https://github.com/AbdullahTaher93/CodekoTest/blob/main/images/HomePage.png)
### 2) Sell Page

![SellPage](https://github.com/AbdullahTaher93/CodekoTest/blob/main/images/SellPage.png)
### 3) Store Page

![BuyPage](https://github.com/AbdullahTaher93/CodekoTest/blob/main/images/BuyPage.png)
### 4) Pay Page

![PayPage](https://github.com/AbdullahTaher93/CodekoTest/blob/main/images/PayPage.png)





