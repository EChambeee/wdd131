function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'IMG' && clickedElement.classList.contains('thumbnail')) {
        const imgSrcParts = clickedElement.src.split('-');
        const imgSrc = imgSrcParts[0] + '-full.jpeg';
        const imgAlt = clickedElement.alt;
        const modalHTML = viewerTemplate(imgSrc, imgAlt);

        document.body.insertAdjacentHTML('afterbegin', modalHTML);

        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

document.querySelector('.gallery').addEventListener('click', viewHandler);
