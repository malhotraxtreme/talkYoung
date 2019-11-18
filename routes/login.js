
const express = require('express');
const router = express.Router();
const users = require('../main/data.json');



router.post('/', (req, res) => {
	
	var user_id = req.body.email;
    var pwd = req.body.password;
	
	
	//		res.send('Hello World !   ' + pwd + x.Password);
	
	var found = users.data.filter(x=>{
		return x.Email===user_id && x.Password===pwd;
	});
	
	if(found.length){
		res.json(found);
	}
	else{
		res.status(400);
		res.json("User Not Found");
	}
	
    

});


module.exports = router;