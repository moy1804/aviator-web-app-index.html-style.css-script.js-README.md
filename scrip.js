let results = [1.2, 2.5, 1.8];

function render() {
    let list = document.getElementById("results");
    list.innerHTML = "";

    results.forEach(r => {
        list.innerHTML += `<li>${r}x</li>`;
    });

    let avg = results.reduce((a,b)=>a+b,0)/results.length;
    document.getElementById("average").innerText = avg.toFixed(2);
}

function addResult() {
    let value = parseFloat(document.getElementById("newResult").value);

    if(!isNaN(value)){
        results.unshift(value);
        document.getElementById("newResult").value = "";
        render();
    } else {
        alert("Antre yon bon chif");
    }
}

render();
