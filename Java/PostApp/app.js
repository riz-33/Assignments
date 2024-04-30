function addPost() {
    var title = document.getElementById("title");
    var description = document.getElementById("description")

    if (title.value.trim() && description.value.trim()) {

        var posts = document.getElementById("posts");
        posts.innerHTML += `
        <div class="card p-4">
        <div class="card-header"> Post </div>
        <div class="card-body">
        <blockquote class="blockquote mb-1">
        <p> ${title.value} </p>
        <footer class="blockquote-footer"> ${description.value} </footer>
        </blockquote>
        </div>
        </div>
        `

        title.value = "";
        description.value = "";

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Title & Description!",
        });
    }
}

