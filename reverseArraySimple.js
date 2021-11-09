function reverseArray(a,b){
  let copyofa = a.slice(0);
  let y=0;
  for(let i =a.length-1; i >= Math.floor((a.length-1)/2); i--){
    
    copyofa[y]=a[i];
    copyofa[i]=a[y];
    y++;
    }
return copyofa;
}

console.log(reverseArray(["A","B","C","D","E","F","G","H"]));