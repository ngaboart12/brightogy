import nodemailer from "nodemailer";

export default async function (req,res){
    const { username,email,message } = req.body

    const data = {
        username,email,message
    }
    const user ='ngabosevelin@gmail.com' 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:user,
            pass:'zpfx qisa azei pnki'
        },
        tls: {
            
            rejectUnauthorized: false
        }
    });
    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "brightforth.apply@gmail.com",
            replyTo: email,
            subject: `Brightforth Client ${username}`,
            html:`
           <div className="flex flex-col gap-2">
           <span>Name: ${username}</span> <br>
           <p>Email: ${email}</p>
           <p>Message:</p>
           <p>${message}</p>
           </div>
            `

        })
        console.log("message sent:", mail.messageId)

        return res.status(200).json({message: "success"})
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "coul not send the email. your  message was not sent"
        })
        
    }

   
}