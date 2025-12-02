

async function copyToClipboard(text, toast) {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
        position: "top-center"
    });



}

export default copyToClipboard