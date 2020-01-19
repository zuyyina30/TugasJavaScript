function satu(cb){
	setTimeout((cbBeta) => {
		cb(' Beta ')
	},200)
}

function dua(){
	return 'Arkademy'
}

function tiga() {
	return ' Class'
}


function tahun(){
	return ' 2020'
}

function hasil(){
		satu((cbBeta)=>{
		const a = dua()
		const b = cbBeta
		const c = tiga()
		const d = tahun()
		document.write(a,b,c,d)
	})
}

hasil()

