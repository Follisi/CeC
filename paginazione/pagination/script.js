array=["uno","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici","tredici","quattordici","quindici","sedici"];

const Nitems=5;

function paginator(Npag){
    document.getElementById("content").innerHTML="";
    let result=[];
    let start=Nitems*Npag;
    if(start<array.length){
        for(let i=start;i<start+Nitems;i++){
            if(array[i]!==undefined){
                result.push(array[i]);
            }
        }
        console.log(result);
        for(let i=0;i<result.length;i++){
            document.getElementById("content").insertAdjacentHTML("beforeend",`<li>${result[i]}</li>`);
        }
    }
}

function next(){
    let num=document.getElementById("Npag");
    console.log(num.textContent<array.length/Nitems)
    if(num.textContent<array.length/Nitems){
        console.log(parseInt(num.textContent)+1);
        num.innerHTML=(parseInt(num.textContent)+1).toString();
    }
    paginator(num.textContent-1);
}

function before(){
    let num=document.getElementById("Npag");
    if(num.textContent>1){
        console.log(parseInt(num.textContent)-1);
        num.innerHTML=(parseInt(num.textContent)-1).toString();
    }
    paginator(num.textContent-1);
}

paginator(0);