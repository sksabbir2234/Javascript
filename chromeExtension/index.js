let myLeads = []
const inputEl = document.getElementById("input-el")
const   inputBtn = document.getElementById("input-btn")
const   ulEl = document.getElementById("ul-el")






inputBtn.addEventListener("click",function(){
    
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    renderLead()
    
})

function renderLead(){
    let listItems = ""
    for (let index = 0;index < myLeads.length;index++){
    //  listItems +="<li> <a target='_blank' href=' "+ myLeads[index]+ " '>"+ myLeads[index] + "</a></li>"  
   listItems = `
        <li>
            <a target='_blank' href='${myLeads[index]}'>
                ${myLeads[index]}    
            </a>
        </li>
   `
}
ulEl.innerHTML = listItems
}