import nodemailer from"nodemailer";

export const sendEmail = async (email:string, token:string,) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.sendinblue.com',
            service: process.env.SERVICE,
            port: 587,
            // secure: true,
            auth: {
                user: process.env.SmtpEmail,
                pass: process.env.SmtpPassword,
            },
        });

        await transporter.sendMail({
            from:"Abhishek <Abhishek@example.com>",
            to: email,
            subject: "For Reset Password",
            html:'<h1>You Password reset Link is </h1><br><p><a href="http://localhost:5000/forgot/reset?token='+token+'">Click Hear</a></p>',
        },(err,info)=>{
            if(err) console.log(err);
            else console.log("Mail Has been send succesfully",token);
            
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

