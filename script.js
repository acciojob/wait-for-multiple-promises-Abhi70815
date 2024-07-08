 const table = document.getElementById('myTable');
        const promises = [];
        for (let i = 1; i <= 3; i++) {
            promises.push(new Promise((resolve) => {
                const timeout = Math.floor(Math.random() * 3) + 1;
                setTimeout(() => {
                    resolve({ promise: `Promise ${i}`, time: timeout });
                }, timeout * 1000);
            }));
        }

        Promise.all(promises).then((results) => {
            const totalTime = results.reduce((acc, { time }) => acc + time, 0);
            table.innerHTML = '';

            results.forEach(({ promise, time }) => {
                const row = table.insertRow();
                row.innerHTML = `
                    <td>${promise}</td>
                    <td>${time} seconds</td>
                `;
            });

            const totalRow = table.insertRow();
            totalRow.innerHTML = `
                <td>Total</td>
                <td>${totalTime.toFixed(3)} seconds</td>
            `;
        });