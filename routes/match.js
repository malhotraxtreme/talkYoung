
const express = require('express');
const router = express.Router();
const users = require('../main/data.json');

router.get('/:id', (req, res) => {

	let user_id = req.params.id;

	let found = users.data.filter(x => {
		return x.Email == user_id
	});
	
	
	if (found.length) {
		matchify(found[0]);
		res.json(found);
	}
	else {
		res.status(400);
		res.json("User Not Found");
	}

});

function matchify(personObj){
	console.log(personObj);
	let scoreArr = [];
	
	for(let i=0;i<users.data.length;i++){
		scoreArr[i] = 1;
	}
	
	for(let h of personObj.Hobbies){
		for(let u=0;u<users.data.length;u++){
			let strHobbies = users.data[u].Hobbies.join("");
			if(strHobbies.indexOf(h)>=0){
				scoreArr[u]++;
			}
		}
	}

	for(let t of personObj.Topics){
		for(let u=0;u<users.data.length;u++){
			let strTopics = users.data[u].Topics.join("");
			if(strTopics.indexOf(t)>=0){
				scoreArr[u]++;
			}
		}
	}
	
	for(let m of personObj.MBTIPersonality){
		for(let u=0;u<users.data.length;u++){
			let strMbti = users.data[u].MBTIPersonality.join("");
			if(strMbti.indexOf(m)>=0){
				scoreArr[u]++;
			}
		}
		
	}
	
	for(let l of personObj.LanguageSet){
		for(let u=0;u<users.data.length;u++){
			let strLang = users.data[u].LanguageSet.join("");
			if(strLang.indexOf(l)>=0){
				scoreArr[u]++;
			}
		}
	}
	
	console.log(scoreArr.join(" - "));
}

module.exports = router;