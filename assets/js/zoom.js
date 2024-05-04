// Initialize medium zoom.
$(document).ready(function () {
  const $zoomableElements = $("[data-zoomable]");
  const classToToggle = "rounded-bottom";

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    margin: 70,
    ScrollOffset: 200,
  });

  $zoomableElements.click(function () {
    $(this).removeClass(classToToggle);
  });

  medium_zoom.on("closed", () => {
    $zoomableElements.addClass(classToToggle);
  });
});
