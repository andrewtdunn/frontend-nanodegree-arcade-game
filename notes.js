// Funcitonal pattern subclasses

var Car = function(loc){
    var obj = {loc:loc};
    obj.move = function(){
        obj.loc++;
    };
    return obj;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();
var cal = Car(2);
cal.move();
cal.call();

// --------

var Car = function(){
    obj.move = function(){
        obj.loc++;
    }
    return {loc:loc};
};

var Van = function(loc){
    var obj = Car(loc);
    obj.grab = function(){
        obj.loc++;
    }
    return obj;
};

var Cop = function(loc){
    var obj = Car(loc);
    obj.call = function(){
        obj.loc++;
    }
    return obj;
};

var amy = Van(1);
amy.move();
var ben = Van(9);
ben.move();
var cal = Cop(2);
cal.move();
cal.call();


// Psuedoclassical Subclasses


var Car = function(loc){
    this.loc = loc;
};

// Your code goes here!
Car.prototype.move = function(){
    this.loc++;
};


var Van = function(loc){
    Car.call(this, loc);
};

Van.prototype = Object.create(Car.protoype);



Van.prototype.grab = function(){ /* ... */};



