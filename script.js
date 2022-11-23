const home = document.querySelector("nav ul .li1");
const container = document.querySelector('.container')
const navigations = document.querySelectorAll('nav ul li a')
const contents = document.querySelectorAll('.content')
const content1 = document.querySelector('.container-body');

container.addEventListener('click', function(e) {

    if (e.target.className == 'nav-btn'){
        navigations.forEach(function(navigation) {
            if (navigation.classList.contains('active')){
                navigation.classList.remove('active')
            }
        })
        e.target.classList.add('active')
        // console.log(e.target.getAttribute('id'));
        contents.forEach(function(content) {
            // untuk home page
            if(content.classList.contains('inSlideRightHome')){
                content.classList.remove('inSlideRightHome');
                content.classList.add('outSlideRightHome');
                setTimeout(function() {
                    content.classList.remove('outSlideRightHome');
                },500)
            }
        
            setTimeout(function() {
                // universal
                content.classList.add('hidden')
                // 
                // if (content.getAttribute('id') == 'home') {
                //     content.classList.add('inSlideRightHome');
                // }
                // if (content.getAttribute('id') == 'skills') {
                //     content.classList.add('inSlideRightHome');
                // }
                // if (content.getAttribute('id') == 'project') {
                //     content.classList.add('inSlideRightHome');
                // }
                content.classList.add('inSlideRightHome');
                if (content.getAttribute('id') == e.target.getAttribute('id')){
                    
                    content.classList.remove('hidden')
                    setTimeout(function() {
                        content.scrollTo({ top: 0, behavior: 'smooth' }); 
                    },300)
                }
            },500)
            
        })
    }
});

