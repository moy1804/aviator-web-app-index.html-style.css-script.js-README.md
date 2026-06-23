let data = JSON.parse(localStorage.getItem("aviator")) || [];

function save(){
    localStorage.setItem("aviator", JSON.stringify(data));
}

function addResult(){
    let val = parseFloat(document.getElementById("input").value);

    if(!isNaN(val)){
        data.unshift(val);
        document.getElementById("input").value = "";
        save();
        render();
    } else {
        alert("Antre yon bon chif");
    }
}

function resetData(){
    if(confirm("Effacer tout done yo?")){
        data = [];
        save();
        render();
    }
}

function render(){
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(v=>{
        list.innerHTML += `<li>${v}x</li>`;
    });

    let avg = data.length ? (data.reduce((a,b)=>a+b,0)/data.length) : 0;

    document.getElementById("avg").innerText = avg.toFixed(2);
    document.getElementById("total").innerText = data.length;

    drawChart();
}

function drawChart(){
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(data.length === 0) return;

    let max = Math.max(...data);
    let step = canvas.width / data.length;

    ctx.beginPath();
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;

    data.slice().reverse().forEach((v,i)=>{
        let x = i * step;
        let y = canvas.height - (v/max)*canvas.height;

        if(i === 0) ctx.moveTo(x,y);
        else ctx.lineTo(x,y);
    });

    ctx.stroke();
}

render();
