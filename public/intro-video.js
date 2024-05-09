export default function start() {
  preload();

  const initialScrollPosition = window.scrollY;

  function handleScroll() {
    let scrollPosition = window.scrollY;
    if (Math.abs(initialScrollPosition - scrollPosition) > 100) {
      setupIntroVideo();
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);

}

function preload() {
  const container = document.querySelector('#intro-video');

  const video = document.createElement('video');

  video.id = 'intro-video-player';
  video.classList.add('iv-player');

  video.muted = true;
  video.loop = true;
  video.draggable = false;
  video.src = 'https://cdn.dribbble.com/userupload/92566/file/original-53ad0460a2ad35860f2859f174d7a6f4.mov';

  container.appendChild(video);
}

function setupIntroVideo() {
  const container = document.querySelector('#intro-video');

  const card = document.createElement('div');
  card.classList.add('iv-card');

  const bubble = document.createElement('div');

  bubble.id = 'bubble-text';
  bubble.classList.add('iv-bubble');

  bubble.textContent = 'Hello!';

  const videoWrapper = document.createElement('div');
  videoWrapper.classList.add('iv-player-wrapper');

  const video = document.querySelector('#intro-video-player');
  video.style.display = 'block';

  const progressBar = document.createElement('progress');
  progressBar.id = 'intro-video-progressbar';
  progressBar.classList.add('iv-progressbar');
  progressBar.value = 0;
  progressBar.max = 100;

  const button = document.createElement('button');
  button.classList.add('iv-close-button');
  button.innerHTML = '&times;';

  video.addEventListener('timeupdate', function() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.value = percentage;
  });

  button.onclick = () => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.remove();
    }, 500);
  }

  const cta = document.createElement('button');
  cta.classList.add('iv-cta-button');
  cta.textContent = 'Message Me';

  videoWrapper.onclick = () => {
    card.style.height = '480px';
    card.style.width = '270px';
    progressBar.style.width = '270px';
    video.muted = false;
    videoWrapper.appendChild(cta);
    bubble.remove();
  }

  videoWrapper.appendChild(video);
  videoWrapper.appendChild(progressBar);
  card.appendChild(videoWrapper);
  card.appendChild(button);
  card.appendChild(bubble);
  container.appendChild(card);
  video.play();
}
