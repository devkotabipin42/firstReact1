localStorage.clear()--to clear  localStorage
localStorage.setItem('user','Bipin')---(''key','value')---to add new item and overwrite existing ones
localStorage.getItem(user)----------to get any item
localStorage.removeItem('user)----to remove any item
 

when we set object in local storage 
var obj = {
  user:'Sarthak'
  age:30,
  city:'bhopal'
}

to print this object we should first covert or stringfy the object then we can print in string form
JSON.stringify:Array/Object == String
JSON.parse.String == Array/object

var new obj = JSON.stringfy(obj)
localStorage,setItem('obj',newObj)

we can write this way also 
localStorage.setItem('obj',JSON.stringify(obj))

while we print in obj form then we 
var realObj = JSON.parse(obj)



Session storage

