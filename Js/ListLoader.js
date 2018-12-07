//var dataJSON2 = '[{"FeeType":"Domestic POS Declined Fee","FeeDescription":"per declined transaction","FeeAmount":"0.50"},{"FeeType":"Domestic PIN Declined Fee","FeeDescription":"per declined transaction","FeeAmount":"0.50"},{"FeeType":"International POS Declined Fee","FeeDescription":"per declined transaction","FeeAmount":"0.95"},{"FeeType":"International PIN Declined Fee ","FeeDescription":"per declined transaction","FeeAmount":"0.95"},{"FeeType":"ATM Domestic Fee <sup>1</sup>","FeeDescription":"One (1) no cost ATM withdrawal per deposit1, then $1.75 per transaction thereafter","FeeAmount":"1.75"},{"FeeType":"Domestic ATM Balance Inquiry Fee <sup>1</sup>","FeeDescription":"per ATM Balance Inquiry","FeeAmount":"0.50"},{"FeeType":"Domestic ATM Declined Fee <sup>1</sup>","FeeDescription":"per declined transaction","FeeAmount":"0.50"},{"FeeType":"International ATM Withdrawal Fee <sup>1</sup>","FeeDescription":"per transaction","FeeAmount":"3.00"},{"FeeType":"International ATM Balance Fee ","FeeDescription":"per ATM Balance Inquiry","FeeAmount":"0.95"},{"FeeType":"International ATM Declined Fee","FeeDescription":"per declined transaction","FeeAmount":"0.95"},{"FeeType":"OTC Withdrawal Fee","FeeDescription":"per transaction","FeeAmount":"4.00"},{"FeeType":"International OTC Withdrawal Fee","FeeDescription":"per transaction","FeeAmount":"4.00"},{"FeeType":"Currency Conversion Fee","FeeDescription":"3% of transaction amount","FeeAmount":"3.00%"},{"FeeType":"Card Replacement Fee","FeeDescription":"One (1) no cost replacement per calendar year or upon expiration; $5.00 per request thereafter for lost, stolen, and damaged cards.","FeeAmount":"5.00"},{"FeeType":" Expedited Card Replacement Fee ","FeeDescription":"$20.00 (per Card; an additional fee when a Card is reissued or replaced for any reason with requested expedited delivery)","FeeAmount":"20.00"},{"FeeType":"Check Refund Fee","FeeDescription":"$12.50 per refund check (When a refund check is issued for the remaining Card balance.","FeeAmount":"12.5"}]';

var dataJSON = '[{"name":"a","price":"10"},{"name":"b","price":"1337"},{"name":"c","price":"42"}]';
/*
var dataObject = JSON.parse(dataJSON);
var listItemString = $('#listItem').html();

dataObject.forEach(buildNewList);

function buildNewList(item, index) {
  var listItem = $('<li>' + listItemString + '</li>');
  var listItemTitle = $('.title', listItem);
  listItemTitle.html(item.FeeType);
  var listItemAmount = $('.amount', listItem);
  listItemAmount.html(item.FeeAmount);
  var listItemDesc = $('.description', listItem);
  listItemDesc.html(item.FeeDescription);
  $('#dataList').append(listItem);
}*/

function main() {
	loadList(dataJSON);
}

window.onload = main;

function loadList(json) {
	var data = JSON.parse(json);
	let ul = document.createElement("ul");
	for (let element of data) {
		let li = document.createElement("li");
		//li.innerText = element;
		li.innerText = element.name;
		li.classList.add("name")
		ul.appendChild(li);
		var div = document.createElement("div");
		div.classList.add("price")
		div.innerText = element.price;
		li.appendChild(div);

		
	}
	let root = document.getElementById("listItem");
	root.appendChild(ul);
}
