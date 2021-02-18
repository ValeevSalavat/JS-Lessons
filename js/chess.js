document.body.style="margin:0 auto;padding:0;width:1200px";
var template = document.getElementById("chess__template");
template.style = "margin:0 auto;border:1px solid red";

const alphabet = "ABCDEFGH";

for(let row=0;row<=alphabet.length;row++){
        let mainRow = template.appendChild(document.createElement("div"));
        mainRow.style="display:flex; align-items:center";

        for(let col=0;col<=alphabet.length;col++){
            mainRow.appendChild(document.createElement("div"))

            mainRow.childNodes[col].style="width:100%;height:100px;text-align:center;background-color: white";

            if(col>0 && (col==row)) mainRow.childNodes[col].style="width:100%;height:100px;text-align:center;background-color:black";
            
            if(row==0) mainRow.childNodes[col].textContent=alphabet[col-1];
            if(col==0 && row!=0) mainRow.firstChild.textContent=row;
        }
}
