
setImmediate(function() {
Java.perform(function() {
	var targetClass='g.z.b.h.y.e';
	var methodName='f';
	var gclass = Java.use(targetClass);
	gclass[methodName].overload('com.sinyee.babybus.network.encrypt.EncryptTypeEnum','java.lang.String','java.lang.String').implementation = function(arg0,arg1,arg2) {
		console.log('\nGDA[Hook f(com.sinyee.babybus.network.encrypt.EncryptTypeEnum,java.lang.String,java.lang.String)]'+'\n\targ0---f = '+arg0+'\n\targ1---f = '+arg1+'\n\targ2---f = '+arg2);
		var i=this[methodName](arg0,arg1,arg2);
		console.log('\treturn----f '+i);
		return i;
	}

	var targetClass1='g.z.b.h.y.e';
	var methodName1='d';
	var gclass1 = Java.use(targetClass1);
	gclass1[methodName1].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
		console.log('\nGDA[Hook d(java.lang.String,java.lang.String)]'+'\n\targ0---d = '+arg0+'\n\targ1---d = '+arg1);
		var i=this[methodName1](arg0,arg1);
		console.log('\treturn----d '+i);
		return i;
	}
	var targetClass2='g.z.b.h.y.e';
	var methodName2='e';
	var gclass2 = Java.use(targetClass2);
	gclass2[methodName2].overload('java.lang.String','java.lang.String').implementation = function(arg0,arg1) {
		console.log('\nGDA[Hook e(java.lang.String,java.lang.String)]'+'\n\targ0---e = '+arg0+'\n\targ1---e = '+arg1);
		var i=this[methodName2](arg0,arg1);
		console.log('\treturn----e '+i);
		return i;
	}



})
})
//宝宝巴士app