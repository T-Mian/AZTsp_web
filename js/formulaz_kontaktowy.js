/*
Tomasz Mianecki 
ver 0.1
*/


let body_kontaktowe_pl=`
      <div class="nft">
        <div class="main" style="
              float: left;
          ">
          <h4>Formularz kontaktowy </h4>
          <p class='description'>
          <form action="form_web.php" method="post" >
            <label for="fname" class="f_label">Imię:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Imię" disabled><br>
            <label for="lname" class="f_label">Nazwisko:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Nazwisko" disabled><br>
            <label for="phone" class="f_label">Numer telefonu:</label><br>
            <input type="tel" id="phone" name="phone" placeholder="123 456 789"
              pattern="[0-9]{3}[0-9]{3}[0-9]{3}" disabled><br>
            <label for="email" class="f_label">E-mail:</label><br>
            <input type="email" id="email" name="email" placeholder="egzample@gmail.com" disabled><br>
            <br>
            <br>
            <label class="f_label">Wiadomość</label><br>
            <label class="f_label">Temat</label><br>
            <input type="text" id="temat" name="temat" placeholder="Temat" disabled>
            <br>
            <br>
            <textarea name="message" rows="5" cols="30" >
              </textarea>
            <input type="submit" id="Sub_form_btn" value="Submit"
              style="padding: 10px; width: 90%;border-radius: 25px;" disabled >
          </form>
          </p>
        </div>
        <div class='main'>
          <h4>RODO </h4>
          <p class='description'>
            Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych zwiazku z
            wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne ale niezbędne do
            przetworzenia zapytania. Zostałem poimformowany ze przysługuje mi prawo dostępu do swoich danych, możlwości
            ich poprawienia, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest AZT Sp. Z
            o.o. z siedzibą Fabryczna 14, Wroclaw 53-609, Polska.<br>
            <br>
            <br>
            <input type="checkbox" id="rodo" name="rodo" value="rodo" onclick="undisabled()">
            <label for="praca" class="f_label"> Potwierdzam wyrażenie zgody</label><br><br>
          </p>
        </div>
      </div>`

let body_kontaktowe_ang=`<div class="nft">
        <div class="main" style="
              float: left;
          ">
          <h4>Contact form</h4>
          <p class='description'>
          <form action="form_web.php" method="post">
            <label for="fname" class="f_label">Name:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Name" disabled><br>
            <label for="lname" class="f_label">Last name:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Last name" disabled><br>
            <label for="phone" class="f_label">Phone number:</label><br>
            <input type="tel" id="phone" name="phone" placeholder="123 456 789"
              pattern="-9]{3}[0-9]{3}[0-9]{3}" disabled><br>
            <label for="email" class="f_label">E-mail:</label><br>
            <input type="email" id="email" name="email" placeholder="egzample@gmail.com" disabled><br>
            <br>
            <br>
            <label class="f_label">Message</label><br>
            <label class="f_label">Topic</label><br>
            <input type="text" id="temat" name="temat" placeholder="Topic" disabled>
            <br>
            <br>
            <textarea name="message" rows="5" cols="30">
              </textarea>
            <input type="submit" id="Sub_form_btn" value="Submit"
              style="padding: 10px; width: 90%;border-radius: 25px;" disabled>
          </form>
          </p>
        </div>
        <div class='main'>
          <h4>RODO </h4>
          <p class='description'>
             I consent to the processing of personal data in accordance with the Personal Data Protection Act in connection with sending an inquiry via the contact form. Providing data is voluntary but necessary to process the inquiry. I have been informed that I have the right to access my data, the possibility of correcting it, and requesting the cessation of its processing. The administrator of personal data is AZT Sp. Zoo. based at Fabryczna 14, Wroclaw 53-609, Poland.<br>
            <br>
            <br>
            <input type="checkbox" id="rodo" name="rodo" value="rodo" onclick="undisabled()">
            <label for="praca" class="f_label">I confirm my consent</label><br><br>
          </p>
        </div>
      </div>`

let body_kontaktowe_ukr=`<div class="nft">
          <div class="main" style="
                float: left;
            ">
            <h4>Контакт електронної пошти</h4>
            <p class='description'>
            <form action="form_web.php" method="post">
              <label for="fname" class="f_label">Ім'я:</label><br>
               <input type="text" id="fname" name="fname" placeholder="Name" disabled><br>
               <label for="lname" class="f_label">Прізвище:</label><br>
               <input type="text" id="lname" name="lname" placeholder="Прізвище" disabled><br>
               <label for="phone" class="f_label">Номер телефону:</label><br>
               <input type="tel" id="phone" name="phone" placeholder="123 456 789"
                 pattern="-9]{3}[0-9]{3}[0-9]{3}" disabled><br>
               <label for="email" class="f_label">Електронна адреса:</label><br>
              <input type="email" id="email" name="email" placeholder="egzample@gmail.com"disabled ><br>
              <br>
              <br>
              <label class="f_label">повідомлення</label><br>
              <label class="f_label">Тема</label><br>
              <input type="text" id="temat" name="temat" placeholder="Тема" disabled>
              <br>
              <br>
              <textarea name="message" rows="5" cols="30">
                </textarea>
              <input type="submit" id="Sub_form_btn" value="Надіслати"
                style="padding: 10px; width: 90%;border-radius: 25px;" disabled>
            </form>
            </p>
          </div>
          <div class='main'>
              <h4>GDPR </h4>
               <p class='description'>
                 Я даю згоду на обробку персональних даних відповідно до Закону про захист персональних даних у зв'язку з відправленням запиту через контактну форму. Надання даних є добровільним, але необхідним для обробки запиту. Мене повідомили, що я маю право на доступ до своїх даних, можливість їх виправлення та вимагати припинення їх обробки. Адміністратором персональних даних є AZT Sp. Зоопарк. розташована за адресою Фабрична 14, Вроцлав 53-609, Польща.<br>
              <br>
              <br>
              <input type="checkbox" id="rodo" name="rodo" value="rodo" onclick="undisabled()">
              <label for="praca" class="f_label"> Підтверджую свою згоду</label><br><br>
            </p>
          </div>
        </div>`

let flaga_jezyka=document.getElementById("jezyk").innerHTML
let formulaz=document.getElementById("div_formulazu")
console.log(flaga_jezyka)
switch(flaga_jezyka){
  case "PL":
    formulaz.innerHTML=body_kontaktowe_pl
    console.log("switch "+flaga_jezyka)
    break;
  case "ANG":
    formulaz.innerHTML=body_kontaktowe_ang
    console.log("switch "+flaga_jezyka)
    break;
  case "UKR":
    formulaz.innerHTML=body_kontaktowe_ukr
    console.log("switch "+flaga_jezyka)
    break;
  default:
    formulaz.innerHTML=body_kontaktowe_pl
    console.log("switch default "+flaga_jezyka)
}

function undisabled(){
  let btn=document.getElementById("Sub_form_btn");
  let name=document.getElementById("fname");
  let lastname=document.getElementById("lname");
  let phone=document.getElementById("phone");
  let email=document.getElementById("email");
  let temat=document.getElementById("temat");
  if(document.getElementById("rodo").checked){
    btn.disabled=false;
    name.disabled=false;
    lastname.disabled=false;
    phone.disabled=false;
    email.disabled=false;
    temat.disabled=false;
  }
  else{
    btn.disabled=true;
    name.disabled=true;
    lastname.disabled=true;
    phone.disabled=true;
    email.disabled=true;
    temat.disabled=true;
  }
}