const accountId = 144533
let accountEmail = "hero@google.com"
var accountpassword = "122334"
accountCity = "balasore"
/*
 prefer not to use var 
 because of issue in block scope and functional scope 
 */

// accountId = 2//not allowed
accountEmail = "hfeghfg@g.com"
accountpassword = "gydfggfygs"
accountCity = "bengaluru"
let accountstate; // semicolon optional


console.log(accountId);


console.table([accountId,accountEmail,accountpassword,accountCity,accountstate])