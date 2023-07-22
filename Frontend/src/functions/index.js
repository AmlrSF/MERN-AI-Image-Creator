import FileSaver from 'file-saver';
import { randomPrompt } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * randomPrompt.length);
  const finalPrompt = randomPrompt[randomIndex];

  if (finalPrompt === prompt) return getRandomPrompt(prompt);

  return finalPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
