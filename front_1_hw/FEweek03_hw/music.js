// currentTime 출력 구현
const timePrint = document.getElementById("time");

function currentTime() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "오후" : "오전";

    hours = hours % 12 || 12; // 12시간제로 변환

    timePrint.textContent = `${year}. ${month}. ${day}. ${ampm} ${hours}:${minutes}`;
}

currentTime();
setInterval(currentTime, 1000);

// 노래 검색 → 리스트 출력 구현
const searchInput = document.getElementById("search-input");
const searchButton = document.querySelector(".search-button");
const resultContainer = document.getElementById("result-container");

function searchSongs() {
    const keyword = searchInput.value.trim();

    if (!keyword) {
        resultContainer.innerHTML = "<p>검색어를 입력해 주세요.</p>";
        return;
    }

    // fetch로 API 요청
    fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`)
        .then(response => response.json())

        .then(data => {
            if (data.length === 0) {
                resultContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
                return;
            }

            let html = "";

            data.forEach(song => {
                html += `
                    <div class="song-card">
                        <p class="song-no">${song.no}</p>
                        <div class="song-info">
                            <p class="song-title">${song.title}</p>
                            <p class="song-singer">${song.singer}</p>
                        </div>
                        <p class="song-release">${song.release}</p>
                    </div>
                `;
            });

            resultContainer.innerHTML = html;
        })

        .catch(error => {
            resultContainer.innerHTML = "<p>다시 시도해 주세요.</p>";
            console.error(error);
        });
}

// 버튼 클릭 이벤트
searchButton.addEventListener("click", searchSongs);

// Enter 키 이벤트
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchSongs();
});
