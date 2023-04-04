let user=prompt("enter s,wor g")
let cpuI=Math.floor(Math.random()*3)
let cpu=["s","w","g"][cpuI]
const match=(cpu,user)=>{
  if(cpu===user){
    return  "match is tie"
}
else if(cpu==="g" && user==="s"){
  return "cpu"
}
else if(cpu==="w" && user==="s"){
  return "user"
}
  else if(cpu==="g" && user==="w"){
  return "user"
}
  else if(cpu==="s" && user==="w"){
  return "cpu"
}  
else if(cpu==="w" && user==="g"){
return "cpu"
}
  else if(cpu==="s" && user==="g"){
return "user"
}
}
let res=match(cpu,user)
document.write(`cpu:${cpu} <br> user :${user}<br> The Winner is :${res}`)
 