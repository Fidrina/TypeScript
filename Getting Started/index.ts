window.onload = () => {
    const ButtonSubmit = document.querySelector('button[type=submit]')! as HTMLButtonElement;

    ButtonSubmit.addEventListener('click', (event) => {
        const HTMLInputEmail = document.querySelector("#exampleInputEmail1")! as HTMLInputElement;
        const HTMLInputPassword = document.querySelector("#exampleInputPassword")! as HTMLInputElement;

        event.preventDefault();

        const MessageOutput: String = `exampleInputEmail1: ${HTMLInputEmail.value} / exampleInputPassword: ${HTMLInputPassword.value}`;

        console.log(MessageOutput);
    });
};