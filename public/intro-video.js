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
  video.style.display = 'none';
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.margin = '0 auto';
  video.style.borderRadius = '8px';
  video.style.objectFit = 'cover';
  video.muted = true;
  video.loop = true;
  video.draggable = false;
  video.src = 'https://cdn.dribbble.com/userupload/92566/file/original-53ad0460a2ad35860f2859f174d7a6f4.mov';

  container.appendChild(video);
}

function setupIntroVideo() {
  const container = document.querySelector('#intro-video');

  const card = document.createElement('div');

  card.style.animation = 'bounce-fade .4s';
  card.style.position = 'fixed';
  card.style.zIndex = '10';
  card.style.right = '16px';
  card.style.bottom = '16px';
  card.style.boxSizing = 'border-box';
  card.style.width = '160px';
  card.style.height = '284px';
  card.style.transition = 'all .25s ease-in-out';
  card.style.borderRadius = '16px';
  card.style.background = '#fff';
  card.style.boxShadow = '0 20px 48px rgba(0,0,0,.1)';
  card.style.cursor = 'pointer';

  const bubble = document.createElement('div');

  bubble.id = 'bubble-text';
  bubble.style.position = 'absolute';
  bubble.style.top = '30px';
  bubble.style.left = '-40px';
  bubble.style.width = 'auto';
  bubble.style.minWidth = '60px';
  bubble.style.padding = '8px';
  bubble.style.background = 'white';
  bubble.style.border = '2px solid #007BFF';
  bubble.style.borderRadius = '10px';
  bubble.style.borderBottomRightRadius = '2px';
  bubble.style.textAlign = 'center';
  bubble.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';

  bubble.textContent = 'Hello!';

  const videoWrapper = document.createElement('div');

  videoWrapper.style.width = '100%';
  videoWrapper.style.height = '100%';
  videoWrapper.style.position = 'relative';
  videoWrapper.style.borderRadius = '8px';

  const video = document.querySelector('#intro-video-player');

  video.style.display = 'block';

  const progressBar = document.createElement('progress');
  progressBar.id = 'intro-video-progress-bar';
  progressBar.value = 0;
  progressBar.max = 100;
  progressBar.style.height = '8px';
  progressBar.style.width = '160px';
  progressBar.style.position = 'absolute';
  progressBar.style.bottom = '0px';
  progressBar.style.borderBottomLeftRadius = '8px';
  progressBar.style.borderBottomRightRadius = '8px';
  progressBar.style.overflow = 'hidden';


  const button = document.createElement('button');
  button.style.position = 'absolute';
  button.style.top = '-16px';
  button.style.right = '-16px';
  button.style.background = 'rgba(0, 0, 0, 1)';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '50%';
  button.style.width = '32px';
  button.style.height = '32px';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.fontSize = '42px';
  button.style.cursor = 'pointer';
  button.innerHTML = '&times;';
  button.style.paddingBottom = '2px';

  const styleSheet = document.createElement('style');
  styleSheet.innerText = '#intro-video-progress-bar::-webkit-progress-value {background-color: #007BFF;}'
    + '#intro-video-progress-bar::-webkit-progress-bar {background-color: transparent;border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;}'
    + '#intro-video-progress-bar::-moz-progress-value {background-color: #007BFF;}'
    + '#intro-video-progress-bar::-moz-progress-bar {background-color: transparent;border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;}'
    + '@keyframes bounce-fade { 0% { transform: scale(0.5); opacity: 0; } 50% { transform: scale(1.2); } 100% { transform: scale(1); opacity: 1; }';
  document.head.appendChild(styleSheet);


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

  /*
  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="mr-2 h-4 w-4"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
  </svg>
  Message Me
</button>
*/
  const cta = document.createElement('button');
  cta.style.display = 'inline-flex';
  cta.style.paddingTop = '0.5rem';
  cta.style.paddingBottom = '0.5rem';
  cta.style.paddingLeft = '1rem';
  cta.style.paddingRight = '1rem';
  cta.style.transitionProperty = 'background-color, border-color, color, fill, stroke';
  cta.style.fontSize = '0.875rem';
  cta.style.lineHeight = '1.25rem';
  cta.style.fontWeight = '500';
  cta.style.whiteSpace = 'nowrap';
  cta.style.justifyContent = 'center';
  cta.style.alignItems = 'center';
  cta.style.height = '2.5rem';
  cta.style.borderRadius = '0.375rem';
  cta.style.position = 'absolute';
  cta.style.bottom = '2rem';
  cta.textContent = 'Message Me';
  cta.style.backgroundColor = '#000';
  cta.style.color = '#FFF';
  console.log(cta.offsetWidth);
  cta.style.left = '70px';
  cta.style.width = '130px';

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
