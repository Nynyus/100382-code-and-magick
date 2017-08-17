window.renderStatistics = function(ctx, names, times) {
var cloudX = 100;
var cloudY = 10; 
var cloudWidth = 420;
var cloudHeight = 270;
var shift = 10; 
var barWidth = 40;
var indent = 90;
var barX = 120;
var barY = 250;
var barMargin = 15;
    
    
ctx.fillStyle = "rgba(0,0,0,0.7)";
ctx.strokeRect(cloudX+shift, cloudY+shift,cloudWidth,cloudHeight);
ctx.fillRect(cloudX+shift, cloudY+shift,cloudWidth,cloudHeight);    
ctx.fillStyle = "rgba(256,256,256,1)";
ctx.strokeRect(cloudX, cloudY,cloudWidth,cloudHeight);
ctx.fillRect(cloudX, cloudY,cloudWidth,cloudHeight);   

ctx.fillStyle = "#000";
ctx.font = "14px PT Mono";   
ctx.fillText("Ура вы победили", 130, 40);
ctx.fillText("Список результатов:", 130, 60);
ctx.textBaseline = "hanging";
    

    var max = -1;
    var maxIndex = -1;
    for (var i = 0; i<times.length; i++){
        
        if(times[i]>max){
            max = times[i];
            maxIndex = i;
        }
        
    }
    var histogramWidth = 150;
    var step = histogramWidth/(max-0);
    
    
    
    
    for (var i = 0; i<times.length; i++){
        if(names[i]=== "Катя"|| names[i]=== "Игорь"||names[i]=== "Кекс"){
        ctx.fillStyle = "rgba(0, 0, 255, " + (Math.random()+0.4)/10 +  ")";
        ctx.fillRect(barX+indent*i, barY, barWidth, times[i]*step*(-1));
        
        }
        else 
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.fillRect(barX+indent*i, barY, barWidth, times[i]*step*(-1));

    }
    for (var i = 0; i<times.length; i++){
       ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.font = "14px PT Mono";
        ctx.fillText(names[i], barX+indent*i, barY+barMargin);
        ctx.fillText(Math.floor(times[i]), barX+indent*i, barY - (times[i]*step) - barMargin);
    }
};
