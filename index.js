//decalre constant variables
const express = require("express"); //Express
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

//Encryption keys
const publicVapidKey='BOdBs-vCJpj2rQmi3jsX89WogjT3tgEXsm1Ckfl5Yk6NY_1QVoTFpzHv4koSvEL8YSvGmz9p8LGwzQX41jeATBI';
const privateVapidKey='TglsDNcw-xhxfWFi_PvJ1WyrDhrbA7_7QDp2BRNOlT8';


webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


