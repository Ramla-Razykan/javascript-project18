function convertTime() {
    let time = parseInt(document.getElementById("timeInput").value);
    let resultElement = document.getElementById("result");

    if (isNaN(time) || time < 0 || time > 2359) {
        resultElement.textContent = "Invalid input! Please enter a valid time in 24-hour format.";
        resultElement.style.color = "red";
    } else {

        let hours = Math.floor(time / 100);
        let minutes = time % 100;

        if (minutes < 0 || minutes >= 60) {
            resultElement.textContent = "Invalid input! Minutes should be between 00 and 59.";
            resultElement.style.color = "red";
        } else {

            let period = "AM";
            if (hours >= 12) {
                period = "PM";
            }
            if (hours > 12) {
                hours -= 12;
            }
            if (hours === 0) {
                hours = 12;
            }

            let formattedMinutes = minutes.toString().padStart(2, '0');

            let greeting = "";
            if (period === "AM") {
                if (hours < 6) {
                    greeting = "Good Night! It's still early.";
                } else if (hours >= 6 && hours < 12) {
                    greeting = "Good Morning!";
                } else if (hours === 12 && minutes === 0) {
                    greeting = "It's noon! Good Afternoon!";
                }
            } else {
                if (hours >= 1 && hours < 5) {
                    greeting = "Good Afternoon!";
                } else if (hours >= 5 && hours < 8) {
                    greeting = "Good Evening!";
                } else {
                    greeting = "Good Night! Have a peaceful evening.";
                }
            }

            if (time >= 430 && time <= 630) {
                greeting += " It's Fajr time, don't miss your prayers!";
            } else if (time >= 1800 && time <= 2000) {
                greeting += " It's Maghrib time, make sure to pray!";
            }

            resultElement.textContent = `The time in 12-hour format is: ${hours}:${formattedMinutes} ${period}. ${greeting}`;
            resultElement.style.color = "yellow";
        }
    }
}