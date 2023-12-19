//science: base currency
//sciCost: cost of science needed for buyable
//skimdata: first buyable
//buy1cost: first buyable cost
//nextcost: next cost
var science = 0;
function sciclick(){
    science = science + 1;
    document.getElementById("science").innerHTML = science;
};
cons docObj = {
  buy1:document.getElementById('buy1'),
  science:document.getElementById('science'),
  buy1Cost:document.getElementById('buy1Cost'),
  sciclick:document.getElementById('sciclick')
}
var skimdata = 0;
function buy1(){
    if(science >= buy1Cost(){                                      
    	science = science - buy1Cost();                            
        skimdata = skimdata + 1;                              
        document.getElementById('buy1').innerHTML = skimdata;  
        document.getElementById('science').innerHTML = science;  
    };
    document.getElementById('buy1Cost').innerHTML = buy1Cost();}
function buy1Cost() {return 10 * 1.1 ** skimdata}

window.setInterval(function(){
	
	sciclick(1);
	
}, 1000);

