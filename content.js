const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css';

const host = document.createElement('div');
document.body.appendChild(host);

const shadow = host.attachShadow({ mode: 'open' });

shadow.appendChild(styleLink);

const chapter_str =  location.pathname.match(/chapter-(\d+)/)?.[1]

const chapter = chapter_str ? parseInt(chapter_str) : location.pathname

const prevURL = location.href.replace(/chapter-\d+/, `chapter-${chapter - 1}`)
const nextURL = location.href.replace(/chapter-\d+/, `chapter-${chapter + 1}`)


const SS_SPACING_END = '200px'

shadow.innerHTML = `
  <style>
    .mtmle-button {
      align-items: center;
      background-color: #9e42f5;
      border-radius: 60px;
      border: none;
      color: white;
      display: inline-flex;
      height: 32px;
      max-width: 32px;
      overflow: hidden;
      position: fixed;
      text-decoration: none;
      transition: all 1s ease;
      white-space: nowrap;
      width: auto;
      top: calc(50% - 32px);
    }

    .mtmle-button .mdi {
      margin: 0px 8px;
    }

    .mtmle-button {
      max-width: 300px;
    }

    .mtmle-button.prev {
      left: ${SS_SPACING_END};
    }

    .mtmle-button.prev .content {
      padding-right: 15px;
    }

    .mtmle-button.next {
      justify-content: flex-end;
      right: ${SS_SPACING_END};
    }

    .mtmle-button.next .content {
      padding-left: 15px;
    }
  </style>
  <a href="${nextURL}" class="mtmle-button next">
    <div class='content'>
      Next
      <i class="mdi mdi-arrow-right"></i>
    </div>
  </a>
  <a href="${prevURL}" class="mtmle-button prev">
    <div class='content'>
      <i class="mdi mdi-arrow-left"></i>
      Previous
    </div>
  </a>
`;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.value) {
    const nav_buttons = shadow.querySelectorAll('.mtmle-button')
    nav_buttons.forEach(btn => btn.style.display = msg.value)
  }
});