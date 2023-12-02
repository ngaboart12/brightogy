import  nodemailer from "nodemailer"

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
            to: "ngaboart123@gmail.com",
            replyTo: email,
            subject: `Brightforth Enquiry  ${fullname}`,
            html:`
           <div className="flex flex-col gap-2">
           <span>Name: ${fullname}</span> <br>
           <p>Email: ${email}</p>
           <p>phone number: ${phonenumber}:</p>
           <p>city: ${city}</p>
           <p>destination ${destination}</p>
           <p>which service are looking for: ${service}</p>
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