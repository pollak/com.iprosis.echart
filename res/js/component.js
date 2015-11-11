//Last Update - Amit Pollak 26.08.2015
sap.designstudio.sdk.Component.subclass("com.iprosis.echart.Gauge", function() {

	var dataResultSet = null;
	var min = null; 		
	var max = null; 		
	var minNum = null; 		
	var maxNum = null; 
	var maxMinDecimal = null; 
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
	var tickValueUser = null;
	var valuedesc = null; 	
	var reload = false;
	var myChart = null;
	var that = this;
	var tickValueNum = null;
	var startAngle = null;
	var endAngle = null;
	var sign = null;
	var tickValueFontSize = null;
	var tickValueFontFamily = null;
	var splitLineVisible = null;
	var splitLineColor = null;
	var splitLineWidth = null;
	var pointerLength = null;
	var pointerWidth = null;
	var pointerColor = null;
	var tooltipVisible = null;
	var colorNum = null;
	var tickValueVisible = null;
	var colorArray = [];

	
	this.init = function() {
		
		if (this._alive){
			return;
		} else {
			
			myChart = echarts.init(document.getElementById(this.$().attr('id')));
			this.$().addClass('gauge-css');
			this._alive = true;
		}
	};
	
	this.afterUpdate = function() {
		if (tickValue){
				if (tickValue=== Object)
				tickValueNum = tickValue.data[0];
				else 
				tickValueNum = tickValue;
				minNum = min;
				maxNum = max;
				tickValueUser = tickValueNum;
				if(tickValueNum<minNum)
					{
					tickValueNum = minNum;
					}
				this.insertData();
				reload = true;
		}
			
	};
	
	this.getNumColor = function() {
		return colorNum;
	};
	
	
	this.getcolorsArray = function() {
		return tempcolorArray;
	};
	
	this.insertData = function() {
		
		var option = {
				tooltip : {
					  show : tooltipVisible,
					formatter:"{b} <br/>"+'{c}'+sign
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
						name: valuedesc,
						type:'gauge',
						center : ['50%', '50%'],
						radius : [0, '75%'],
						startAngle: startAngle,
						endAngle : endAngle,
						min: minNum,
						max: maxNum,
						precision: precision,
						splitNumber: splitNumber,
						axisLine: {
							show: true,
							lineStyle: {
							//	color: [[value1, color1],[value2, color2],[1, color3]], 
							color: colorArray,
								width: thick
							}
						},
						axisTick: {
							show: true,
							splitNumber: 0,
							length :10,
							lineStyle: {
								color: '#eee',
								width: 1,
								type: 'solid'
							}
						},
						splitLine: {
							show: splitLineVisible,
							length :30,
							lineStyle: {
								color: splitLineColor,
								width: splitLineWidth,
								type: 'solid'
							}
						},
			            axisLabel: {         
			                show: true,
			                formatter: function(v){
			                    switch (v+''){
			                        case '10': return '10';
			                        default: return parseFloat(v).toFixed(maxMinDecimal);
			                    }
			                },
			                textStyle: {    
			                    color: '#333'
			                }
			            },
					    pointer : {
							length : pointerLength,
							width : pointerWidth,
							color : pointerColor
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
							show : tickValueVisible,
							backgroundColor: 'rgba(0,0,0,0)',
							borderWidth: 0,
							borderColor: '#ccc',
							width: 100,
							height: 40,
							//offsetCenter: ['-60%', '-30%'],
							formatter:tickValueUser+sign,
							textStyle: {
								color: '#000',
								fontSize : tickValueFontSize,
								fontFamily: tickValueFontFamily
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
			return min;
		} else {
			min = value;
			return this;
		};
	};
	
	this.Max = function(value) {
		if(value===undefined) {
			return max;
		} else {
			max = value;
			return this;
		};
	};
	
	
	this.MaxMinDecimal = function(value) {
		if(value===undefined) {
			return maxMinDecimal;
		} else {
			maxMinDecimal = value;
			return this;
		};
	};
	
	
	
	this.Precision = function(value) {
		if(value===undefined) {
			return precision;
		} else {
			precision = value;
			return this;
		};
	};
	
	this.SplitNumber = function(value) {
		if(value===undefined) {
			return splitNumber;
		} else {
			splitNumber = value;
			return this;
		};
	};
	
	/*this.Color1 = function(value) {
		if(value===undefined) {
			return color1;
		} else {
			color1 = value;
			return this;
		};
	};
	
	this.Color2 = function(value) {
		if(value===undefined) {
			return color2;
		} else {
			color2 = value;
			return this;
		};
	};
	
	this.Color3 = function(value) {
		if(value===undefined) {
			return color3;
		} else {
			color3 = value;
			return this;
		};
	};
	
	this.Value1 = function(value) {
		if(value===undefined) {
			return value1;
		} else {
			value1 = value;
			return this;
		};
	};
	
	this.Value2 = function(value) {
		if(value===undefined) {
			return value2;
		} else {
			value2 = value;
			return this;
		};
	};
	
	this.Value3 = function(value) {
		if(value===undefined) {
			return value3;
		} else {
			value3 = value;
			return this;
		};
	};
	*/
	this.Thick = function(value) {
		if(value===undefined) {
			return thick;
		} else {
			thick = value;
			return this;
		};
	};
	
	this.TickValue = function(value) {
		if(value===undefined) {
			return tickValue;
		} else {
			tickValue = value;
			return this;
		};
	};
	



	this.ValueDesc = function(value) {
		if(value===undefined) {
			return valueDesc;
		} else {
			valueDesc = value;
			return this;
		};
	};




this.StartAngle = function(value) {
	if(value===undefined) {
		return startAngle;
	} else {
		startAngle = value;
		return this;
	};
};

this.EndAngle = function(value) {
	if(value===undefined) {
		return endAngle;
	} else {
		endAngle = value;
		return this;
		};
	};
	
	this.Sign = function(value) {
		if(value===undefined) {
			return sign;
		} else {
			sign = value;
			return this;
			};
		};
		
		this.TickValueFontSize = function(value) {
			if(value===undefined) {
				return tickValueFontSize;
			} else {
				tickValueFontSize = value;
				return this;
				};
			};
			
			this.TickValueFontFamily = function(value) {
				if(value===undefined) {
					return tickValueFontFamily;
				} else {
					tickValueFontFamily = value;
					return this;
					};
				};
				
				
				
				this.SplitLineVisible = function(value) {
					if(value===undefined) {
						return splitLineVisible;
					} else {
						splitLineVisible = value;
						return this;
						};
					};
					
					
					this.TickValueVisible = function(value) {
						if(value===undefined) {
							return tickValueVisible;
						} else {
							tickValueVisible = value;
							return this;
							};
						};
						
					
					this.SplitLineColor = function(value) {
						if(value===undefined) {
							return splitLineColor;
						} else {
							splitLineColor = value;
							return this;
							};
						};
						
						this.SplitLineWidth = function(value) {
							if(value===undefined) {
								return splitLineWidth;
							} else {
								splitLineWidth = value;
								return this;
								};
							};
							
							this.PointerLength = function(value) {
								if(value===undefined) {
									return pointerLength;
								} else {
									pointerLength = value;
									return this;
									};
								};
								
								this.PointerWidth = function(value) {
									if(value===undefined) {
										return pointerWidth;
									} else {
										pointerWidth = value;
										return this;
										};
									};
				
									this.PointerColor = function(value) {
										if(value===undefined) {
											return pointerColor;
										} else {
											pointerColor = value;
											return this;
											};
										};
										
										this.TooltipVisible = function(value) {
											if(value===undefined) {
												return tooltipVisible;
											} else {
												tooltipVisible = value;
												return this;
												};
											};
											
											this.ColorNum = function(value) {
												if(value===undefined) {
													return colorNum;
												} else {
													colorNum = value;
													return this;
													};
												};

												
												this.Rangevalues = function(value) {
													if(value===undefined) {
														return colorArray;
													} else {
														tempcolorArray=value;
														colorArray = eval(value);

														return this;
														};
													};
});
