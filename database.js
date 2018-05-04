var Sequelize = require('sequelize');
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://help-service-aedf6.firebaseio.com"
});


var ref = admin.database().ref("food");
var foods = [];
ref.orderByChild("name").on("child_added", function(snapshot) {
  console.log(snapshot.val());
  foods.push(snapshot.val());
});

module.exports = {
  getRArray: function() {
    return foods;
  }
};



module.exports._foods = foods;
