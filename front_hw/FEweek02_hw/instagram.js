// DOM 요소 접근
const likeBtn = document.getElementById("like-btn");
const commentBtn = document.getElementById("comment-btn");
const shareBtn = document.getElementById("share-btn");
const saveBtn = document.getElementById("save-btn");

const menuBtn = document.querySelector("#menu-btn");
const moreBtn = document.querySelector("#more");

// 좋아요 기능
const likeIcon = likeBtn.querySelector("img");
const likeCount = likeBtn.nextElementSibling;

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");

    let count = Number(likeCount.textContent);

    if (likeBtn.classList.contains("active")) {
        likeIcon.src = "./assets/icon/heart-filled.svg";
        likeCount.textContent = count + 1;
    } else {
        likeIcon.src = "./assets/icon/heart-empty.svg";
        likeCount.textContent = count - 1;
    }
});

// 스크랩 기능
const saveIcon = saveBtn.querySelector("img");

saveBtn.addEventListener("click", () => {
    if (saveBtn.classList.contains("active")) {
        saveBtn.classList.remove("active");
        saveIcon.src = "./assets/icon/bookmark-empty.svg";
    } else {
        saveBtn.classList.add("active");
        saveIcon.src = "./assets/icon/bookmark-filled.svg";
    }
});
