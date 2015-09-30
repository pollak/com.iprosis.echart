//Last Update - Amit Pollak 26.08.2015
sap.designstudio.sdk.Component.subclass("com.iprosis.echart.Gauge", function() {

	var dataResultSet = null;
	var min = null; 		
	var max = null; 		
	var precision = null; 	
	var splitnumber = null;
	var color1 = null; 	
	var color2 = null; 	
	var color3 = null; 	
	var value1 = null; 	
	var value2 = null; 	
	var value3 = null; 	
	var thick = null; 		
	var tickValue = null; 		
	var valuedesc = null; 	
	var reload = false;
	var myChart = null;
	var that = this;
	var tickValueNum = null;
	this.init = function() {
		
		if (this._alive){
			return;
		} else {
			
			myChart = echarts.init(document.getElementById(this.$().attr('id'))); 
			this._alive = true;
		}
	};
	
	this.afterUpdate = function() {
		if (tickValue){
			if (reload){
				return;
			} else {
				tickValueNum = tickValue.data[0];
				this.insertData();
				reload = true;
			}
		}
	};
	
	this.insertData = function() {
		
		var option = {
				tooltip : {
					formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				series : [
					{
						name: '',
						type:'gauge',
						center : ['50%', '50%'],
						radius : [0, '75%'],
						startAngle: 90,
						endAngle : -180,
						min: min,
						max: max,
						precision: precision,
						splitNumber: splitNumber,
						axisLine: {
							show: true,
							lineStyle: {
								color: [[value1, color1],[value2, color2],[1, color3]], 
								width: thick
							}
						},
						axisTick: {
							show: true,
							splitNumber: 5,
							length :10,
							lineStyle: {
								color: '#eee',
								width: 1,
								type: 'solid'
							}
						},
						splitLine: {
							show: true,
							length :30,
							lineStyle: {
								color: '#eee',
								width: 2,
								type: 'solid'
							}
						},
						/*axisLabel: {
							show: true,
							formatter: function(v){
								switch (v+''){
									case '10': return 'bad';
									case '30': return 'better';
									case '60': return 'good';
									case '90': return 'best';
									default: return '';
								}
							},
							textStyle: {
								color: 'blue'
							}
						},*/
					    pointer : {
							length : '100%',
							width : 4,
							color : 'red'
						},
					    title : {
							show : true,
							offsetCenter: ['-65%', '-50%'],
							textStyle: {
								color: '#333',
								fontSize : 40
							}
						},
						detail : {
							show : true,
							backgroundColor: 'rgba(0,0,0,0)',
							borderWidth: 0,
							borderColor: '#ccc',
							width: 100,
							height: 40,
							//offsetCenter: ['-60%', '-30%'],
							formatter:'{value}%',
							textStyle: {
								color: '#000',
								fontSize : 30
							}
						},
//						detail : {formatter:'{value}%'},
						data:[{value: tickValueNum, name: valueDesc}]
					}
				]
			};
		
		myChart.setOption(option, true);
	};
	
	this.Min = function(value) {
		if(value===undefined) {
			Reload = false;
			return min;
		} else {
			Reload = false;
			min = value;
			return this;
		};
	};
	
	this.Max = function(value) {
		if(value===undefined) {
			Reload = false;
			return max;
		} else {
			Reload = false;
			max = value;
			return this;
		};
	};
	
	this.Precision = function(value) {
		if(value===undefined) {
			Reload = false;
			return precision;
		} else {
			Reload = false;
			precision = value;
			return this;
		};
	};
	
	this.SplitNumber = function(value) {
		if(value===undefined) {
			Reload = false;
			return splitNumber;
		} else {
			Reload = false;
			splitNumber = value;
			return this;
		};
	};
	
	this.Color1 = function(value) {
		if(value===undefined) {
			Reload = false;
			return color1;
		} else {
			Reload = false;
			color1 = value;
			return this;
		};
	};
	
	this.Color2 = function(value) {
		if(value===undefined) {
			Reload = false;
			return color2;
		} else {
			Reload = false;
			color2 = value;
			return this;
		};
	};
	
	this.Color3 = function(value) {
		if(value===undefined) {
			Reload = false;
			return color3;
		} else {
			Reload = false;
			color3 = value;
			return this;
		};
	};
	
	this.Value1 = function(value) {
		if(value===undefined) {
			Reload = false;
			return value1;
		} else {
			Reload = false;
			value1 = value;
			return this;
		};
	};
	
	this.Value2 = function(value) {
		if(value===undefined) {
			Reload = false;
			return value2;
		} else {
			Reload = false;
			value2 = value;
			return this;
		};
	};
	
	this.Thick = function(value) {
		if(value===undefined) {
			Reload = false;
			return thick;
		} else {
			Reload = false;
			thick = value;
			return this;
		};
	};
	
	this.TickValue = function(value) {
		if(value===undefined) {
			Reload = false;
			return tickValue;
		} else {
			Reload = false;
			tickValue = value;
			return this;
		};
	};
	
	this.ValueDesc = function(value) {
		if(value===undefined) {
			Reload = false;
			return valueDesc;
		} else {
			Reload = false;
			valueDesc = value;
			return this;
		};
	};
});