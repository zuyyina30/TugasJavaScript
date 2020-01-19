var a = {
	name : "Zuyyina Nisa Al Fadhilah",
	address : "Jl. Raya Kalibakung RT 1/3 Kec. Balapulang, Kab. Tegal, Jawa Tengah",
	hobbies : ["reading", "coding"],
	is_married : false,
	school : {
		HighSchool : "SMK Negeri 1 Slawi",
		University : null
	},
	skills : {
		skills :["Microsoft Office : 9","HTML : 8","CSS : 8","JS : 7"]
	}
}

function hasil(){
	return a
}

console.log(JSON.stringify(hasil()))