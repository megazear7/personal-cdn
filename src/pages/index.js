import { html } from 'orison';
import fs from 'fs';

const files = fs.readdirSync('./src/static/cdn')
  .map(file => ({
    name: file,
    url: `https://cdn.alexlockhart.me/cdn/${file}`
  }));

export default context => html`
  <h1>${context.root.data.title}</h1>
  <img src="/icons/icon-128x128.png">
  <ul>
    ${files.map(file => html`
      <li><a href="${file.url}">${file.name}</a></li>
    `)}
  </ul>
`;
