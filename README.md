# CodekoTest

## Server Side

It has been create with CRUD Operations for CloudFunctions firebase using Nodejs.

![firebaseWithNodejs](https://github.com/AbdullahTaher93/CodekoTest/blob/master/images/firebasewithnodejs.png)

### 1) Add a New Item
(https://us-central1-codeko-3b7b2.cloudfunctions.net/user/AddNewItem)

    request method: POST
            Content-Type: application/x-www-form-urlencoded || raw(json)
            {
                "idItem": "",
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