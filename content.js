const host = document.createElement('div');
document.body.appendChild(host);

const shadow = host.attachShadow({ mode: 'open' });

console.log(location.pathname)

shadow.innerHTML = `
  <style>
    .mtmle-button {
      align-items: center;
      background-color: #9e42f5;
      border-radius: 60px;
      border: 1px solid #ddd;
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

    .mtmle-button:hover {
      max-width: 300px;
    }

    .mtmle-button.prev {
      left: 60px;
    }

    .mtmle-button.prev .content {
      padding-right: 15px;
    }

    .mtmle-button.next {
      justify-content: flex-end;
      right: 60px;
    }

    .mtmle-button.next .content {
      padding-left: 15px;
    }
  </style>
  <div>Hello from shadow DOM</div>
`;