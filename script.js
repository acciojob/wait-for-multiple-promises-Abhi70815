window.onload = function() {
  function createPromise() {
    return new Promise(resolve => {
      const timeout = Math.random() * 1000 + 1000;
      setTimeout(() => {
        resolve(timeout / 1000);
      }, timeout);
    });
  }

  const promises = [
    createPromise(),
    createPromise(),
    createPromise()
  ];

  Promise.all(promises)
    .then(results => {
      const table = document.querySelector('#output');
      const loadingRow = document.getElementById('loading');
      loadingRow.remove();

      results.forEach((time, index) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = `Promise ${index + 1}`;
        cell2.textContent = time.toFixed(3);
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
      });

      const totalTime = results.reduce((sum, time) => sum + time, 0);
      const totalRow = document.createElement('tr');
      const totalCell1 = document.createElement('td');
      const totalCell2 = document.createElement('td');
      totalCell1.textContent = 'Total';
      totalCell2.textContent = totalTime.toFixed(3);
      totalRow.appendChild(totalCell1);
      totalRow.appendChild(totalCell2);
      table.appendChild(totalRow);
    });
}