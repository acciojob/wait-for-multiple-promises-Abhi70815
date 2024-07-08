const table = document.getElementById('myTable');
const promises = [{promise:"Promise 1",time:2},
				  {promise:"Promise 2", time:1},
				  {promise:"Promise 3", time:3}];

const promiseArray = promises.map((promise)=>{
    return new Promise((resolve)=>{
        let time = parseInt(promise.time) * 1000; // convert seconds to milliseconds
        setTimeout(()=>{
            resolve({ promise: promise.promise, time: promise.time });
        }, time);
    })
})

Promise.all(promiseArray).then((results) => {
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