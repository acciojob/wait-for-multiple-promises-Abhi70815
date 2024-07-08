const table = document.getElementById('myTable');
        let promises=[
            createPromise(),
            createPromise(),
            createPromise()
        ];


        Promise.all(promises).then((results)=>{
        table.innerHTML='';

            results.forEach((time,index)=>{
                const row = createRow(`Promise ${index+1}`,`${time.toFixed(3)}`);
                table.appendChild(row);
            });
            const totaltime=results.reduce((sum,time)=>sum+time,0);
            const totalRow=createRow(`Total`,`${totaltime.toFixed(3)}`);
            table.appendChild(totalRow);

        })
        
        function createPromise(){
            return new Promise((res,rej)=>{
                let timeout= Math.random()*2000+1000;
                setTimeout(()=>{
                    res(timeout/1000);
                },timeout);

            });
        }




        table.appendChild(row);
        function createRow(column1, column2){
            let row = document.createElement('tr');
            let col1= document.createElement('td');
            let col2= document.createElement('td');
            col1.textContent=column1;
            col2.textContent=column2 || '';
            row.appendChild(col1);
            row.appendChild(col2);
            return row;
        }