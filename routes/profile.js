
const express = require('express');
const router = express.Router();
const users = require('../main/data.json');
const fs = require('fs');



router.get('/:id', (req, res) => {

  let user_id = req.params.id;
  console.log("hell " + user_id);


  let found = users.data.filter(x => {
    return x.Email == user_id
  });

  if (found.length) {
    res.json(found);
  }
  else {
    res.status(400);
    res.json("User Not Found");
  }

});

router.post('/', (req, res) => {   //To be tested after integration


  console.log(req.body.Hobbies + "\n\n");


  let newUser = {
    "Id": req.body.Id, // To be changed later
    "Name": req.body.Name,
    "DOB": req.body.Dob,
    "Email": req.body.Email,
    "Password": req.body.Password,
    "Gender": req.body.Gender,
    "MaritalStatus": req.body.Maritalstatus,
    "Address": req.body.Address,
    "Phone": req.body.Phone,
    "Hobbies": req.body.Hobbies,
    "Topics": req.body.Topics,
    "Volunteer": req.body.Volunteer,

    "MBTIPersonality": req.body.MBTIPersonality,
    "JobDomain": req.body.JobDomain,
    "LanguageSet": req.body.LanguageSet,
    "ProfileBio": req.body.ProfileBio,
    "DpLink": req.body.DpLink   // To be changed later
  }


  fs.readFile('main/data.json', function (err, users) {
    if (err) console.log(err);
    var user_json = JSON.parse(users);
    user_json.data.push(newUser);


    fs.writeFile("main/data.json", JSON.stringify(user_json), (err, result) => {
      if (err) console.log(err);
    });

    res.status(400);
    res.json(user_json);
  });


});


module.exports = router;