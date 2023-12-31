

const galleryList = document.querySelector(".gallery");


galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeByEsc);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", closeByEsc);
      },
    }
  );

  instance.show();

  function closeByEsc({ code }) {
    if (code === "Escape") {
      instance.close();
    }
  }
}
