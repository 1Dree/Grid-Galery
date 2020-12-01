((doc) => {
  const $ = (el) => doc.querySelector(el),
    galery = $("#galery"),
    galeryImg = doc.querySelectorAll("#galery img"),
    overlay = $("#overlay"),
    overlayImg = $("#overlay img"),
    btnsAction = doc.querySelectorAll(".img-wrapper .cover button");

  function activateOverlay(event) {
    overlay.classList.add("showUp");
    galery.classList.add("blurred");

    overlayImg.src = event.target.dataset.img;
  }

  function deactivateOverlay(event) {
    if (event.target.src === undefined) {
      event.target.classList.remove("showUp");
      galery.classList.remove("blurred");

      overlayImg.src = "";
    }
  }

  function execute() {
    if (screen.availWidth > 1000) {
      btnsAction.forEach((btn, i) => {
        btn.setAttribute("data-img", galeryImg[i].src);
        btn.addEventListener("click", activateOverlay);
      });

      overlay.addEventListener("click", deactivateOverlay);
    }
  }

  setInterval(execute, 1000);
})(document);
