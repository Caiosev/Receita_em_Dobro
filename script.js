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
            '<input type="text" class="coluna-2" alinhamento placeholder="Apenas números">'+
            '<label class="coluna-3 alinhamento">'+
            'Produto'+
            '</label>'+
            '<input class="coluna-3 alinhamento" type="text">'+
            '</div>'
            
        ).appendTo(scntDiv);
        qntd++;
        console.log(qntd)
        console.log(check)
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
        var q1 = document.querySelector(".coluna-2-1");
        var q = document.querySelector("input.coluna-2");
        if (q1.value.length < 1){
            alert("Digite a quantidade do produto")
            q1.focus();
        }else{
        qntdades[0]=(parseInt(q1.value));
        qntdades.push(parseInt(q.value));
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

