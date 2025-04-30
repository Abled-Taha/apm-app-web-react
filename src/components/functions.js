function simulateAnchorClick(href) {
  const a = document.createElement('a');
  a.href = href;
  a.click();
}

export default simulateAnchorClick;