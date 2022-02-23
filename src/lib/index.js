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

export function convertKeyName(key) {
  switch (key) {
    case "S":
      return "스몰";
    case "M":
      return "라지";
    case "L":
      return "라라지";
    default:
      return "사이즈";
  }
}
