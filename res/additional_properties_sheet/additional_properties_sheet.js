sap.designstudio.sdk.PropertyPage.subclass("com.iprosis.echart.GaugePropertyPage",  function() {

	var that = this;
	var colorArray = [];
	this.init = function() {
		 fillDropDown();
			$("#form1").submit(function() {
				that.firePropertiesChanged(["ColorNum"]);
				fillDropDown2();
				return false;
			});
			$("#form").submit(function() {
				that.firePropertiesChanged(["Rangevalues"]);
				return false;
			});
	};
	
	this.ColorNum = function(value) {
		if (value === undefined) {
			return $("#colors").val();
		}
			else {
				$("#colors").val(value);
				return this;
			}
	};	

	this.Rangevalues = function(value) {
		if (value === undefined) {
		var numberOfcolors=	document.getElementById("colors").value;
			var temp = "[";
			for(i=1;i<numberOfcolors;i++)
				{      
			temp=temp + "["+ document.getElementById("aps_value"+i).value + ",";
			temp=temp+"'"+document.getElementById("aps_color"+i).value+"'],";               
	             }
			temp=temp + "["+ document.getElementById("aps_value"+numberOfcolors).value + ",";
			temp=temp+"'"+document.getElementById("aps_color"+numberOfcolors).value+"'],";
			temp=temp+"]";	
			return temp;
	}
		else {
			//$("#aps_color").val(value);
			return this;
		}
	};
	
	function fillDropDown() {
		var NumcolorVal = that.callRuntimeHandler("getNumColor");
		var colorsArray = that.callRuntimeHandler("getcolorsArray");
		//alert(NumcolorVal);
		colorsArray=eval(colorsArray);
		$("#colors").val(NumcolorVal);
		//alert(colorsArray);
		var formval = "<table >";
		for(i=1;i<NumcolorVal;i++){
		formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='"+colorsArray[i-1][1]+"'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='"+i/10+"' style='font-size:12px'></td></tr>"
		}
		formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='"+colorsArray[NumcolorVal-1][1]+"'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='1' style='font-size:12px'></td></tr>"
		formval +="</table>";
		formval +="	<input type='submit' value='Done' >";
   		document.getElementById('form').innerHTML =formval;	
	}
	
	function fillDropDown2() {
		var NumcolorValold = that.callRuntimeHandler("getNumColor");
		var NumcolorVal = document.getElementById('colors').value;
		var colorsArray = that.callRuntimeHandler("getcolorsArray");
		colorsArray=eval(colorsArray);
		var formval = "<table >";
		if(NumcolorValold <= NumcolorVal){
		for(i=1;i<=NumcolorValold;i++){
			formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='"+colorsArray[i-1][1]+"'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='"+i/10+"' style='font-size:12px'></td></tr>"
			}
		for(i=NumcolorValold+1;i<=NumcolorVal;i++){
		formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='green'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='1' style='font-size:12px'></td></tr>"
		}
		}
		if(NumcolorValold > NumcolorVal){
			for(i=1;i<NumcolorVal;i++){
				
				formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='"+colorsArray[i-1][1]+"'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='"+colorsArray[i-1][0]+"' style='font-size:12px'></td></tr>"
				}
			formval +="<tr><td>Color"+NumcolorVal+"</td> <td><input id='aps_color"+NumcolorVal+"' type='text' size='15' maxlength='20' value='"+colorsArray[NumcolorVal-1][1]+"'> </td><td>Value"+NumcolorVal+"</td> <td><input id='aps_value"+NumcolorVal+"' type='text' size='20' maxlength='15' value='1' style='font-size:12px'></td></tr>"
		}
		formval +="</table>";
		formval +="	<input type='submit' value='Done' >";
   		document.getElementById('form').innerHTML =formval;	
	}

});