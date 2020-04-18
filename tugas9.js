function cobaObject(){
  var anjing = {
    nama : "Gavin",
    kelamin: "laki-laki",
    jenis: "cocker spaniel terrier"
  }

 for(var x in anjing){
   console.log(x,":",anjing[x]);
 }
}

cobaObject();
