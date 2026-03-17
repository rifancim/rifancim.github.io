function getweekday(today){
    weekday = today.getDay()
    return weekday
}

function colorday(day) {
    let table = document.querySelector("table"); // oppure id specifico

    let tbody = table.firstElementChild; // tbody

    for (let i = 1; i < tbody.children.length; i++) {
        let tr = tbody.children[i];
        let td = tr.children[day];

        if (td) {
            td.className = "today";
        }
    }
}

thresholds = [9,11,13,14,16,18]


function printbar(){
    now = new Date(Date.now())
    day = getweekday(now)
    colorday(day)

    let table = document.querySelector("table"); // oppure id specifico
    let tbody = table.firstElementChild; // tbody
    
    let hour = now.getUTCHours()+1
    let lastbiggest = 0
    for (i in thresholds){
        if (hour < thresholds[i])
            break
        lastbiggest = i-0+1
    }
    
    let td = tbody.children[lastbiggest].children[day]
    td.className = "current"

    //code here
    let bar = td.querySelector(".bar")
    if (!bar) {
        bar = document.createElement("div")
        bar.className = "bar"
        td.appendChild(bar)
    }

    let prev = thresholds[lastbiggest - 1]
    let next = thresholds[lastbiggest]

    

    basetime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), prev)
    fulltime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), next)
    
    

    let progress = (now - basetime) / (fulltime - basetime) // value between 0 and 1
    //culo.innerHTML += progress
    bar.style.height = (progress * 100) + "%"
}