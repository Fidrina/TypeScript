type FormResponse = {
    email: string;
    password: string;
    timestamp: Number;
};

interface Time {
    date: Date;
    now: () => Number;
}

class Timestamp {
    private date: Date;

    constructor() {
        this.date = new Date();
    }

    now(): Number {
        return new Date().getTime();
    }
}

function dispatch(parameters: FormResponse) {
    console.log(parameters);
}

window.onload = () => {
    const ButtonSubmit: HTMLButtonElement = document.querySelector("button")!;

    ButtonSubmit.addEventListener("click", (event) => {
        const HTMLInputEmail: HTMLInputElement = document.querySelector("#email")!;
        const HTMLInputPassword: HTMLInputElement = document.querySelector("#password")!;

        event.preventDefault();

        const response: FormResponse = {
            email: HTMLInputEmail.value,
            password: HTMLInputPassword.value,
            timestamp: new Timestamp().now(),
        };

        dispatch(response);
    });
};
