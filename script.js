
let num1 = 3;
for (let num=0;num<=10;num++){
   
    console.log(num1*num);
    
}



function InpBotao(){
    event.preventDefault(); //Evita q a  pagina atualize qnd o form for enviado 
    let InpNome = document.getElementById("Nome").value;
    let InpEmail = document.getElementById("Email").value;

    if (InpNome === "" || InpEmail	=== ""){
        alert("Por favor, preencha os campos Nome e Email.");

    }
    else{
        alert("Pronto " + InpNome + " Formulário enviado com sucesso!");


        console.log("O nome digitado foi "+ InpNome)
        console.log("O email digitado foi "+ InpEmail)
    }


}