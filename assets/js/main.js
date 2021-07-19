

function consumerApi(url) {
	let request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send();
	return request.responseText;
}


let caseBrasil = "Casos no Brasil";
let caseArgentina = "Casos na Argentina"

function brasil() {

	let brazil = consumerApi("https://api.covid19api.com/country/brazil/status/confirmed ")
	let argentina = consumerApi("https://api.covid19api.com/country/argentina/status/confirmed")
	let covidAr = JSON.parse(argentina)
	let covid = JSON.parse(brazil)


	//pega a data 

	let objData = covid.map(function (item, indice) {
		return item.Date;
	});

	//quantas ocorrencias por mes
	let ocorrencias = objData.reduce((acc, data) => {
		// Converto a data no formato MM/AA
		const mesAno = `${data.slice(5, 7)}/${data.slice(0, 4)}`;
		// Incremento no objeto, já considerando a possibilidade da propriedade não existir
		acc[mesAno] = (acc[mesAno] || 0) + 1;
		// Retorno o objeto para o método reduce
		return acc;
	}, {});


	let occ = new Array(ocorrencias)


	let janeiro = occ[0]['01/2020'] + occ[0]['01/2021'] ? occ[0]['01/2020'] + occ[0]['01/2021'] : occ[0]['01/2020'] || occ[0]['01/2021'];
	let fevereiro = occ[0]['02/2020'] + occ[0]['02/2021'] ? occ[0]['02/2020'] + occ[0]['02/2021'] : occ[0]['02/2020'] || occ[0]['02/2021'];
	let marco = occ[0]['03/2020'] + occ[0]['03/2021'] ? occ[0]['03/2020'] + occ[0]['03/2021'] : occ[0]['03/2020'] || occ[0]['03/2021'];
	let abril = occ[0]['04/2020'] + occ[0]['04/2021'] ? occ[0]['04/2020'] + occ[0]['04/2021'] : occ[0]['04/2020'] || occ[0]['04/2021'];
	let maio = occ[0]['05/2020'] + occ[0]['05/2021'] ? occ[0]['05/2020'] + occ[0]['05/2021'] : occ[0]['05/2020'] || occ[0]['05/2021'];
	let junho = occ[0]['06/2020'] + occ[0]['06/2021'] ? occ[0]['06/2020'] + occ[0]['06/2021'] : occ[0]['06/2020'] || occ[0]['06/2021'];
	let julho = occ[0]['07/2020'] + occ[0]['07/2021'] ? occ[0]['07/2020'] + occ[0]['07/2021'] : occ[0]['07/2020'] || occ[0]['07/2021'];
	let agosto = occ[0]['08/2020'] + occ[0]['08/2021'] ? occ[0]['08/2020'] + occ[0]['08/2021'] : occ[0]['08/2020'] || occ[0]['08/2021'];
	let setembro = occ[0]['09/2020'] + occ[0]['09/2021'] ? occ[0]['09/2020'] + occ[0]['09/2021'] : occ[0]['09/2020'] || occ[0]['09/2021'];
	let outubro = occ[0]['10/2020'] + occ[0]['10/2021'] ? occ[0]['10/2020'] + occ[0]['10/2021'] : occ[0]['10/2020'] || occ[0]['10/2021'];
	let novembro = occ[0]['11/2020'] + occ[0]['11/2021'] ? occ[0]['11/2020'] + occ[0]['11/2021'] : occ[0]['11/2020'] || occ[0]['11/2021'];
	let dezembro = occ[0]['12/2020'] + occ[0]['12/2021'] ? occ[0]['12/2020'] + occ[0]['12/2021'] : occ[0]['12/2020'] || occ[0]['12/2021'];


	document.getElementById("janeiro").innerHTML = janeiro;
	document.getElementById("fevereiro").innerHTML = fevereiro;
	document.getElementById("marco").innerHTML = marco;
	document.getElementById("abril").innerHTML = abril;
	document.getElementById("maio").innerHTML = maio;
	document.getElementById("junho").innerHTML = junho;
	document.getElementById("julho").innerHTML = julho;
	document.getElementById("agosto").innerHTML = agosto;
	document.getElementById("outubro").innerHTML = outubro;
	document.getElementById("setembro").innerHTML = setembro;
	document.getElementById("novembro").innerHTML = novembro;
	document.getElementById("dezembro").innerHTML = dezembro;


	document.getElementById("cases").innerHTML = caseBrasil;

}


function argentina() {


	let argentina = consumerApi("https://api.covid19api.com/country/argentina/status/confirmed")

	let covid = JSON.parse(argentina)

	//pega a data 

	let objData = covid.map(function (item, indice) {
		return item.Date;
	});

	//quantas ocorrencias por mes
	let ocorrencias = objData.reduce((acc, data) => {
		// Converto a data no formato MM/AA
		const mesAno = `${data.slice(5, 7)}/${data.slice(0, 4)}`;
		// Incremento no objeto, já considerando a possibilidade da propriedade não existir
		acc[mesAno] = (acc[mesAno] || 0) + 1;
		// Retorno o objeto para o método reduce
		return acc;
	}, {});


	let occ = new Array(ocorrencias)


	let janeiro = occ[0]['01/2020'] + occ[0]['01/2021'] ? occ[0]['01/2020'] + occ[0]['01/2021'] : occ[0]['01/2020'] || occ[0]['01/2021'];
	let fevereiro = occ[0]['02/2020'] + occ[0]['02/2021'] ? occ[0]['02/2020'] + occ[0]['02/2021'] : occ[0]['02/2020'] || occ[0]['02/2021'];
	let marco = occ[0]['03/2020'] + occ[0]['03/2021'] ? occ[0]['03/2020'] + occ[0]['03/2021'] : occ[0]['03/2020'] || occ[0]['03/2021'];
	let abril = occ[0]['04/2020'] + occ[0]['04/2021'] ? occ[0]['04/2020'] + occ[0]['04/2021'] : occ[0]['04/2020'] || occ[0]['04/2021'];
	let maio = occ[0]['05/2020'] + occ[0]['05/2021'] ? occ[0]['05/2020'] + occ[0]['05/2021'] : occ[0]['05/2020'] || occ[0]['05/2021'];
	let junho = occ[0]['06/2020'] + occ[0]['06/2021'] ? occ[0]['06/2020'] + occ[0]['06/2021'] : occ[0]['06/2020'] || occ[0]['06/2021'];
	let julho = occ[0]['07/2020'] + occ[0]['07/2021'] ? occ[0]['07/2020'] + occ[0]['07/2021'] : occ[0]['07/2020'] || occ[0]['07/2021'];
	let agosto = occ[0]['08/2020'] + occ[0]['08/2021'] ? occ[0]['08/2020'] + occ[0]['08/2021'] : occ[0]['08/2020'] || occ[0]['08/2021'];
	let setembro = occ[0]['09/2020'] + occ[0]['09/2021'] ? occ[0]['09/2020'] + occ[0]['09/2021'] : occ[0]['09/2020'] || occ[0]['09/2021'];
	let outubro = occ[0]['10/2020'] + occ[0]['10/2021'] ? occ[0]['10/2020'] + occ[0]['10/2021'] : occ[0]['10/2020'] || occ[0]['10/2021'];
	let novembro = occ[0]['11/2020'] + occ[0]['11/2021'] ? occ[0]['11/2020'] + occ[0]['11/2021'] : occ[0]['11/2020'] || occ[0]['11/2021'];
	let dezembro = occ[0]['12/2020'] + occ[0]['12/2021'] ? occ[0]['12/2020'] + occ[0]['12/2021'] : occ[0]['12/2020'] || occ[0]['12/2021'];


	document.getElementById("janeiro").innerHTML = janeiro;
	document.getElementById("fevereiro").innerHTML = fevereiro;
	document.getElementById("marco").innerHTML = marco;
	document.getElementById("abril").innerHTML = abril;
	document.getElementById("maio").innerHTML = maio;
	document.getElementById("junho").innerHTML = junho;
	document.getElementById("julho").innerHTML = julho;
	document.getElementById("agosto").innerHTML = agosto;
	document.getElementById("outubro").innerHTML = outubro;
	document.getElementById("setembro").innerHTML = setembro;
	document.getElementById("novembro").innerHTML = novembro;
	document.getElementById("dezembro").innerHTML = dezembro;


	document.getElementById("cases").innerHTML = caseArgentina;

}

// padrao para view
brasil();
