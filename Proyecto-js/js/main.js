$(document).ready(function(){

    if (localStorage.getItem("userName") != null && localStorage.getItem("userEmail") != null && localStorage.getItem("userPassword") != null) {
        login(localStorage.getItem("userName"));
    }


    //LocalStorage css saved
    var theme = $("#theme");
    theme.attr("href",localStorage.getItem("href"));

    //Slider
    if(window.location.href.indexOf("index") > -1 || window.location.href.indexOf("reloj") > -1 || window.location.href.indexOf("contact") > -1 ){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: false,
        });
    }

    //Posts
    if(window.location.href.indexOf("index") > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el ' +moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY')+ ' a las ' + moment().format('h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et non id itaque dolorem! Soluta quia molestiae quo non tenetur quae cupiditate asperiores fuga, error omnis veritatis impedit optio dolorum. Voluptas corrupti quaerat cupiditate? Quaerat odit adipisci numquam facere esse sit maxime quis sequi natus dicta commodi iusto deserunt illum, incidunt excepturi quam aspernatur quasi voluptas? Magni dignissimos temporibus perspiciatis. Fugiat cumque officiis impedit dolore consectetur, quisquam quia a at labore sapiente eaque eveniet asperiores totam? Magnam placeat dolores porro reprehenderit eius dolor pariatur, in corporis, eaque repudiandae, illum neque?'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el ' +moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY')+ ' a las ' + moment().format('h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et non id itaque dolorem! Soluta quia molestiae quo non tenetur quae cupiditate asperiores fuga, error omnis veritatis impedit optio dolorum. Voluptas corrupti quaerat cupiditate? Quaerat odit adipisci numquam facere esse sit maxime quis sequi natus dicta commodi iusto deserunt illum, incidunt excepturi quam aspernatur quasi voluptas? Magni dignissimos temporibus perspiciatis. Fugiat cumque officiis impedit dolore consectetur, quisquam quia a at labore sapiente eaque eveniet asperiores totam? Magnam placeat dolores porro reprehenderit eius dolor pariatur, in corporis, eaque repudiandae, illum neque?'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el ' +moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY')+ ' a las ' + moment().format('h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et non id itaque dolorem! Soluta quia molestiae quo non tenetur quae cupiditate asperiores fuga, error omnis veritatis impedit optio dolorum. Voluptas corrupti quaerat cupiditate? Quaerat odit adipisci numquam facere esse sit maxime quis sequi natus dicta commodi iusto deserunt illum, incidunt excepturi quam aspernatur quasi voluptas? Magni dignissimos temporibus perspiciatis. Fugiat cumque officiis impedit dolore consectetur, quisquam quia a at labore sapiente eaque eveniet asperiores totam? Magnam placeat dolores porro reprehenderit eius dolor pariatur, in corporis, eaque repudiandae, illum neque?'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el ' +moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY')+ ' a las ' + moment().format('h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et non id itaque dolorem! Soluta quia molestiae quo non tenetur quae cupiditate asperiores fuga, error omnis veritatis impedit optio dolorum. Voluptas corrupti quaerat cupiditate? Quaerat odit adipisci numquam facere esse sit maxime quis sequi natus dicta commodi iusto deserunt illum, incidunt excepturi quam aspernatur quasi voluptas? Magni dignissimos temporibus perspiciatis. Fugiat cumque officiis impedit dolore consectetur, quisquam quia a at labore sapiente eaque eveniet asperiores totam? Magnam placeat dolores porro reprehenderit eius dolor pariatur, in corporis, eaque repudiandae, illum neque?'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el ' +moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY')+ ' a las ' + moment().format('h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et non id itaque dolorem! Soluta quia molestiae quo non tenetur quae cupiditate asperiores fuga, error omnis veritatis impedit optio dolorum. Voluptas corrupti quaerat cupiditate? Quaerat odit adipisci numquam facere esse sit maxime quis sequi natus dicta commodi iusto deserunt illum, incidunt excepturi quam aspernatur quasi voluptas? Magni dignissimos temporibus perspiciatis. Fugiat cumque officiis impedit dolore consectetur, quisquam quia a at labore sapiente eaque eveniet asperiores totam? Magnam placeat dolores porro reprehenderit eius dolor pariatur, in corporis, eaque repudiandae, illum neque?'
            }
        ];


        posts.forEach((item, index) =>{

            let post =`<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="buttonMore">Leer más</a>
                </article>`;
                $('#posts').append(post);
        });
    }
    //Selector de tema


    function toLocalStorege(){
        localStorage.setItem("href", theme.attr("href"));
    }

    if(localStorage.getItem("href") != null && localStorage.getItem("href") != ""){
        theme.attr("href", localStorage.getItem("href"));
        toLocalStorege();
    }else{
        theme.attr("href", "css/green.css");
        toLocalStorege();
    }

    $("#green").click(function(){
        theme.attr("href","css/green.css");
        toLocalStorege();
    });
    
    $("#blue").click(function(){
        theme.attr("href","css/blue.css");
        toLocalStorege();
    });

    $("#red").click(function(){
        theme.attr("href","css/red.css");
        toLocalStorege();
    });

    $("#buttonUp").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //Usuario LocalStorag


    $("#login form").submit(function(event){
        var userName = $("#name").val();
        var userEmail = $("#email").val();
        var userPassword = $("#password").val();
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);
    
    
        var checkName = userName == localStorage.getItem("userName") && userEmail == localStorage.getItem("userEmail") && userPassword == localStorage.getItem("userPassword") ? true : false;
        console.log(checkName);
        if(checkName){
            event.preventDefault();
            login(userName);
        }else{
            alert("Algun campo de los introducidos no es correcto");
        }; 
    });

    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf("reloj") > -1){
        let reloj;
        setInterval(function(){
        reloj = moment().format('h:mm:ss');
        $("#reloj").html(reloj);
        }, 1000);
    }
    if(window.location.href.indexOf("contact") > -1){
        $("form input[name='date']").datepicker(
            {
                dateFormat: 'dd/mm/yy',
            }
        );
        $.validate({
            lang: 'es',
            modules : 'date, security',
            errorMessagePosition: 'top',
            scrollToTopOnError: true,
        });
    }
});

//funciones auxiliares

function login(userName){
    $("#login").hide();
    $("#about p").html('<hr id="hr1"><strong>Bienvenido ' + userName + '</strong><button onclick="logout()" id="logout">Salir</button><hr id="hr2">').css("font-size", "16px");
    $("#hr1").css("margin-bottom", "3px");
    $("#hr2").css("margin-top", "6px");
}

function logout(){
    $("#logout").hide();
    $("#about p").html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae earum eum nulla hic maxime saepe delectus nisi aut, explicabo deleniti praesentium nesciunt tenetur cum, reprehenderit impedit eligendi? Odit, quidem.');
    $("#login").show();
    $("#name").val("");
    $("#email").val("");
    $("#password").val("");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
}

