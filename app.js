const calcy = () =>{
    let web = document.getElementById(`Web`).value;
    let maths = document.getElementById(`Maths`).value;
    let cs = document.getElementById(`CS`).value;
    let phy = document.getElementById(`Phy`).value;
    let grade = "";

    let totalGrade = parseFloat(web) + parseFloat(maths) + parseFloat(cs) + parseFloat(phy);

    let per = (totalGrade/400) * 100;



    if (per <=100 && per >= 90){
        grade = "A*";
    }else if(per <90 && per >= 80){
        grade="A";
    }else if(per <80 && per >= 70){
        grade = "B";
    }else if(per < 70 && per >= 60){
        grade = "C";
    }else{
        grade = "F"
    }


    document.getElementById("show").innerHTML = `Your grade is ${grade} and total percentage is ${per}%`;

    if (per > 60){
        alert("You have passed!!");
    }else{
        alert("Sorry you failed, No problem!!!")
    }
}