const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO

	//return results;
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));

}

function searchHandler(e) {
	// TODO
	let inputVal = e.target.value;

	showSuggestions(search(inputVal));
}

function showSuggestions(results) {
	// TODO
	suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join('');

	suggestions.style.display = results.length > 0 ? 'block' : 'none';
}
function useSuggestion(e) {
	// TODO
	if (e.target.tagName === 'LI') {
		let suggestion = e.target.textContent;
		input.value = suggestion;
		suggestions.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

(function () {
    var sel_imie = $('select[name="IMEI"]');
    sel_imei.prop('disabled', true); //disable IMEI select
    $('select[name ="city"]').change(function () {
        sel_imei.prop('disabled', false); //enable when value of city select is changed
    });
});