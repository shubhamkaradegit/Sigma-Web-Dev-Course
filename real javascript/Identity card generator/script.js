function identityCard(photo,sName,aDate,bGroup,cNo,add){

    let html = `<div class="card">
            <div class="first">
                  <div class="logo">
                    <img src="https://www.sfit.ac.in/images/Emblem.jpg" alt="">
                  </div>
                <div class="heading">
                    <h3>Student Identity card</h3>
                </div>
            </div>

            <div class="clg-name">
                St.Francis Institute of Tecnology (Engineering College)
            </div>
            <div class="content">
                <p>
                    An Autinomous Institute Affiliated to University of Mumbai,Borivali(W),Mumbai 400103 Ph: 9167370622
                </p>

            </div>
            <div class="branch">
                <h2>CMPN</h2>
            </div>
         <div class="photo">
            <img src=${photo} alt="">
         </div>
         <div class="info">
            <h3>Student Name : ${sName}</h3>
            <h3>Admission Date : ${aDate}</h3>
            <h3>Blood Group : ${bGroup}</h3>
            <h3>Contact No : ${cNo}</h3>
            <h3 class="add">Address : ${add}</h3>
         </div>   
         <div class="footer">
            <h5>VALID UP TO ONE YEAR</h5>
         </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

identityCard("https://imgcdn.stablediffusionweb.com/2024/3/30/158491e7-c470-4950-9e59-2368356afa2a.jpg","Priya Sharma","12-12-24","A+","9865436300","1st floor,shanti nagar,near jyoti tower,Aanand Nagar,Dahisar,Mumbai-400068");

identityCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1Nz9pPUXj0ZRtb4m2mekCkoxy9mYaRs5Gw&s","Aman Rajput","12-12-24","A+","9865436300","1st floor,shanti nagar,near jyoti tower,Aanand Nagar,Dahisar,Mumbai-400068");
identityCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubAzq5p7DpLeDtODteaXnn_5TzvC2oyONGg&s","Rajesh Pawar","12-12-24","A+","9865436300","1st floor,shanti nagar,near jyoti tower,Aanand Nagar,Dahisar,Mumbai-400068");
identityCard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYxly8BHk88gxvVsctrxRYXO9A55F9Om3Fw&s","Ritika Jadhav","12-12-24","A+","9865436300","1st floor,shanti nagar,near jyoti tower,Aanand Nagar,Dahisar,Mumbai-400068");
identityCard("https://imgcdn.stablediffusionweb.com/2024/3/30/158491e7-c470-4950-9e59-2368356afa2a.jpg","Priya Sharma","12-12-24","A+","9865436300","1st floor,shanti nagar,near jyoti tower,Aanand Nagar,Dahisar,Mumbai-400068");