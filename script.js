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

    function metade(){
       
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
        qntdades.push(parseInt(q0.value));
        qntdades.push(parseInt(q1.value));
        qntdades.push(parseInt(q2.value));
        qntdades.push(parseInt(q3.value));
        qntdades.push(parseInt(q4.value));
        qntdades.push(parseInt(q5.value));
        qntdades.push(parseInt(q6.value));
        qntdades.push(parseInt(q7.value));
        qntdades.push(parseInt(q8.value));

        console.log(qntdades);
        for (var i=0; i < qntdades.length; i++){
            qntdades[i] = 2 * qntdades[i];
        }
        console.log(qntdades);
    
        document.getElementById('res').style.display = "block";
    }
        
    }
    function dobrar(){
        document.getElementById('res').style.display = "block";
    }
    function triplicar(){
        document.getElementById('res').style.display = "block";
    }
    
