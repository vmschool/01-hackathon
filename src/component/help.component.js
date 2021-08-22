import { createEl } from "@/utils";

export const showHelpComponent = (arrayText) => {
  const arrayHelperText = [...arrayText];
  if (!document.querySelector(".help-list")) {
    const helpBlock = createEl("ul", "", ["help-list"]);
    document.querySelector(".help-description").append(helpBlock);

    arrayHelperText.forEach((item) => {
      const helpListItem = createEl("li", item, ["help-list__item"]);
      document.querySelector(".help-list").append(helpListItem);
    });
    setTimeout(() =>
      document.querySelector(".help-list").classList.add("active")
    );
    return helpBlock;
  } else {
    document.querySelector(".help-list").classList.remove("active");
    setTimeout(() => {
      document.querySelector(".help-list").remove();
    }, 500);
  }
};
