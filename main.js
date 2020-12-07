function asd(a)
{
    if(a==1)
        {document.getElementById("id2").style.display="none"; 
        document.getElementById("id4").style.display="block";
       }

    else
        {document.getElementById("id4").style.display="none";
        document.getElementById("id2").style.display="block"; }
}
balancebutton = document.getElementById("balancebutton");
balancebutton.onclick = function () {
    newbalance = document.getElementById("balance").innerHtml;
    balanceadd= document.getElementById("balanceadd").value ;
    newbalance = newbalance + balanceadd;
}

