
const canvas = document.querySelector("#myCanvas")
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = "#dadada";
ctx.fillRect(150, 150, 200, 200); 
ctx.stroke()

ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(150, 150, 200, 200);  
ctx.stroke();


ctx.beginPath()
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;
ctx.stroke()



ctx.moveTo(500,0)
ctx.lineTo(350,150)
ctx.stroke()

ctx.moveTo(0,500)
ctx.lineTo(150,350)
ctx.stroke()

ctx.moveTo(500,500)
ctx.lineTo(350,350)
ctx.stroke()

// ctx.beginPath()
// ctx.arc(250,250,100,0,2*Math.PI)
// ctx.stroke()