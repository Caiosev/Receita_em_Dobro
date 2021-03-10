    var scntDiv = $('#campocal');
    var qntd = 0;
    var check = 0;

    
     $(document).on('click', '#plus', function () {
        if (qntd < 9 && check == 0 ){
        $(
            '<div class="linha">'+
            '<label class="coluna-2 alinhamento">'+
            'Quantidade'+
            '</label>'+
            '<input type="text" class="coluna-2-'+qntd+'" alinhamento placeholder="Apenas números">'+
            '<label class="coluna-3 alinhamento">'+
            'Produto'+
            '</label>'+
            '<input class="coluna-3 alinhamento" type="text">'+
            '</div>'
            
        ).appendTo(scntDiv);
        qntd++;
       
        return false;
    }else if (qntd >= 9 && check == 0 ) {
            $(
                window.alert("Numero max de Produtos Atingidos")
                
            ).appendTo(scntDiv);  
            check++;
            console.log(check)
            return false;
            
        
        
    
    }else{
        
    }});

    function dobrar(){
       
        var qntdades = [];
        var qp = document.querySelector("input.coluna-2");
        var q0 = document.querySelector("input.coluna-2-0");
        var q1 = document.querySelector("input.coluna-2-1");
        var q2 = document.querySelector("input.coluna-2-2");
        var q3 = document.querySelector("input.coluna-2-3");
        var q4 = document.querySelector("input.coluna-2-4");
        var q5 = document.querySelector("input.coluna-2-5");
        var q6 = document.querySelector("input.coluna-2-6");
        var q7 = document.querySelector("input.coluna-2-7");
        var q8 = document.querySelector("input.coluna-2-8");

        if (qp.value == ""){
            alert("Digite a quantidade do produto")
            qp.focus();
        }else{
        qntdades[0]=(parseInt(qp.value));
            if (!(q0=="null") && !q0== "")
            {
                qntdades.push(parseInt(q0.value));
            }
            if (!(q1=="null") && !q1== "")
            {
                qntdades.push(parseInt(q1.value));
            }
            if (!(q2=="null") && !q2== "")
            {
                qntdades.push(parseInt(q2.value));
            }
            if (!(q3=="null") && !q3== "")
            {
                qntdades.push(parseInt(q3.value));
            }
            if (!(q4=="null") && !q4== "")
            {
                qntdades.push(parseInt(q4.value));
            }
            if (!(q5=="null") && !q5== "")
            {
                qntdades.push(parseInt(q5.value))
            }
            if (!(q6=="null") && !q6== "")
            {
                qntdades.push(parseInt(q6.value));
            }
            if (!(q7=="null") && !q7== "")
            {
                qntdades.push(parseInt(q7.value));
            }
            if (!(q8=="null") && !q8== "")
            {
                qntdades.push(parseInt(q8.value));
            }
        console.log(qntdades);
        for (var i=0; i < qntdades.length; i++){
            qntdades[i] = 2 * qntdades[i];
        }
        console.log(qntdades);
    
        document.getElementById('res').style.display = "block";

        $(
            '<h2>'+qntdades+'<h2>'
            
        ).appendTo(res);
    }
        
    }
    
    
