const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors= require('cors');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
var serviceAccount = require("./permiso.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://codeko-3b7b2.firebaseio.com"
});

  const db = admin.firestore();
  const app=express();
  app.use(cors({origin:true}));
  app.use(bodyParser.json());

  
app.post('/AddNewItem', async (req, res) => {
    const Item=req.body;
    await db.collection('Items').doc(req.body.idItem).set(Item);
    res.status(200).send()
     
  });
  app.post('/EditItem', async (req, res) => {
    const Item=req.body;
    await db.collection('Items').doc(req.body.idItem).update(Item);
    res.status(200).send()
     
  });

  app.post('/DeleteItem', async (req, res) => {
    
    await db.collection('Items').doc(req.body.idItem).delete();
    res.status(200).send()
     
  });


  app.post('/GetItem', async (req, res) => {
    let oneitem=[]
    const item= await db.collection('Items').doc(req.body.idItem).get();
        if(item.docs.length>0)
        oneitem.push(item.data())
      
      res.json(oneitem)
     
  });


  app.get('/GetAll', async (req, res) => {
    let Allitems=[]
    const items= await db.collection('Items').get();
    if(items.docs.length>0)
    for (const item of items.docs) {
        Allitems.push(item.data())
     }
     res.json(Allitems)
     
  });


  exports.user = functions.https.onRequest(app);