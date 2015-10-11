sap.designstudio.sdk.PropertyPage.subclass("com.sap.sample.coloredbox.ColoredBoxPropertyPage",  function() {

	var that = this;
	var colorArray = [];
	this.init = function() {
		$("#form").submit(function() {
			that.firePropertiesChanged(["Rangevalues"]);
			return false;
		});
	};
	


	this.Color2 = function(value) {
		if (value === undefined) {
			return $("#aps_color").val();
		}
		else {
			$("#aps_color").val(value);
			return this;
		}
	};
	
	this.Rangevalues = function(value) {
		if (value === undefined) {
			var arr = new Array();
			var numberOfcolors=	document.getElementById("colorNum").value;
			for(i=1;i<3;i++)
				{
				var color = document.getElementById("aps_color"+i).value;
		//		var color = $("#aps_color"+i).val();
				var value =document.getElementById("aps_value"+i).value;
				var a =value+color;
			//	colorArray=colorArray.concat(a);
				//colorArray=colorArray+a;
				//arr="[[0.3,'red'],[0.3,'blue']]";
				//	colort = eval("[[0.3,'red'],[0.3,'blue']]");
				
				arr[i-1]=value;
			
				
				}
			return arr;
		}
		else {
			$("#aps_color").val(value);
			return this;
		}
	};
	
	
	
});