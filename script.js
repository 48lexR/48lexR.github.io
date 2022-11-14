function run() {
    let name = prompt("What is your name?");
    const button = document.getElementById("namePrompt");
    button.innerHTML = "Hello " + name + "!";
}