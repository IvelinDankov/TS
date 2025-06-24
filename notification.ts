interface EmailNotification {
  type: "email";
  sender: string;
  subject: string;
}

interface SMSNotification {
  type: "sms";
  phoneNumber: string;
  message: string;
}

type AppNotification = EmailNotification | SMSNotification;

function handleNotification(notification: AppNotification): void {
  switch (notification.type) {
    case "email":
      console.log(`Email from ${notification.sender}: ${notification.subject}`);
      break;
  }
}

const n1: EmailNotification = {
  type: "email",
  sender: "admin@example.com",
  subject: "Your account has been updated",
};

console.log(handleNotification(n1));
