var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var uploadError = document.getElementById("uploadError");
var commentError = document.getElementById("commentError");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function uploadImage() {
    const imageUpload = document.getElementById("imageUpload");
    const imageTag = document.getElementById("imageTag").value.trim();
    const albumName = document.getElementById("albumName").value.trim();

    // Clear any existing error messages
    uploadError.textContent = "";
    uploadError.style.display = "none";

    if (!imageUpload.files.length) {
        uploadError.textContent = "Please choose an image file to upload.";
        uploadError.style.display = "block";
        return;
    }     

    // Simulate image upload logic (replace with your actual upload functionality)
    console.log("Image upload simulation:");
    console.log("  - Image:", imageUpload.files[0].name);
    console.log("  - Tags:", imageTag);
    console.log("  - Album:", albumName);

    // Update gallery or albums (replace with your logic to display uploaded image)
    // ...
}

function simulateEnterPress() {
    const commentInput = document.getElementById("commentInput").value.trim();

    // Clear any existing error messages
    commentError.textContent = "";
    commentError.style.display = "none";

    if (!commentInput) {
        commentError.textContent = "Please enter a comment.";
        commentError.style.display = "block";
        return;
    }

    // Simulate comment submission (replace with your actual comment handling)
    console.log("Comment submission simulation:", commentInput);

    // Clear the comment input for next use
    document.getElementById("commentInput").value = "";
}