function handleNotification(notification) {
    switch (notification.type) {
        case "email":
            console.log("Email from ".concat(notification.sender, ": ").concat(notification.subject));
            break;
    }
}
var n1 = {
    type: "email",
    sender: "admin@example.com",
    subject: "Your account has been updated",
};
console.log(handleNotification(n1));
