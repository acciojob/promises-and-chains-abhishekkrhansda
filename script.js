let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let age = document.querySelector("#age").value;
    let name = document.querySelector("#name").value;

    validate(age, name)
        .then((response) => {
            console.log(response);

            return checkAge(age);
        })
        .then((response) => {
            alert(response);
        })
        .catch((err) => {
            alert(err);
        });
});


let checkAge = (age) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (age >= 18) {
                resolve("Welcome You can vote");
            } 
            else {
                reject("Oh sorry. You aren't old enough");
            }

        }, 4000);
    });
};


let validate = (age, name) => {

    return new Promise((resolve, reject) => {

        if (age.length === 0 || name.length === 0) {
            reject("Please enter valid details");
        } 
        else {
            resolve("Details are valid");
        }
    });
};










