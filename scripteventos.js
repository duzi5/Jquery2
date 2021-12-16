
$(document).ready(()=>{
    
    
    var n 
    for(n=1; n<=60; n++){
        $('body').append('<div class="ocupaespaço"><p> ' +n+ ' </p> </div>')
       
    }
    
    $('.ocupaespaço').css('background-color', 'pink').css('border-radius', '50%')
    
    
  
    $('.ocupaespaço').css('width','100px').css('height', '100px').css('margin', '20px').css('display', 'inline-block').css('justify-content', 'center').css('align-items', 'center')
    $('.ocupaespaço p').css('font-size', '5rem').css('color', 'white').css('margin', 'auto').css('text-align', 'center').css('vertical-align' , 'middle').css('padding', 'auto').css('margin', 'auto').css('padding', 'auto') 
    
    
   
    
    $('.selecionado').css('background-color', 'red')
  
    
    
    $(window).scroll(()=>{
        $('h1').css('color', 'green')
    })
})    
