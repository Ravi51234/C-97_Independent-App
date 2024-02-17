var questions = ["Hawa Mahal.avif","India Gate.webp","Indian Palace.webp","Kandariya Mahadeva Temple.webp","Mosque Jama Masjid.webp","Qutub Minar.webp","Red Fort.jpg","Sanchi Stupa.jpg","Taj Mahal.webp","Victoria Memorial.webp"];

var random = Math.floor(Math.random()*10);
console.log(random);
var image = questions[random];
console.log(image);
document.getElementById("image").src = image;

function upload(){

    var random = Math.floor(Math.random()*10);
    console.log(random);
    var image = questions[random];
    console.log(image);
    document.getElementById("image").src = image;
    
    if(image == "Hawa Mahal.avif"){
        document.getElementById("option1").innerHTML = "Taj Mahal";
        document.getElementById("option2").innerHTML = "Hawa Mahal";
        document.getElementById("option3").innerHTML = "Red Fort";
        document.getElementById("option4").innerHTML = "Victoria Memorial";
    }else if(image == "India Gate.webp"){
        document.getElementById("option1").innerHTML = "India Gate";
        document.getElementById("option2").innerHTML = "Lotus Temple";
        document.getElementById("option3").innerHTML = "Indian Palace";
        document.getElementById("option4").innerHTML = "Kandariya Mahadeva Temple";
    }else if(image == "Indian Palace.webp"){
        document.getElementById("option1").innerHTML = "Red Fort";
        document.getElementById("option2").innerHTML = "Humavan's Tomb";
        document.getElementById("option3").innerHTML = "Victoria Memorial";
        document.getElementById("option4").innerHTML = "Indian Palace";
    }else if(image == "Kandariya Mahadeva Temple.webp"){
        document.getElementById("option1").innerHTML = "Kandariya Mahadeva Temple";
        document.getElementById("option2").innerHTML = "Hawa Mahal";
        document.getElementById("option3").innerHTML = "Sanchi Stupa";
        document.getElementById("option4").innerHTML = "Mosque Jama Masjid";
    }else if(image == "Mosque Jama Masjid.webp"){
        document.getElementById("option1").innerHTML = "Kandariya Mahadeva Temple";
        document.getElementById("option2").innerHTML = "Mosque Jama Masjid";
        document.getElementById("option3").innerHTML = "Qutub Minar";
        document.getElementById("option4").innerHTML = "Sanchi Stupa";
    }else if(image == "Qutub Minar.webp"){
        document.getElementById("option1").innerHTML = "Mosque Jama Masjid";
        document.getElementById("option2").innerHTML = "Hawa Mahal";
        document.getElementById("option3").innerHTML = "Qutub Minar";
        document.getElementById("option4").innerHTML = "Taj Mahal";
    }else if(image == "Red Fort.jpg"){
        document.getElementById("option1").innerHTML = "Red Fort";
        document.getElementById("option2").innerHTML = "Sanchi Stupa";
        document.getElementById("option3").innerHTML = "Hawa Mahal";
        document.getElementById("option4").innerHTML = "Golden Temple";
    }else if(image == "Sanchi Stupa.jpg"){
        document.getElementById("option1").innerHTML = "Kandariya Mahadeva Temple";
        document.getElementById("option2").innerHTML = "Golden Temple";
        document.getElementById("option3").innerHTML = "Sanchi Stupa";
        document.getElementById("option4").innerHTML = "Lotus Temple";
    }else if(image == "Taj Mahal.webp"){
        document.getElementById("option1").innerHTML = "Taj Mahal";
        document.getElementById("option2").innerHTML = "Qutub Minar";
        document.getElementById("option3").innerHTML = "Mosque Jama Masjid";
        document.getElementById("option4").innerHTML = "Victoria Memorial";
    }else if(image == "Victoria Memorial.webp"){
        document.getElementById("option1").innerHTML = "Amer Fort";
        document.getElementById("option2").innerHTML = "Victoria Memorial";
        document.getElementById("option3").innerHTML = "Kandariya Mahadeva Temple";
        document.getElementById("option4").innerHTML = "Indian Palace";
    }
    document.getElementById("result").innerHTML = "";
}

function submit(){
    document.getElementById("next").style.display = "inline-block";
    input_text = document.getElementById("input").value;
    if(image == "Hawa Mahal.avif"){
       if(input_text == "hawa mahal"){
        document.getElementById("result").innerHTML = "Yay! Right Answer!!";
        document.getElementById("result").style.color = "green";
        }else{
            document.getElementById("result").innerHTML = "Oops! Wrong Answer";
            document.getElementById("result").style.color = "red";
        }
    }
    if(image == "India Gate.webp"){
        if(input_text == "india gate"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Indian Palace.webp"){
        if(input_text == "indian palace"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Kandariya Mahadeva Temple.webp"){
        if(input_text == "kandariya mahadeva temple"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Mosque Jama Masjid.webp"){
        if(input_text == "mosque jama masjid"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Qutub Minar.webp"){
        if(input_text == "qutub minar"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Red Fort.jpg"){
        if(input_text == "red fort"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Sanchi Stupa.jpg"){
        if(input_text == "sanchi stupa"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Taj Mahal.webp"){
        if(input_text == "taj mahal"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }else if(image == "Victoria Memorial.webp"){
        if(input_text == "victoria memorial"){
            document.getElementById("result").innerHTML = "Yay! Right Answer!!";
            document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "Oops! Wrong Answer";
                document.getElementById("result").style.color = "red";
            }
    }
}
