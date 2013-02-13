module.exports = {
	frequency:1000*60*60*24*3.5, // 3.5 days in millisecondes
	protocol:{
		protocol:"SMTP",
		service:"Gmail",
		user:"",
		pass:""
	},
	from:{
		subname:"Your subname",
		name:"Your name",
		mail:"yourmail@yourprovider.tld",
	},
	to:{
		subname:"Your friend subname",
		name:"your friend name",
		mail:"hisMail@gmail.com"
	},
	subject:[
		"wifi",
		"wifi fabelier",
		"meeting wifi",
		"accés wifi"
	],
	header:[
		"hello",
		"salut",
		"bonjour",
		"hi"
	],
	message:[
		"Peux tu generer un code wifi pour mardi soir et mercredi soir s'il te plait ?",
		"peux tu generer un code WIFI pour mardi soir et mercredi soir, s'il te plait ?",
		"S'il te plait, peux tu generer un code WIFI pour mardi soir et mercredi soir?",
		"stp, peux tu generer un code WIFI pour mardi soir et mercredi soir?"
	],
	thanks:[
		"Merci beaucoup",
		"merci",
		"thank you",
		"thx !",
	],
	footer:[
		":: sent from smartphone ::",
		"-sent from my Ipad- ",
		" envoyé de mon vieux pc sous windows ",
		""
	]
}