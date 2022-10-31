
 
 // <animation for side menu (responsive menu)
 <script>
        $(document).ready(function(){
            $('.menu-icon').click(function(){
                var responsivemenu = $('.side-menu');
                responsivemenu.show();
                responsivemenu.animate({
                    left: '0'
                },400);
           
                $('body').append('<div class="back-container"></div>');
                $('.back-container').click(function(){
                    var responsivemenu = $('.side-menu');
                    responsivemenu.animate({
                    left: '-200px'
                    },400,function(){
                        responsivemenu.hide();
                    });
                    $(this).remove();
                })
            })  
        })
    </script>
    
