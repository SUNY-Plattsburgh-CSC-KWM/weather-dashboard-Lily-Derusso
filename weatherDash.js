
async function getPeople() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=25&nat=us");
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
        }
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Could not get names: ${error}`);
	}
}

async function buildTable() {
	try {
		const data = await getPeople();
		const users = data.results;

		users.sort((a, b) => {
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
}
buildTable();