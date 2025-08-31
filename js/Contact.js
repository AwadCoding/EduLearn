function SendEmail() {
    var params ={
        from_name:document.getElementsByID("name").value,
        from_email:document.getElementsByID("email").value,
        from_message:document.getElementsByID("message").value



    }
    

    emailjs.SendEmail("service_gsh0bpx","template_2yxunhn",params).then
    (
          () => {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
          },
          (error) => {
            console.error("❌ FAILED...", error);
            alert("Error sending message."); }
    );
}