
function Phone (phoneNumber){
  this.phoneNumber = phoneNumber;
}


Phone.prototype.callPhone = function(telephone){


return this.phoneNumber +' calls ' +  telephone;
};


module.exports = Phone;