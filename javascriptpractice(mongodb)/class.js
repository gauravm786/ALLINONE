/*
var student=                              
{
    Name:"Gaurav",
    Address:"Google",
    RollNumber:12,
    isGraduated:true,
    12:123,
    details: function()
    {
       console.log(this.Name)
       console.log(this.Address)
       console.log(this.RollNumber)
       console.log(this.isGraduated)
       console.log(this[12])
    },
    getName: (LastName)=>
    {
      return  this.Name+" "+LastName
    }
};
*/

//constructor:-To have different attribute inside class,constructor is used

/*
class student                                             //gaurav,gaurav,google,12,false
{
  constructor(name,address,rollnumber,isgraduated)
  {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
*/

/*
class student{                                           //gaurav,gaurav,google,12,false,gaurav mishra
  constructor(name,address,rollnumber,isgraduated)
 {
    this.name=name
    this.address=address
    this.rollnumber=rollnumber
    this.isgraduated=isgraduated
  }
  details()
    {
       console.log(this.name)
       console.log(this.address)
       console.log(this.rollnumber)
       console.log(this.isgraduated)
    }
    getName(lastName)
    {
    return this.name+" "+lastName
    }
}
var student1= new student("gaurav","google",12,false)
console.log(student1.name)
student1.details()
var fullname=student1.getName("Mishra")
console.log(fullname)
//in classes we dont need function (details,getName) can also be created without function
*/
