$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){

    document.getElementById("sun_text").textContent = "-";
    document.getElementById("moon_text").textContent = "-";
    document.getElementById("jupiter_text").textContent = "-";
    document.getElementById("rahu_text").textContent = "-";
    document.getElementById("mercury_text").textContent = "-";
    document.getElementById("venus_text").textContent = "-";
    document.getElementById("ketu_text").textContent = "-";
    document.getElementById("saturn_text").textContent = "-";
    document.getElementById("mars_text").textContent = "-";

    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.getElementById("gender_input").value;
    var full_dob = document.getElementById("dob_input").value;

    if (first_name_input == "" || gender == "" || full_dob=="") {
        alert("Please fill out all the input fields!");
    }
    else if(first_name_input.indexOf(' a') !== -1 || first_name_input.indexOf(' A') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' b') !== -1|| first_name_input.indexOf(' B') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' c') !== -1|| first_name_input.indexOf(' C') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' d') !== -1|| first_name_input.indexOf(' D') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' e') !== -1|| first_name_input.indexOf(' E') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' f')!== -1 || first_name_input.indexOf(' F') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' g') !== -1|| first_name_input.indexOf(' G') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' h') !== -1|| first_name_input.indexOf(' H') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' i') !== -1|| first_name_input.indexOf(' I') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' j') !== -1|| first_name_input.indexOf(' J') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' k') !== -1|| first_name_input.indexOf(' K') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' l') !== -1|| first_name_input.indexOf(' L') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' m') !== -1|| first_name_input.indexOf(' M') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' n') !== -1|| first_name_input.indexOf(' N') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' o') !== -1|| first_name_input.indexOf(' O') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' p') !== -1|| first_name_input.indexOf(' P') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' q') !== -1|| first_name_input.indexOf(' Q') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' r') !== -1|| first_name_input.indexOf(' R') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' s') !== -1 || first_name_input.indexOf(' S') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' t') !== -1|| first_name_input.indexOf(' T') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' u') !== -1 || first_name_input.indexOf(' U') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' v') !== -1|| first_name_input.indexOf(' V') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' w' ) !== -1 || first_name_input.indexOf(' W') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' x') !== -1|| first_name_input.indexOf(' X') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' y') !== -1|| first_name_input.indexOf(' Y') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else if(first_name_input.indexOf(' z') !== -1|| first_name_input.indexOf(' Z') !== -1){
        console.log("Space");
        alert("Please fill only your first name in the first-name input box. The middle name / last name is to be added in the last-name input box.")
    }
    else {
        console.log("Loading") 

        var result_box = document.getElementById("result_box");
    
        if (result_box.style.display = "none") {
            result_box.style.display = "block";
            console.log("Result box visible")
        }

        var dob_components = full_dob.split("-");
        var date = dob_components[2];
        var month = dob_components[1];
        var year = dob_components[0];
        console.log(date);
        console.log(month);
        console.log(year);
        
        //Psychic Number

        var date_1 = String(date).charAt(0);
        var date_2 = String(date).charAt(1);
        date_1_no = parseInt(date_1);
        date_2_no = parseInt(date_2);
        var p = date_1_no + date_2_no;
        console.log("p = " + p);
        if (p.toString().length > 1){
            var p_1 = String(p).charAt(0);
            var p_2 = String(p).charAt(1);
            p_1_no = parseInt(p_1);
            p_2_no = parseInt(p_2)
            psychic_number = p_1_no + p_2_no;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        else{
            psychic_number = p;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        

        if (date_1_no == 0 || date == 10 || date == 20 || date == 30){
            console.log("Psychic No. will not be printed.")
            var printed = "no"
        }

        else {
            console.log("Psychic No. will be printed.")
            var printed = "yes"
        }

        //Destiny Number

        var month_1 = String(month).charAt(0);
        var month_2 = String(month).charAt(1);
        month_1_no = parseInt(month_1);
        month_2_no = parseInt(month_2);  
        
        var year_1 = String(year).charAt(0);
        var year_2 = String(year).charAt(1);
        var year_3 = String(year).charAt(2);
        var year_4 = String(year).charAt(3);
        year_1_no = parseInt(year_1);
        year_2_no = parseInt(year_2);
        year_3_no = parseInt(year_3);
        year_4_no = parseInt(year_4);

        var d = date_1_no + date_2_no + month_1_no + month_2_no + year_1_no + year_2_no + year_3_no + year_4_no;
        console.log("d = " + d);

        if (d.toString().length > 1){
            var d_1 = String(d).charAt(0);
            var d_2 = String(d).charAt(1);
            d_1_no = parseInt(d_1);
            d_2_no = parseInt(d_2);
            d2 = d_1_no + d_2_no;
            console.log("d2 = " + d2);
            if (d2.toString().length > 1){
                var d2_1 = String(d2).charAt(0);
                var d2_2 = String(d2).charAt(1);
                d2_1_no = parseInt(d2_1);
                d2_2_no = parseInt(d2_2);
                destiny_number = d2_1_no + d2_2_no;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
    
            else{
                destiny_number = d2;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
        }
        else{
            destiny_number = d;
            console.log("Destiny No. : " + destiny_number);
            console.log("Destiny No. will be printed.");
            document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
        }


        //Kua Number

        ky = year_1_no + year_2_no + year_3_no + year_4_no;
        kyn = parseInt(ky);
        console.log("ky = " + kyn)
        if (kyn.toString().length > 1){
            var ky_1 = String(kyn).charAt(0);
            var ky_2 = String(kyn).charAt(1);
            kyn_1 = parseInt(ky_1);
            kyn_2 = parseInt(ky_2);
            ky2 = kyn_1 + kyn_2;
            console.log("ky2 = " + ky2);
            if (ky2.toString().length > 1){
                var ky2_1 = String(ky2).charAt(0);
                var ky2_2 = String(ky2).charAt(1);
                kyn2_1 = parseInt(ky2_1);
                kyn2_2 = parseInt(ky2_2);
                var year_total = kyn2_1 + kyn2_2;
                console.log("Year Total : " + year_total);
            }
    
            else{
                year_total = ky2;
                console.log("Year Total : " + year_total);
            }
        }

        else{
            year_total = kyn;
            console.log("Year Total : " + year_total);
        }

        if(gender == "male"){
            k_number = 11 - year_total;

            if (k_number.toString().length > 1){
                var k_1 = String(k_number).charAt(0);
                var k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            

        }
        else if(gender == "female"){
            k_number = year_total + 4;

            if (k_number.toString().length > 1){
                var k_1 = String(k_number).charAt(0);
                var k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                var kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
        }

        //loshu grid length settlement

        sun = document.getElementById("sun_text");
        moon = document.getElementById("moon_text");
        jupiter = document.getElementById("jupiter_text");
        rahu = document.getElementById("rahu_text");
        mercury = document.getElementById("mercury_text");
        venus = document.getElementById("venus_text");
        ketu = document.getElementById("ketu_text");
        saturn = document.getElementById("saturn_text");
        mars = document.getElementById("mars_text");
            
        //date_1_no

        if (date_1_no == "1"){
            document.getElementById("sun_text").textContent = "1";
        }
        else if (date_1_no == "2"){
            document.getElementById("moon_text").textContent = "2";
        }
        else if (date_1_no == "3"){
            document.getElementById("jupiter_text").textContent = "3";
        }
        else if (date_1_no == "4"){
            document.getElementById("rahu_text").textContent = "4";
        }
        else if (date_1_no == "5"){
            document.getElementById("mercury_text").textContent = "5";
        }
        else if (date_1_no == "6"){
            document.getElementById("venus_text").textContent = "6";
        }
        else if (date_1_no == "7"){
            document.getElementById("ketu_text").textContent = "7";
        }
        else if (date_1_no == "8"){
            document.getElementById("saturn_text").textContent = "8";
        }
        else if (date_1_no == "9"){
            document.getElementById("mars_text").textContent = "9";
        }

        //date_2_no

        if (date_2_no == "1"){
                if(date_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (date_2_no == "2"){
                if(date_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (date_2_no == "3"){
                if(date_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (date_2_no == "4"){
                if(date_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (date_2_no == "5"){
                if(date_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (date_2_no == "6"){
                if(date_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (date_2_no == "7"){
                if(date_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (date_2_no == "8"){
                if(date_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (date_2_no == "9"){
                if(date_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //month_1_no

        if (month_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (month_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (month_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (month_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (month_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (month_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (month_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (month_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (month_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //month_2_no

        if (month_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (month_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (month_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (month_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (month_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (month_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (month_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (month_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (month_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_1_no

        if (year_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_2_no

        if (year_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
        if (year_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_3_no

        if (year_3_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_3_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_3_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_3_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_3_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_3_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_3_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_3_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_3_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }
            
        //year_4_no

        if (year_4_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_4_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_4_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_4_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_4_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_4_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_4_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_4_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_4_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //driver no

        if(printed == "yes" && psychic_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if(printed == "yes" && psychic_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(printed == "yes" && psychic_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(printed == "yes" && psychic_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(printed == "yes" && psychic_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(printed == "yes" && psychic_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(printed == "yes" && psychic_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(printed == "yes" && psychic_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(printed == "yes" && psychic_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //conductor number

        if(destiny_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"|| year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes")){
                    sun.textContent += "1";
                }
                else{
                    sun.textContent = "1";
                }
        }
        if(destiny_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes")){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(destiny_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes")){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(destiny_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes")){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(destiny_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes")){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(destiny_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes")){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(destiny_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes")){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(destiny_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes")){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(destiny_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes")){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //kua number

        if(kua_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes") || destiny_number == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if(kua_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes") || destiny_number == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(kua_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes") || destiny_number == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(kua_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes") || destiny_number == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(kua_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes") || destiny_number == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(kua_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes") || destiny_number == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(kua_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes") || destiny_number == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(kua_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes") || destiny_number == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(kua_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes") || destiny_number == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        // dc combination

        if(psychic_number == "1" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are a self-sufficient person and you don’t need any kind of support system in your life. You have a royal, king-like attitude. You want to be the only boss in your life. You are fiercely independent, competitive and determined; you value your freedom. You have great leadership qualities and you are self reliant. You always accomplish the goals you set for yourself. You are perpetually brimming with new ideas and this is what gives you happiness. You have a charismatic personality and you can magically draw everyone’s attention to yourself even in a large crowd. You hate to be overlooked by anyone. However you need to drop your arrogance and dominating tendency towards others."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths : <br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You have a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solve<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and you are a boss<br>11. You like taking decisions for yourself and are royal and king like in looks<br><br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect at all costs<br>4. You are dominating in nature and hence not a good follower<br>5. You are the boss of your own and do not like to work under anyone<br>6. You are a good critique but on the other hand you are not very good at accepting criticism from others"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high but you don't show it to others. You have good leadership qualities and you are self-reliant. You always accomplish whatever goals you set for yourself. You are perpetually brimming with new ideas and this is what gives you happiness. You have a charismatic personality and you can magically draw everyone’s attention to yourself even in a large crowd. You sound very cool. You have a flickering mind set up which means your mind changes and fluctuates a lot. You are sensitive in nature. Intuition, kindness, thoughtfulness, and delicacy are your characteristics. However, one of the most significant characteristics you imbibe is your ability to adapt to various conditions and circumstances."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You have a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure; you are a boss<br>11. You like taking decisions for yourself and are royal and king-like in looks<br><br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect at all costs<br>4. You are dominating in nature and hence not a good follower<br>5. You are a boss of your own and do not like to work under anyone<br>6. You are a good critique. However, you are not very good at accepting criticism from others<br>7. You are the person having a flickering mind who keeps on changing their choices/preferences in life<br>8. You are extremely moody and have mood swings according to different situations<br>9. Nervousness, tensions and anxiety may act as hurdles in your life"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "3"){
            console.log("Done");
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You are a born leader. You are a self-sufficient person; you don't need any kind of support system in life. You have a royal, king-like attitude. You want to be the only boss in life. You are always curious for knowledge. You have good creativity and imagination skills. You have excellent social skills because you are good at communicating. You have a magnetic personality and are simply fun to be around. Sometimes your ego is a little high as you are very knowledgeable but by heart and nature you are emotional. You need to be focused upon. Sometimes you tend to be over dominating and allow your emotions to rule you."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You have a strong, firm, authoritative and royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in their work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and you are a boss<br>11. You like taking decisions for yourself and are royal and king like in looks<br><br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You can be self-centered and want to command respect from others at all costs.<br>4. You are dominating in nature and not a good follower<br>5. You are a boss of your own and do not like to work under anyone<br>6. You are a good critique. However, you are not very good at accepting criticism from others<br>7.  Sometimes, your way of expression of feelings can sound loud and aggressive to others<br>8. Hence, you should make sure that you listen to the point of view of others as well and try to understand them<br>9.  You have a tendency to engage in multitasking<br>10. Taking up multiple things at the same time is not a very good idea for you as you may end up not completing all the tasks which can lead to frustration"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 7"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"
            
        }
        if(psychic_number == "1" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are self sufficient. You don’t need any kind of support system in life. You have a royal, king-like attitude. You want to be the only boss in life. You are very logical and organized. You are very rebellious and argumentative. It can be said you are very stubborn in nature. You are not fond of people who break rules. You plan out all your moves and are highly organized and dependable. You can make your dreams a reality. You are a hard working and good employee. You firmly believe that if you are not going to do a thing well, do not do it at all."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You have a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and you are a boss<br>11. You like taking decisions for yourself and are royal and king like in looks<br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect from others at all costs<br>4. You are dominating in nature and not a good follower<br>5. You are the only boss of your own life and do not like to work under anyone<br>6. You are a good critique but not very good at accepting criticism from others<br>7. You can be very outspoken and blunt at times<br>8. You do not like to sugarcoat things<br>9. Hence, you may come across as a bit rude to other people"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6, 7"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are self sufficient. You don’t need any kind of support-system in life. You have a royal, king-like attitude. You want to be the only boss of your life. Your communication skills are good. You are popular among your circle. It can be said you are a good entertainer. You are a little lazy. You are always young at heart. You love traveling and exploring as you’re curious about what life has to offer. You enjoy meeting new people and being adventurous in every way. You should be a little more committed and keep promises that you make to people. Be there for the people who love you. You need to gather your scattered energies and bring some discipline in your life or you could be left with nothing of lasting value."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You have a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and you are a boss<br>11. You like taking decisions for yourself and are royal and king like in looks<br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect from others at all costs<br>4. You are dominating in nature and not a good follower<br>5. You are the boss of your own and do not like to work under anyone<br>6. You are a good critique. However you are not very good at accepting criticism from others<br>7. You like changes frequently in your life<br>8. You might easily get bored and want to bring frequent changes in your routine<br>9. You might be a bit lazy in life<br>10. You avoid putting physical efforts or doing labor work. You might quit or leave opportunities in life<br>11. You might sometimes take decisions in haste and can even be impulsive in nature"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are self sufficient. You don’t need any kind of support-system in your life. You have a royal, king-like attitude. You want to be the only boss in your life. You have a very powerful aura. You are very sweet spoken and romantic. You care not only for your immediate family but also for others. You love everything beautiful and if you have the means you would spend lavishly on the good things in life. You are manipulative in nature but also supportive to others. Name, fame and money always surround you. You can lie easily and you are tempted towards luxury easily."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You must be having a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and are boss<br>11. You like taking decisions for yourself and are royal and king-like in looks<br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect from others at all costs<br>4. You are dominating in nature and not a good follower<br>5. You are the boss of your life and do not like to work under anyone<br>6. You are a good critique. However, you are not very good at accepting criticism from others<br>7. You need to curb your sensitive nature as you can face hardships because of the same<br>8. There are times you flirt around with people, which means you insinuate to the other person about a possible romantic relationship with you but then you do not commit to them"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"
        }
        if(psychic_number == "1" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are a born leader. You have a royal and king-like attitude want to be the only boss in life. If the other numbers in your chart are supportive, then you would lead a great life. You are creative. You have wisdom. You have the art to solve any issues. Your imagination powers and intuition powers are very good. You tend towards spirituality. You are soft spoken. You have a highly developed intellect bordering on genius and come up with creative and off bit ideas. Your fertile mind is attracted to the metaphysical and occult. You can be very intuitive and find comfort in pursuing the spiritual path. You are never satisfied until you do research, analyze and investigate to link the known with the unknown. Your friends and relatives may understand you better if they see your emotional side. You may have some kind of disappointment in life which can lead you towards depression."
            document.getElementById("pd_combination_s_w").innerHTML = "Your strengths :<br><br>1. You are ruled by the number 1<br>2. You are assertive, individualistic, exuberant and of proud nature<br>3. You hsve a strong, firm, authoritative and a royal nature<br>4. You are an initiator of new beginnings and new ideas<br>5. You always tend to believe and adhere to your ideas if you know that you are on the right track<br>6. You are a person who loves freedom and does not like interference of others in your work<br>7. You always stay alert for challenges coming in your way<br>8. You always move ahead in life with calculated risks and know as how to come out as a problem solver<br>9. You can be called a trendsetter who has a unique taste for everything<br>10. You don't like working under pressure and you are a boss<br>11. You like taking decisions for yourself and are royal and king like in looks<br>Your weaknesses :<br><br>1. You are aggressive and don't like to compromise at any stage of life<br>2. You can be very egoistic and have anger issues at times<br>3. You may even be self-centered and want to command respect from others at all costs<br>4. You are dominating in nature and not a good follower<br>5. You are the boss of your own life and do not like to work under anyone<br>6. You are a good critique. However, you are not very good at accepting criticism from others<br>7. You should not trust people easily as there are high chances that you will get deceived by the people whom you trust the most or by those who are the closest to you<br>8. You are continuously engrossed in negative thoughts, and can be called a day dreamer<br>9. Your thoughts are always in the past or in the future and hence you don't fully enjoy the present"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti combination of Psychic number and Destiny number. If supportive numbers are present in your date of birth, then it is good, otherwise, you would lead a life full of ups and downs. You need to work very hard to achieve success. Most of the time, you would struggle in your life. You might have health issues or relationship issues as well."        
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"
        }
        if(psychic_number == "1" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are very strong mentally and physically, no one can win you by any force. You are like a soldier. You are compassionate in nature. Sometimes, you are short tempered too. You are driven by your mood only."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You have a very good appearance. Your mind swings a lot; it means you have a flickering mind set and you are very moody. Your imagination and intuition powers are good. If you have support in life, no one can stop you from achieving success in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You are very sensitive and emotional. Your mind swings a lot; it means you have a flickering mind set and you are very moody. Your imagination and intuition powers are good. Sometimes, there are chances for you to get depressed very easily in life. You always need someone's support in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
    
        }
        if(psychic_number == "2" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very sensitive and emotional. You are very moody. Your imagination and intuition powers are good. You have good creativity and knowledge. You are a soft-spoken person."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "2" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very moody. Sometimes you are short tempered too. If other supportive numbers are missing in your date of birth, you would face ups and downs in your life. You may face relationship issues in life. You might have to struggle a little for success."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are sensitive and emotional in nature. You have good communication skills. Your imagination and intuition powers are good. You are foody. Sometimes, it is found that these people are chubby and lazy."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You moods change a lot. You are sweet-spoken. You are romantic. You always seek attraction in life. You are family oriented and foody."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "2" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You are very sensitive and emotional. Your mind swings a lot; it means you have a flickering mind set and you are very moody. Your imagination and intuition powers are good. Sometimes, there are chances of you getting depressed very esaily. You always need someone's support in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti combination of Psychic number and Destiny number. You would face ups and downs in your life. You need to work very hard to achieve success. Most of the time, you would face struggle in your life. You might have health issues or relationship issues. You may face struggle in your career too."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "2" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You would face ups and downs in your life. You are moody in nature. Most of the time, you would face struggle in your life. You might have health issues or relationship issues."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "3" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are royal in nature. You have good knowledge and creative skills. You are never a follower in life. With the help of your knowledge, you reach a high position in life. Sometimes your ego is a little high. You are very knowledgeable. By nature, you are emotional."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. You are sensitive and very emotional. You are very intelligent. You are moody and have a flickering mind set. So, you always need support in life and with that support you may reach great heights in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You have good knowledge and creative skills. You are sensitive and very emotional. You are very intelligent. You have good communication skills. Sometimes, you try to break the conventional rules of the society."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. You are organized and intelligent. You get angry easily. You are practical and hard working. If you don't work hard, you may face struggle in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You have good knowledge and creative skills. You are sensitive and very emotional. Sometimes you might even be lazy. You have good communication skills and you are intelligent."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti combination of Psychic number and Destiny number. You would face ups and downs in your life. Most of the time there is struggle in your life. Though you are intelligent and you may have good achievements or luxury in your life but you might have health issues or relationship issues too. You would face struggle in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White, Yellow"

        }
        if(psychic_number == "3" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You have good knowledge and creative skills. With the help of your knowledge you may reach great heights in your life . You are interested in spirituality. Your imagination and intuition powers are good. You are very emotional. Therefore, sometimes there are chances for you to get depressed very easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 7"
            document.getElementById("bad_no").textContent = "Bad No. : 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "3" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. If supportive numbers are present in your date of birth, then its good, otherwise, you would face ups and down in your life. You need to work very hard to achieve success. You are intelligent but if you do not work hard, you may face struggle in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black, White"

        }
        if(psychic_number == "3" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. You are emotional and compassionate in nature. Sometimes you are shortetempered as well. You are driven by your mood. Sometimes your ego is a little high. You are very knowledgeable. By nature you are emotional."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 3, 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "4" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and organized. By nature you are very rebellious and argumentative. It can be said, you are very stubborn. If you work hard, no one can stop you to achieve success. You never follow anyone in life. You are very intelligent."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and intelligent. By nature you are very rebellious and argumentative. Your mind keeps fluctuating frequently. You might face some struggle in your life. Sometimes you may even fall in depression."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical. By nature you are very rebellious and argumentative. You have good knowledge and creative skills. You are organized and intelligent. With the help of your knowledge and hard work you can achieve success in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "4" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and practical. By nature you are very rebellious and argumentative. You get angry easily. You might face some struggle in your life. Sometimes, you might even face legal issues or controversies in life. You only need to work hard in order to achieve success in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are very logical and practical. You are self accountable and self responsible in life. You are a risk taker. You are intelligent. If you work hard, you will definitely achieve success."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are very logical and practical. You are romantic. You always seek attraction in life. You are manipulative in nature but supportive too. You are always surrounded by name, fame and money. You can lie easily and you are tempted towards luxury very often."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 3, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "4" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are very logical and practical. You have good knowledge and creative skills. Your imagination and intuition powers are good. You are emotional. Therefore, sometimes, you might face disappointment and get depressed very easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and practical. By nature you are very rebellious and argumentative. You get angry easily. You might face some struggle in your life. Sometimes, you might even face legal issues or controversies in life. You only need to work hard in order to achieve success in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "4" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and practical. You are physically strong. You are compassionate in nature. Sometimes you are short-tempered. You might have some health issues in life. If supportive numbers are missing in your date of birth, you might face some struggle in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You look smart and you are young at heart. You have good communication skills. You are popular in your friend-circle. It can be said you are a good entertainer. You always want be a leader. You love to lead a royal life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You look smart and you are young at heart. You have good communication skills. Your imagination powers and intuition powers are good. You are foody, you may be chubby and lazy too."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You have good knowledge and creative skills. You are sensitive and very emotional. Sometimes, you are lazy. You have good communication skills and you are intelligent."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black. White"

        }
        if(psychic_number == "5" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You are very logical and practical. You are a risk taker. You are intelligent. If you work hard, you will achieve success. But if you are lazy, you would be far behind success."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You never like to take any pressure and don't like the interference of others in your life. You are always young at heart. You are helpful in nature. Sometimes, you may lazy."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : None"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You look smart and you are young at heart. You have good communication skills. You are romantic in nature. You are very supportive. When needed, you can manipulative things easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "5" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You have good communication skills. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances to face disappointment and depression."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : None"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "5" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You have good communication skills. If supporting numbers in your chart are present, then it's good. Otherwise, you would face ups and downs in your life. You need to work very hard to achieve success. You are intelligent. But if you don't work hard, you may face a lot of struggle in your life. You would always face delay in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "5" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are self-responsible and self-accountable in life. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are driven by your mood only."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "6" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have a very good combination of Psychic number and Destiny number. You have a very powerful aura. You are very sweet spoken and romantic. You are manipulative in nature to some but supportive to others. You are always surrounded by name, fame and money. You can lie easily and you are tempted towards luxury. You love to be  the only leader in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. Your mood changes frequently. You are sweet-spoken and romantic. You always seek attraction in life. You are family-oriented and foody."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti combination of Psychic number and Destiny number. You would face ups and downs in your life. You would face struggle in your life. You are intelligent. You have good knowledge and you may be in good position in life and have luxury. But you might have health issues or relationship issues in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are romantic. You always seek attraction in life. You are manipulative to some in nature but supportive to others. You are always surrounded by name, fame and money. You can lie easily and you are tempted towards luxury all the time. You are very logical and practical. You get angry easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 3, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"
        }
        if(psychic_number == "6" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You look smart and you are young at heart. You have good communication skills. You are romantic in nature. You are very supportive to others. When needed, you can manipulative things easily. You are self-responsible and self-accountable in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have a good combination of Psychic number and Destiny number. You look smart and you are young at heart. You are romantic in nature. You are very supportive to others. You are always obsessed with your kids and loved ones .When needed, you can manipulative things easily. You would have good luxury in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You look smart and you are young at heart. You are romantic in nature. You are very supportive to others. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "6" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You look smart and you are young at heart. You are romantic in nature. You are very supportive to others. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life. You need to work very hard to achieve success. You are intelligent. If you don't work hard, you may face a lot of struggle in your life. You would face delay in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 5, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow, Red"

        }
        if(psychic_number == "6" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You look smart and you are young at heart. You are romantic in nature. You are very supportive to others. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are only driven by your mood."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"

        }
        if(psychic_number == "7" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. If supporting numbers are present in your chart, then you would reach great heights in your life. You are creative. You have wisdom. You know the art of solving any issue. Your imagination powers and intuition powers are very good. You are interested in spirituality. You are soft-spoken. But you will face some kind of disappointment in life which can lead you towards depression. You love to be a leader and you have a little bit of ego too."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "7" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You are very sensitive and emotional. Your mind swings a lot. It means you have a flickering mind set and you are very moody. Your imagination powers and intuition powers are good. Sometimes, there are chances for you to get depressed very easily. You would always need someone's support in life to achieve success."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "7" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. With the help of your knowledge, you may reach great heights in life. You are interested in spirituality. Your imagination powers and intuition powers are good. You are very emotional. Therefore, sometimes there are chances fro you to get depressed very easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 7"
            document.getElementById("bad_no").textContent = "Bad No. : 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"

        }
        if(psychic_number == "7" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are very logical and practical. Sometimes, you get angry easily. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "7" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good communication skills. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are self-responsible and self-accountable in life. You are emotional. Therefore, sometimes there are chances to face disappointment and depression in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : None"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "7" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You look smart and you are young at heart. You are romantic in nature. You are very supportive to others. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Yellow, Black"

        }
        if(psychic_number == "7" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression in life. There is a possibility for you to have weak relationships and health or career issues in your life. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : None"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "7" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression in life. You need to work very hard to achieve success. You are intelligent. But if you don't work hard, you may face a lot of struggle in life. You would face delay in your life. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "7" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to get disappointment and depression in life. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are driven by your mood all the time."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "8" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti-combination of Psychic number and Destiny number. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life. You need to work very hard to achieve success. Most of the time, you would face struggle in your life. You might have health issues or relationship issues too."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an anti-combination of Psychic number and Destiny number. You would face ups and downs in your life. You need to work very hard to achieve success. Most of the time, you would face struggle in your life. You might have health issues or relationship issues too. You may face some struggle in your career too."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You need to work very hard to get success. You are intelligent. If you don't work hard, you may face a lot of struggle in your life. You have good knowledge and creative skills. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Yellow, Black"

        }
        if(psychic_number == "8" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very logical and practical in life. By nature, you are very rebellious and argumentative. You get angry easily. You would face some struggle in your life. Sometimes, you might face legal issue or controversies in life too. You can only achieve success in life with the help of hard work."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life. You need to work very hard to achieve success. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You would face delay in your life. You are self-responsible and self-accountable. You have good communication skills as well."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life. You need to work very hard to achieve success. You look smart and you are young at heart. You are romantic in nature. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You would face delay in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 3, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Yellow, Black"

        }
        if(psychic_number == "8" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and and depression in life. You need to work very hard to achieve success. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You would face delay in your life. If supporting numbers are present in your chart, then it could be a bit okay. Otherwise, you would face severe ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have a weak combination of Psychic number and Destiny number. You need to work very hard to achieve success. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You get irritated and angry very easily. You would face delay in your life. If supporting numbers are present in your chart, then it could be a bit okay. Otherwise, you would face severe ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "8" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You need to work very hard to achieve success. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You get irritated and angry very easily. You would face delay in your life. You are physically strong. You are compassionate in nature. You are only driven by your mood. If supporting numbers are present in your chart, then it could be a bit okay. Otherwise, you would face severe ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "9" && destiny_number == "1"){
            document.getElementById("pd_combination_description").innerHTML = "You have average combination of Psychic and destiny numbers. it leads ups down in your life. You are moody in nature. Most of the time its seen struggle in your life. You might have health issues  or weak relationship issues too . You are very intelligent and you have good memory power. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "9" && destiny_number == "2"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You would face ups and down in your life. You are moody in nature. Most of the time, you would face struggle in your life. You might have health issues or relationship issues. You are very intelligent and you have good memory power. If supporting numbers are present in your chart, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "9" && destiny_number == "3"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. Mentally and physically you are very strong. No one can win you by any force. You are like a soldier. You are compassionate in nature. Sometimes, you are short-tempered. You are driven only by your mood. You have good knowledge and creative skills. You are emotional and compassionate in nature. Sometimes, your ego is a little high as you are very knowledgeable. But by nature you are emotional."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 6"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Yellow, Black"

        }
        if(psychic_number == "9" && destiny_number == "4"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. Mentally and physically you are very strong. No one can win you by any force. You are like a soldier. You are compassionate in nature. Sometimes, you are short-tempered. You are driven only by your mood. You are very logical and practical. You might have some health issues or relationship issues in life. If supportive numbers are missing in your chart, you would face struggle in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "9" && destiny_number == "5"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are driven only by your mood. Your communication skills are good. You are self-responsible and self-accountable in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "9" && destiny_number == "6"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are very supportive to others. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are driven only by your mood. You look smart and you are young at heart. You are romantic in nature."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 3, 4"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Yellow, Black"

        }
        if(psychic_number == "9" && destiny_number == "7"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You are physically strong. You are compassionate in nature. Sometimes, you are short-tempered. You are driven only by your mood. You have good knowledge and creative skills. Your imagination powers and intuition powers are good. You are emotional. Therefore, sometimes there are chances for you to face disappointment and depression in life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "9" && destiny_number == "8"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You need to work very hard to achieve success. You are physically strong. You are compassionate in nature. You are driven only by your mood. You are intelligent. If you don't work hard, you may face a lot of struggle in life. You get irritated and angry very easily. You would face delay in your life. If supporting numbers in your chart are present, then it's good. Otherwise, you would face ups and downs in your life."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"

        }
        if(psychic_number == "9" && destiny_number == "9"){
            document.getElementById("pd_combination_description").innerHTML = "You have an average combination of Psychic number and Destiny number. You need to work very hard to achieve success. You are physically strong. You are compassionate in nature. You are driven only by your mood. You believe in simplicity. No one can win you by any force. But you can be won through love. You are intelligent. You never give up easily."
            document.getElementById("pd_combination_s_w").innerHTML = 
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }

        //name numerology

        // first name 

        first_name_length = first_name_input.length-1;
        console.log("First Name Length : " + first_name_length);
            
        previous_letter = 0
        current_letter = ""

        for (i = 0; i <= first_name_length; i++){
                current_letter = String(first_name_input).charAt(i);
                console.log("Current letter  : " + current_letter)

                if (current_letter == "a" || current_letter == "A"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "b" || current_letter == "B"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "c" || current_letter == "C"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "d" || current_letter == "D"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "e" || current_letter == "E"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "f" || current_letter == "F"){
                    previous_letter = previous_letter + 8;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "g" || current_letter == "G"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "h" || current_letter == "H"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "i" || current_letter == "I"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "j" || current_letter == "J"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "k" || current_letter == "K"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "l" || current_letter == "L"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "m" || current_letter == "M"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "n" || current_letter == "N"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "o" || current_letter == "O"){
                    previous_letter = previous_letter + 7;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "p" || current_letter == "P"){
                    previous_letter = previous_letter + 8;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "q" || current_letter == "Q"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "r" || current_letter == "R"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "s" || current_letter == "S"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "t" || current_letter == "T"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "u" || current_letter == "U"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "v" || current_letter == "V"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "w" || current_letter == "W"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "x" || current_letter == "X"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "y" || current_letter == "Y"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "z" || current_letter == "Z"){
                    previous_letter = previous_letter + 7;
                    console.log("Previous Letter : " + previous_letter);
                }
        }

        if (previous_letter.toString().length > 3){
                var pl4_1 = String(previous_letter).charAt(0);
                var pl4_2 = String(previous_letter).charAt(1);
                var pl4_3 = String(previous_letter).charAt(2);
                var pl4_4 = String(previous_letter).charAt(3);
                pl4_1_no = parseInt(pl4_1);
                pl4_2_no = parseInt(pl4_2);
                pl4_3_no = parseInt(pl4_3);
                pl4_4_no = parseInt(pl4_4);
                pl4 = pl4_1_no + pl4_2_no + pl4_3_no + pl4_4_no;
                
                if (pl4.toString().length > 1){
                    var pl42_1 = String(pl4).charAt(0);
                    var pl42_2 = String(pl4).charAt(1);
                    pl42_1_no = parseInt(pl42_1);
                    pl42_2_no = parseInt(pl42_2);
                    var first_name_total = pl42_1_no + pl42_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl4.toString().length = 1){
                    var first_name_total = pl4;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length > 2){
                var pl3_1 = String(previous_letter).charAt(0);
                var pl3_2 = String(previous_letter).charAt(1);
                var pl3_3 = String(previous_letter).charAt(2);
                pl3_1_no = parseInt(pl3_1);
                pl3_2_no = parseInt(pl3_2);
                pl3_3_no = parseInt(pl3_3)
                pl3 = pl3_1_no + pl3_2_no + pl3_3;
                
                if (pl3.toString().length > 1){
                    var pl32_1 = String(pl3).charAt(0);
                    var pl32_2 = String(pl3).charAt(1);
                    pl32_1_no = parseInt(pl32_1);
                    pl32_2_no = parseInt(pl32_2);
                    var first_name_total = pl32_1_no + pl32_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl3.toString().length = 1){
                    var first_name_total = pl3;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length > 1){
                var pl2_1 = String(previous_letter).charAt(0);
                var pl2_2 = String(previous_letter).charAt(1);
                pl2_1_no = parseInt(pl2_1);
                pl2_2_no = parseInt(pl2_2);
                pl2 = pl2_1_no + pl2_2_no;

                if (pl2.toString().length > 1){
                    var pl22_1 = String(pl2).charAt(0);
                    var pl22_2 = String(pl2).charAt(1);
                    pl22_1_no = parseInt(pl22_1);
                    pl22_2_no = parseInt(pl22_2);
                    var first_name_total = pl22_1_no + pl22_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl2.toString().length = 1){
                    var first_name_total = pl2;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length = 1){
                
                var first_name_total = previous_letter;
                console.log("First Name No. : " + first_name_total);
                document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                
    
        }
            

        // last name

        last_name_length = last_name_input.length - 1;
        console.log("Last Name Length : " + last_name_length);
            
        previous_letter_last_name = 0
        current_letter_last_name = ""

        for (i = 0; i <= last_name_length; i++){
                current_letter_last_name = String(last_name_input).charAt(i);
                console.log("Current letter Last Name  : " + current_letter_last_name)

                if (current_letter_last_name == "a" || current_letter_last_name == "A"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "b" || current_letter_last_name == "B"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "c" || current_letter_last_name == "C"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "d" || current_letter_last_name == "D"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "e" || current_letter_last_name == "E"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "f" || current_letter_last_name == "F"){
                    previous_letter_last_name = previous_letter_last_name + 8;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "g" || current_letter_last_name == "G"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "h" || current_letter_last_name == "H"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "i" || current_letter_last_name == "I"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "j" || current_letter_last_name == "J"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "k" || current_letter_last_name == "K"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "l" || current_letter_last_name == "L"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "m" || current_letter_last_name == "M"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "n" || current_letter_last_name == "N"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "o" || current_letter_last_name == "O"){
                    previous_letter_last_name = previous_letter_last_name + 7;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "p" || current_letter_last_name == "P"){
                    previous_letter_last_name = previous_letter_last_name + 8;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "q" || current_letter_last_name == "Q"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "r" || current_letter_last_name == "R"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "s" || current_letter_last_name == "S"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "t" || current_letter_last_name == "T"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "u" || current_letter_last_name == "U"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "v" || current_letter_last_name == "V"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "w" || current_letter_last_name == "W"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "x" || current_letter_last_name == "X"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "y" || current_letter_last_name == "Y"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "z" || current_letter_last_name == "Z"){
                    previous_letter_last_name = previous_letter_last_name + 7;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
        }

        if (previous_letter_last_name.toString().length > 3){
                var pl4_1ln = String(previous_letter_last_name).charAt(0);
                var pl4_2ln = String(previous_letter_last_name).charAt(1);
                var pl4_3ln = String(previous_letter_last_name).charAt(2);
                var pl4_4ln = String(previous_letter_last_name).charAt(3);
                pl4_1_noln = parseInt(pl4_1ln);
                pl4_2_noln = parseInt(pl4_2ln);
                pl4_3_noln = parseInt(pl4_3ln);
                pl4_4_noln = parseInt(pl4_4ln);
                pl4ln = pl4_1_noln + pl4_2_noln + pl4_3_noln + pl4_4_noln;
                
                if (pl4ln.toString().length > 1){
                    var pl42_1ln = String(pl4ln).charAt(0);
                    var pl42_2ln = String(pl4ln).charAt(1);
                    pl42_1_noln = parseInt(pl42_1ln);
                    pl42_2_noln = parseInt(pl42_2ln);
                    var last_name_total = pl42_1_noln + pl42_2_noln;
                    console.log("Last Name No. : " + last_name_total);
                }
                else if (pl4ln.toString().length = 1){
                    var last_name_total = pl4ln;
                    console.log("Last Name No. : " + last_name_total);
                }
    
        }

        else if (previous_letter_last_name.toString().length > 2){
                let pl3_1ln = String(previous_letter_last_name).charAt(0);
                let pl3_2ln = String(previous_letter_last_name).charAt(1);
                let pl3_3ln = String(previous_letter_last_name).charAt(2);
                pl3_1_noln = parseInt(pl3_1ln);
                pl3_2_noln = parseInt(pl3_2ln);
                pl3_3_noln = parseInt(pl3_3ln)
                pl3ln = pl3_1_noln + pl3_2_noln + pl3_3ln;
    
                if (pl3ln.toString().length > 1){
                    let pl32_1ln = String(pl3ln).charAt(0);
                    let pl32_2ln = String(pl3ln).charAt(1);
                    pl32_1_noln = parseInt(pl32_1ln);
                    pl32_2_noln = parseInt(pl32_2ln);
                    var last_name_total = pl32_1_noln + pl32_2_noln;
                    console.log("Last Name No. : " + last_name_total);
                }
                else if (pl3.toString().length = 1){
                    var first_name_total = pl3;
                    console.log("Last Name No. : " + last_name_total);
                    }
    
        }

        else if (previous_letter_last_name.toString().length > 1){
            var pl2_1ln = String(previous_letter_last_name).charAt(0);
            var pl2_2ln = String(previous_letter_last_name).charAt(1);
            pl2_1_noln = parseInt(pl2_1ln);
            pl2_2_noln = parseInt(pl2_2ln);
            pl2ln = pl2_1_noln + pl2_2_noln;

            if (pl2ln.toString().length > 1){
                var pl22_1ln = String(pl2ln).charAt(0);
                var pl22_2ln = String(pl2ln).charAt(1);
                pl22_1_noln = parseInt(pl22_1ln);
                pl22_2_noln = parseInt(pl22_2ln);
                var last_name_total = pl22_1_noln + pl22_2_noln;
                console.log("Last Name No. : " + last_name_total);
            }
            else if (pl2ln.toString().length = 1){
                var last_name_total = pl2ln;
                console.log("Last Name No. : " + last_name_total);
            }
        }

        else if (previous_letter_last_name.toString().length = 1){
                var last_name_total = previous_letter_last_name;
                console.log("Last Name No. : " + last_name_total);
        }

        //full name

        full_name = first_name_total + last_name_total;
        
        if (full_name.toString().length > 1){
            var fn1 = String(full_name).charAt(0);
            var fn2 = String(full_name).charAt(1);
            fn1_no = parseInt(fn1);
            fn2_no = parseInt(fn2);
            var full_name_total = fn1_no + fn2_no;
            console.log("Full Name : " + full_name_total);
            document.getElementById("full_name_text").innerHTML = "Full Name : " + full_name_total;
        }
        else {
            var full_name_total = full_name;
            document.getElementById("full_name_text").innerHTML = "Full Name : " + full_name_total;
        }
            
        alert("Your form has been submitted.\nPlease scroll down.");

        var footer_display = document.getElementById("footer_display");
        footer_display.style.display = "none";
        console.log("footer_display");
    }
} 

var modal_numerology = document.getElementById("modal_numerology");
modal_numerology.addEventListener('click', function(event) {
    var hasMailClient = !!navigator.registerProtocolHandler('mailto', 'mailto:cinnervibration@gmail.com');
    if (hasMailClient) {
        // User likely has an email client
        window.location.href = "mailto:cinnervibration@gmail.com?subject=Looking%20For%20A%20Numerology%20Consultancy&body=Hello!%0D%0AI%20want%20a%20numerology%20consultancy%20for%20the%20following%20date%20of%20birth.%0D%0AI%20want%20to%20book%20an%20appointment%20for%20it.%0D%0A%0D%0ANote%20:%20I%20certify%20that%20all%20the%20details%20provided%20below%20belong%20to%20the%20person%20who%20wants%20the%20numerology%20consultation%20and%20the%20name%20and%20the%20DOB%20are%20original%20and%20correct.%0D%0A%0D%0AFull%20Original%20Name%20:%20%0D%0AOriginal%20DOB%20:%20%0D%0ATime%20Of%20Birth%20:%20%0D%0APlace%20Of%20Birth%20:%20%0D%0AGender%20:%20%0D%0ASpecific%20Issues(if%20any)%20:%20%0D%0ASpouse's%20Name%20:%20%0D%0AFather's%20Name%20:%20%0D%0AMother's%20Name%20:%20%0D%0APhone%20Number%20:%20";
    } else {
        // User probably does not have an email client
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=&su=Your%20Subject&body=Your%20Predefined%20Message"
    }
    event.preventDefault();
});



