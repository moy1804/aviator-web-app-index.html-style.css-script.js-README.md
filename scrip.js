let results = [1.25, 2.30, 1.45, 8.50, 3.10];

function renderResults() {
    const list = document.getElementById("results");
    list.innerHTML = "";

    results.forEach(r => {
        list.innerHTML += `<li>${r}x</li>`;
    });

    const avg =
        results.reduce((a,b)=>a+b,0)/results.length;

    document.getElementById("average").innerText =
        avg.toFixed(2);
}

function addResult() {
    const value =
        parseFloat(document.getElementById("newResult").value);

    if(!isNaN(value)){
        results.unshift(value);
        renderResults();
    }
}

renderResults();
