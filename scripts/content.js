const SUMMARY_TITLE_COLSED = "▶️ [문제 분류 표시하기]";
const SUMMARY_TITLE_OPENED = "▼ [문제 분류 가리기]";

const replaceTagListToToggleList = () => {
  const problemTags = document.querySelector("#problem_tags");

  if (!problemTags) {
    console.log(
      "[BOG-Otter-helper]: 로그인 여부와 알고리즘 분류 표시 설정이 되어있는지 확인해주세요."
    );
    return;
  }

  const listElement = problemTags.querySelector(".spoiler-list");

  const detailsElementHTML = `<details>
    <summary><h3 class="tag-visibility-toggle">${SUMMARY_TITLE_COLSED}<h3></summary>
    ${listElement.innerHTML}
  </details>`;

  listElement.remove();

  problemTags.insertAdjacentHTML("beforeend", detailsElementHTML);

  const detailsElement = problemTags.querySelector("details");
  const toggleTitle = document.querySelector(".tag-visibility-toggle");

  detailsElement.addEventListener("toggle", ({ newState }) => {
    if (newState === "closed") {
      toggleTitle.textContent = `${SUMMARY_TITLE_COLSED}`;
    } else {
      toggleTitle.textContent = `${SUMMARY_TITLE_OPENED}`;
    }
  });
};

replaceTagListToToggleList();
