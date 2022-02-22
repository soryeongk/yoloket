export function toggleMenu(e) {
  const optionWrapper = e.currentTarget.lastChild;

  if (!optionWrapper) return;

  const visibility = optionWrapper.style.visibility;

  if (visibility === "hidden") {
    optionWrapper.style.visibility = "visible";
  } else {
    optionWrapper.style.visibility = "hidden";
  }

  return;
}
