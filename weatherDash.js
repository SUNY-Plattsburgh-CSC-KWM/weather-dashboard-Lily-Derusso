
async function getWeather() {
	try {
		const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=fahrenheit` 
);
	console.log(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=fahrenheit`);
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
        }
		const data = await response.json();
		console.log(data.hourly.temperature_2m[0])
		return data;
	} catch (error) {
		console.error(`Could not get names: ${error}`);
	}
}

async function buildTable() {
	//try {
	
		const data = await getWeather();
		//const weather = data.results;
		console.log(data.latitude)
		console.log(`${data.current_units.temperature_2m}`)
		
		/*users.sort((a, b) => {
            const lastNameA = a.name.last.toLowerCase();
        	const lastNameB = b.name.last.toLowerCase();
        	return lastNameA.localeCompare(lastNameB);
    	});

		const tableBody = document.querySelector('#people tbody');

		users.forEach(user => {
            const row       = document.createElement('tr');
			const phone     = user.phone;
			
            const name      = `${user.name.first} ${user.name.last}`;
            const address   = `${user.location.street.number} ${user.location.street.name}`;
			const city      = user.location.city;
			const state     = user.location.state;
			const zip       = user.location.postcode;
			const longitude = user.location.coordinates.longitude;
			const latitude  = user.location.coordinates.latitude;

			row.innerHTML = `
            <td>${name}</td>
            <td>${address}</td>
			<td>${city}</td>
			<td>${state}</td>
			<td>${zip}</td>
			<td>${longitude}</td>
			<td>${latitude}</td>
            `;

			row.setAttribute("data-tooltip", `${phone}`)

			row.addEventListener('mouseenter', (e) => {
				tooltip.textContent = phone;
				tooltip.style.opacity = 1;
				});

			row.addEventListener('mousemove', (e) => {
			tooltip.style.top  = `${e.pageY + 10}px`;
			tooltip.style.left = `${e.pageX + 10}px`;
			});

			row.addEventListener('mouseleave', () => {
			tooltip.style.opacity = 0;
			});


			tableBody.appendChild(row);
		});

	} catch (e) {
		console.log("Error " + e);
	}
}*/ }
$(document).ready(function() {
  $('#forcastButton').click(function() {
	if ($(this).attr('value') == 'Forcast'){
	    $(this).attr('value', 'Historical Data'); 
	}
	else {
		$(this).attr('value', 'Forcast'); 
	};
  });
});

//buildTable();