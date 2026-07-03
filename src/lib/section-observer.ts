export function getActiveSectionId(sections: Element[], viewportMiddle: number) {
  let activeId = sections[0]?.id ?? "";

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
      activeId = section.id;
      break;
    }
  }

  return activeId;
}
