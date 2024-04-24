const SUMMARY_TITLE_COLSED = "▶️ [문제 분류 표시하기]";
const SUMMARY_TITLE_OPENED = "▼ [문제 분류 가리기]";

const getTagList = () => {
  const problemTags = document.querySelector("#problem_tags .spoiler-list");

  if (!problemTags) return;

  return problemTags.innerHTML;
};

const replaceTagListToToggleList = () => {
  const problemTags = document.querySelector("#problem_tags");
  const listElement = problemTags.querySelector(".spoiler-list");
  const tagListElement = getTagList();

  if (!tagListElement) {
    console.log(
      "[BOG-helper]: 로그인 여부와 알고리즘 분류 표시 설정이 되어있는지 확인해주세요."
    );
  }

  const detailsElementHTML = `<details>
    <summary><h3 class="tag-visibility-toggle">${SUMMARY_TITLE_COLSED}<h3></summary>
    ${tagListElement}
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
