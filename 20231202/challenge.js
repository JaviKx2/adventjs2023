function manufacture(gifts, materials) {
  if ((gifts ??= []).length == 0 || (materials ??= "").length == 0) {
    return [];
  }
  let materialsMap = new Map();
  for (const material of materials) {
    materialsMap.set(material, true);
  }

  let manufactured = [];
  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    const missingMaterial = gift
      .split("")
      .map((giftPart) => materialsMap.get(giftPart) ?? false)
      .some((found) => !found);
    if (!missingMaterial) {
      manufactured.push(gift);
    }
  }
  return manufactured;
}

export default manufacture;
