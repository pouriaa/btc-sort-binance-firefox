$(document).on('click', '.accountInfo-lists li.th .equalValue', () => {

	let balanceTable = $('.accountInfo-lists li .items');

	let rows = [];
	for (let i = 0; i < balanceTable.length; i++) {
		
		let $row = $(balanceTable[i]);

		let symbol = $row.find('.coin')[0].innerText
		let equalValue = $row.find('.equalValue')[0].innerText;
		let jQueryObj = $row.clone();
		let rowData = {
			symbol, 
			equalValue,
			jQueryObj
		};
		rows.push(rowData);

		$row.remove();
	}

	rows.sort((a,b) => {
		return b.equalValue - a.equalValue;
	})

	let listItems = $('.accountInfo-lists li');
	for (let i = 0; i < listItems.length; i++) {
		$(listItems[i]).html(rows[i].jQueryObj);
		
	}

});
