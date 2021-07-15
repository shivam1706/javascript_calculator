let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons)
{

	item.addEventListener('click',(e)=>
	{
        buttontext=e.target.innerText;
        console.log('Button text pressed is ', buttontext);
        if(buttontext=='X')
        {
        	buttontext= '*';
             screenvalue+=buttontext;
             screen.value=screenvalue;
        }
        else
        	if(buttontext=='C')
        	{
        		screenvalue='';
        		screen.value=screenvalue;
        	}
        	else
        		if(buttontext=='=')
        		{
        			screen.value=eval(screenvalue);
        		}
        		else
        			if(buttontext=='sin')
        			{
        				screenvalue=Math.sin(screen.value);
        		   screen.value=screenvalue;
                       }
        			
        			else
        			if(buttontext=='cos')
        			{
        				screenvalue=Math.cos(screen.value);
        		   screen.value=screenvalue;
                   
        			}
        			else
        			if(buttontext=='tan')
        			{
        				screenvalue=Math.tan(screen.value);
        		   screen.value=screenvalue;

        	}
                 else
                 	if(buttontext=='log')
                 	{
                 		screenvalue=Math.log(screen.value);
        		   screen.value=screenvalue;

                 	}
        	else
        		{
        			  screenvalue+=buttontext;
             screen.value=screenvalue;
        		}
	});
}