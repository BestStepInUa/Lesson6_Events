document.addEventListener("keydown", event => {
    event.preventDefault();
    
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyB") {
        console.log("«Ctrl + b» or «Command + b» combo");
    };

    if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
        console.log("«Ctrl + f» or «Command + f» combo");
    }
});