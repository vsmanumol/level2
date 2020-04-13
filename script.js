// You can add your codes her
    function calc()
    {
       form=document.getElementById("form1");
       sub1=form.sub1.value;
       sub2=form.sub2.value;
       sub3=form.sub3.value;    
       total=parseInt(sub1)+parseInt(sub2)+parseInt(sub3);
       form.total.value= total; 
       form.avg.value= parseInt(total)/3; 
       form.per.value= (total)/300*100;

    }