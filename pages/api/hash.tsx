function hashing (user:any,hash:any){
    //Hashig
    const long_user = user.length;
    const long_hash = hash.length;
    let long_concat= long_hash+long_user;
    let concat = user+hash;
    let toAscii = [];
    for (var i=0;i<long_concat;i++){
        toAscii[i]= concat.charCodeAt(i);
    }
    //sumar la posicion 0 y log user-1
    let hash1 = toAscii[0]+toAscii[long_user-1];
   if(hash1>126 && hash1!=0){
       hash1= Math.floor(hash1/2);
   }
   hash1=String.fromCharCode(hash1);
   //sumar de la posicion 1 hasta long user -2
   var hash2=0;
   for(var i=1;i<long_user-1;i++){
       hash2+=toAscii[i];
      
   }
   let text = hash2.toString();
   let suma =0;
   
   while(text.length>1){
       for(var i=0;i<text.length;i++){
           suma+=parseInt(text.charAt(i));
       }
       text=suma.toString();
       suma=0;
       
   }
   hash2=parseInt(text);
   //  x1 y x2
   let x1= long_user+Math.floor(long_hash/2);
   let x2= long_concat;
   //sumar desde long_user hasta x1
   let hash3=0;
   
   for(var i=parseInt(long_user);i<x1;i++){
       hash3+=toAscii[i];
   }
   text=hash3.toString();
   suma=0;
   while(text.length>1){
       for(var i=0;i<text.length;i++){
           suma+=parseInt(text.charAt(i));
       }
       text=suma.toString();
       suma=0;
       
   }
   hash3 = parseInt(text);
   //sumar desde x1 hasta x2

   let hash4=0;
   for (var i=parseInt(x1);i<x2;i++){
       hash4+=toAscii[i];
   }
   text=hash4.toString();
   suma=0;
   while(text.length>1){
       for(var i=0;i<text.length;i++){
           suma+=parseInt(text.charAt(i));
       }
       text=suma.toString();
       suma=0;
       
   }

   hash4 = parseInt(text);
   const final_Hash= hash1.toString()+hash2.toString()+hash3.toString()+hash4.toString();

   return final_Hash;
}

export {hashing};