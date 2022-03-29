//./api/mail.js
import sendgrid from '@sendgrid/mail';
    
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    
export default async (req, res) => {
    
    const body = JSON.parse(req.body);
    
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
    
    const data = {
        to: 'your_email@email.com',
        from: 'your_email@email.com',
        subject: '[Website Name] Contact Form - New Message',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    };
    
    sendgrid.send(data);
    
    return res.status(200).json({ status: 'Ok' });
};