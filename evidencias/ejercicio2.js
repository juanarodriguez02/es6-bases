//PROMISES NEEDLE 
//API HARRY POTTER 

//let endpoint = 'https://urlhaus-api.abuse.ch/v1/urls/recent/'

const needle = require('needle')

const url = "https://hp-api.herokuapp.com/api/characters/students"

needle('get',url)
	.then((response)=>{
		console.log(response)
	})
	.then((data) => {
		console.log(data)
	})
	
	.catch((e) => console.log(e))

