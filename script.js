document.getElementById('settings').addEventListener('input',function(){
    document.getElementsByName('INTERNAL')[0].value=parseFloat((Math.pow(10,(document.getElementById('INTERNAL').value/3))).toPrecision(1))
});