setImmediate(function() {
Java.perform(function() {

	var targetClass1='g.z.b.h.y.e';
	var methodName1='e';
	var gclass1 = Java.use(targetClass1);
	gclass1[methodName1].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
		console.log('\nGDA[Hook b(java.lang.String,java.lang.String)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
		var i=this[methodName1](arg0,arg1);
		console.log('\treturn111 '+i);
		return i;
	}


	// var targetClass='g.z.b.h.v.b';
	// var methodName='c';
	// var gclass = Java.use(targetClass);
	// gclass[methodName].overload(decodeURIComponent('%5bB'),decodeURIComponent('%5bB')).implementation = function(arg0,arg1) {
	// 	console.log('\nGDA[Hook c(%5bB,%5bB)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
	// 	var i=this[methodName](arg0,arg1);
	// 	console.log('\treturn '+i);
	// 	return i;
	// }

	// var targetClass_ddd='g.z.b.h.v.b';
	// var methodName_ddd='d';
	// var gclass_ddd = Java.use(targetClass_ddd);
	// gclass_ddd[methodName_ddd].overload(decodeURIComponent('%5bI'),decodeURIComponent('%5bI')).implementation = function(arg0,arg1) {
	// 	console.log('\nGDA[Hook d(%5bI,%5bI)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
	// 	var i=this[methodName_ddd](arg0,arg1);
	// 	console.log('\treturn_ddddd '+i);
	// 	return i;
	// }



	// var targetClass122='g.z.b.h.y.e';
	// var methodName122='d';
	// var gclass122 = Java.use(targetClass122);
	// gclass122[methodName122].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
	// 	console.log('\nGDA[Hook d(java.lang.String,java.lang.String)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
	// 	var i=this[methodName122](arg0,arg1);
	// 	console.log('\treturn122 '+i);
	// 	return i;
	// }


	// var targetClass1='g.z.b.h.y.f';
	// var methodName1='g';
	// var gclass1 = Java.use(targetClass1);
	// gclass1[methodName1].overload('okhttp3.Request').implementation = function(arg0) {
	// 	console.log('\nGDA[Hook g(okhttp3.Request)]'+'\n\targ0-------- = '+arg0);
	// 	var i=this[methodName1](arg0);
	// 	console.log('\treturn '+i);
	// 	return i;
	// }

	//
	// var targetClass12='g.z.b.h.y.f';
	// var methodName12='h';
	// var gclass12 = Java.use(targetClass12);
	// gclass12[methodName12].overload('okhttp3.Request','com.sinyee.babybus.network.encrypt.EncryptTypeEnum','java.lang.String','boolean').implementation = function(arg0,arg1,arg2,arg3) {
	// 	console.log('\nGDA[Hook h(okhttp3.Request,com.sinyee.babybus.network.encrypt.EncryptTypeEnum,java.lang.String,boolean)]' + '\n\targ0 = ' + arg0 + '\n\targ1 = ' + arg1 + '\n\targ2 = ' + arg2 + '\n\targ3 = ' + arg3);
	// 	console.log('boy----->',arg0.body())
	// 	var i = this[methodName12](arg0, arg1, arg2, arg3);
	// 	console.log('\treturn1111111111 ' + i);
	// 	return i;
	// }
	// var targetClass3='g.z.b.h.y.f';
	// var methodName3='l';
	// var gclass3 = Java.use(targetClass3);
	// gclass3[methodName3].overload('okio.Buffer').implementation = function(arg0) {
	// 	console.log('\nGDA[Hook l(okio.Buffer)]'+'\n\targ0333333 = '+arg0);
	// 	var i=this[methodName3](arg0);
	// 	console.log('\treturn3333 '+i);
	// 	return i;
	// }
	//
	var targetClass3='g.z.b.h.y.e';
	var methodName3='a';
	var gclass3 = Java.use(targetClass3);
	gclass3[methodName3].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
		console.log('\nGDA[Hook a(java.lang.String,java.lang.String)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
		var i=this[methodName3](arg0,arg1);
		console.log('\treturn '+i);
		return i;
	}

	//
	var targetClass12='g.z.b.h.y.e';
	var methodName12='b';
	var gclass12 = Java.use(targetClass12);
	gclass12[methodName12].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
		console.log('\nGDA[Hook b(java.lang.String,java.lang.String)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1);
		var i=this[methodName12](arg0,arg1);
		console.log('\treturn '+i);
		return i;
	}




})
})
