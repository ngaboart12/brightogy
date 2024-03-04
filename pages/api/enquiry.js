import  nodemailer from "nodemailer"
import Image1 from "../../public/image/about.png"


export default async function (req,res){
    const { fullname,city,email,destination,phonenumber,service } = req.body

    const data = {
        fullname,city,email,destination,phonenumber,service 
    }
    const user ='ngabosevelin@gmail.com' 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:user,
            pass:'zpfx qisa azei pnki'
        }
    });
    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "brightforth.apply@gmail.com",
            replyTo: email,
            subject: `Inquiry Regarding Study Abroad Services`,
            html:`
           <div className="flex  flex-col gap-2" style="color:white;background: #1D73AF;padding:10px;border-radius:10px;">
           <h1 style="font-size:18px;font-weight:600;">Dear Admissions Team,
           </h1>
           <span style="font-size:18px;font-weight:600">I hope this email finds you well.</span><br><br>
           <span style="font-size:14px;font-weight:200">I am writing to inquire about the study abroad services offered by your company, BRIGHTFORTH. I recently came across your website and I am interested in learning more about your programs for students seeking educational opportunities in other countries.

           Below are the details I would like to inquire about:</span><br><br>
           <span>Name: ${fullname}</span> <br>
           <p>Email: ${email}</p>
           <p>Phone number: ${phonenumber}:</p>
           <p>City: ${city}</p>
           <p>Destination ${destination}</p>
           <p>Service of Interest: ${service}</p><br>

           <span style="font-size:14px;font-weight:200">Could you please provide me with further information regarding the study abroad programs available for my preferred destination? Additionally, I would appreciate details about program offerings, academic requirements, cultural immersion opportunities, pricing, availability, and any other relevant information.

           Thank you for your time and assistance. I look forward to hearing back from you soon.</span><br><br>
           <span style="font-size:18px;font-weight:600">Best regards,</span><br>
           <span style="font-size:14px;font-weight:200">${fullname}</span><br>
           </div>
            `

        })
        console.log("message sent:", mail.messageId)

        return res.status(200).json({message: "success"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "coul not send the email. your  message was not sent"
        })
        
    }

   
}