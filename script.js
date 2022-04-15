let lab=label("label","for","clear","enter json")
br=document.createElement("br")
let inp=createelement("input","type","text","id","clear","entervalue","json")
let brm=document.createElement("br")
let lab1=label("label","for","clea","result")

let br1=document.createElement("br")
let inp1=createelement("input","type","text","id","clea","entervalue","name/subregion/region/population")
let br2=document.createElement("br")



let el=document.createElement("button");
el.innerHTML=("get result");
el.addEventListener("click",bon);
el.style.minHeight="1cm"
el.style.minWidth="1.5cm"

let br3=document.createElement("br")

let p=textarea("div","getresult","id","main")

document.body.append(lab,br,inp,brm,lab1,br1,inp1,br2,el,br3)




function createelement(tag,atri,val,atri1,val2,content,ph){
let ele=document.createElement(tag);
ele.setAttribute(atri,val);
ele.setAttribute(atri1,val2);
ele.innerHTML=content;
ele.placeholder=ph;
return ele;
}
function label(tag,atri,val,content){
    let ele=document.createElement(tag);
    ele.setAttribute(atri,val);
    ele.innerHTML=content;
    return ele;
    }
function textarea(tag,ph,id,val)
{
let ele=document.createElement(tag)
ele.placeholder=ph;
//ele.setAttribute(rows,siz);
ele.setAttribute(id,val);
return ele;
}    


async function bon(){
    let fin=document.getElementById("clear").value
    var p2=document.getElementById("clea").value
//console.log(fin)//https://api.covid19api.com/live/country/
    let esm=await fetch(`https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.${fin}`)
let mes=await esm.json();
for(var i=0;i<mes.length;i++)
//console.log(ne)
{
   // console.log(`${p2}:${mes[i][p2]} ${p2}`)
  m=document.createElement("textarea")
m.innerHTML=(`${p2}:${mes[i][p2]} ${p2}`)

document.body.append(m)
//val.document.body.append(e);
}

}





/*
async function gop(){
 let esm=await fetch("https://api.covid19api.com/live/country/india")
let mes=await esm.json();
console.log(esm)
console.log(mes)
for(let i=0;i<mes.length;i++)
console.log(`Recovered:${mes[i].Recovered}`)


}
//gop();*/