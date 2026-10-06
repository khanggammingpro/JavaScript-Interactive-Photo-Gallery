// Called when the mouse is over (or keyboard focus is on) a thumbnail.
// previewPic is the <img> element that triggered the event.
function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  const imageDiv = document.getElementById("image");

  // 1) Change the text of the div to the image's alt text
  imageDiv.innerHTML = previewPic.alt;

  // 2) Change the background image of the div to the image's source
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Called when the mouse leaves (or focus leaves) a thumbnail.
function unDo() {
  console.log("unDo triggered");

  const imageDiv = document.getElementById("image");

  // Restore the original background image value and text
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
