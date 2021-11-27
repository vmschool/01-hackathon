import { Module } from '../core/module';

export class VideoModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const videoBlock = document.createElement('div');
    videoBlock.id = 'video';
    videoBlock.style.width = '50%';
    videoBlock.style.margin = '0 auto';
    videoBlock.style.display = 'block';
    videoBlock.style.paddingTop = '20px';
    document.body.append(videoBlock);
    const urlVideo = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    const videoElement = document.createElement('video');
    videoElement.controls = ' ';
    videoElement.autoplay = 'true';
    videoElement.title = 'Video';
    videoElement.src = urlVideo;
    videoElement.style.width = '100%';
    videoBlock.append(videoElement);
    const deleteButton = document.createElement('button');
    deleteButton.id = 'videoBtn';
    deleteButton.innerHTML = 'Убрать видео';
    videoBlock.prepend(deleteButton);
    deleteButton.addEventListener('click', function () {
      document.getElementById('video').remove();
    });
  }
}
