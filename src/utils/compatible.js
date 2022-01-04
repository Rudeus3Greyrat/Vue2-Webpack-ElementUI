// *flat兼容
Array.prototype.flat = function () {    
    var all= [];    
    for (var i = 0; i < this.length; i++) {        
        if (Object.prototype.toString.call(this[i]) !== '[object Array]') {           
            all.push(this[i]);        
        } else {            
            all = all.concat(this[i].flat())        
        }    
    }    
    return all;
  }
  
  
  