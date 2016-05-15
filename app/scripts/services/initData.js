'use strict';

angular.module('stApp').factory('InitData',function(){

	var initData;


return {
	setValue: function(value){
		initData = value;
	},

	getValue: function(){
		return initData;
	}

};
});
