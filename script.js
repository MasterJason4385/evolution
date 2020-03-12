document.getElementById('settings').addEventListener('input',function(){
    document.getElementsByName('INTERNAL')[0].value=parseFloat((Math.pow(10,(document.getElementById('INTERNAL').value/3))).toPrecision(1))
});

document.getElementById('fullscreen').addEventListener('click',function(){
    document.getElementById('scene').style.borderRadius=0;
    document.getElementById('scene').requestFullscreen();
    document.getElementById('scene').style.cursor='none';
    document.getElementById('fullscreen').style.display='none';
    document.getElementById('exit-fullscreen').style.display='block';
});

document.getElementById('exit-fullscreen').addEventListener('click',function(){
    document.exitFullscreen();
    document.getElementById('scene').style.borderRadius='40px';
    document.getElementById('scene').style.cursor='default';
    document.getElementById('fullscreen').style.display='block';
    document.getElementById('exit-fullscreen').style.display='none';
});
