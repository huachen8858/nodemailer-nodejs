const nodemailer = require("nodemailer");

const html = `
  <h1>Hello World</h1>
  <p>This is nodemailer</p>
`;

const main = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: {
        name: "MH C",
        address: process.env.USER,
      },
      to: "huachen8858@gmail.com",
      subject: "Testing Email",
      html: html,
    },
    (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        console.log("Message sent: " + info.messageId);
      }
    }
  );
};

main().catch((e) => console.log(e));
