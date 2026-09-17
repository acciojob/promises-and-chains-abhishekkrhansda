let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let age = document.querySelector("#age").value;
    let name = document.querySelector("#name").value;

    validate(age, name)
        .then((response) => {
            alert(response);

            return checkAge(age,name);
        })
        .then((response) => {
            alert(response);
        })
        .catch((err) => {
            alert(err);
        });
});


let checkAge = (age, name) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (age >= 18) {
                resolve("Welcome " + name + " You can vote");
            } 
            else {
                reject("Oh sorry " + name + " You aren't old enough");
            }

        }, 4000);
    });
};


let validate = (age, name) => {

    return new Promise((resolve, reject) => {

        if (age.trim() === "" || name.trim() === "" || isNaN(age)) {
            reject("Please enter valid details");
        } 
        else {
            resolve("Details are valid");
        }
    });
};










