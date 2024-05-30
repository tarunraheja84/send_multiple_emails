const axios = require("axios");

const sendEmail = async (email) =>{
    try{
      await axios.post('http://localhost:5000/', {

            sender_email: "tarunraheja84@gmail.com",
          
            sender_account_app_password: "ktsi vjeh wmpl vkeo",
          
            receiver_emails: [email],
          
            subject: "Tarun (NIT Kurukshetra)",
          
            body: `Dear Recruiter,\n\nI'm reaching out to express my interest in the fresher software engineer position recently advertised by your esteemed company. As a B.Tech. graduate from NIT Kurukshetra with 1 year experience in Reactjs (Nodejs) full stack web development, complemented by proficiency in Data Structures and Algorithms, I am eager to contribute my skills to the software team.\n\nWhat truly captivates me about your company is its vibrant culture and unwavering commitment to professionalism. Enclosed is my resume for your reference. I am available for an interview at your convenience and am an immediate joiner.\n\nShould this position not align with your current requirements, I would greatly appreciate it if you could forward my resume to the appropriate recruiter. Your assistance in this matter would be invaluable.\n\nThanks for considering my application.\n\nBest regards,\n\nTarun,\nNIT Kurukshetra\n1 year React.js (Node.js) experience\n9896079185`,
          
            files: ["/Users/mac/desktop/Tarun_NIT_Kurukshetra.pdf",],
                
      });
      console.log(`email sent to ${email}`);
    }
    catch(error){
        console.error(error);
    }
};



const sendMultipleEmails = async (arr) => {
      const promises = [];

      for(const email of arr){
        promises.push(sendEmail(email));
      }

      await Promise.allSettled(promises);
}

(async ()=>{
      await sendMultipleEmails(["nidhi.chawda@razorpay.com", "shivangi.sinha@razorpay.com", "tanya.porwal@razorpay.com", "nandini.nair@razorpay.com", "arpith.ashok@razorpay.com", "ravi.kumar@razorpay.com", "varsha.cn@razorpay.com", "supriya.s@razorpay.com", "kushala.uday@razorpay.com", "suchitra.rajan@razorpay.com", "vishali.pandita@razorpay.com", "trisha.arya@razorpay.com"]);
})();