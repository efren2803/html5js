<div>
  Años que faltan para cumplir 100 años: <br>
  <input type="text" id="ageInput"/>
  <input type="button" id="btnAge" value="Calcular"/>
  <div id="ageOutput">Result: </div>
</div>


window.addEventListener('load',function()
{
		var button = document.getElementById('btnAge');
		button.addEventListener('click',function()
		{
			var ageInputElement = document.getElementById('ageInput');
			var ageOutputElement = document.getElementById('ageOutput');

			console.log(age);
			
			var age = parseInt(ageInputElement.value,10);

			var result = '';

			if(isNaN(age))
			{
			  result = "introduce un numero";
			}
			else
			{
			  result = ((100 - age) + 'años antes de cumplir 100')
			}

			console.log(result);
			ageOutputElement.innerHTML = result;
		},false);
},false);