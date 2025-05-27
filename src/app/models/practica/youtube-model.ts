export class YoutubeModel {
  id: string;
  title: string;
  short_url: string;

  channelName: string;
  channelIcon: string;

  descriptionSnippet: string;
  publishedTimeText: string;
  views: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.short_url = '';
    this.channelName = '';
    this.channelIcon = '';
    this.descriptionSnippet = '';
    this.publishedTimeText = '';
    this.views = '';   
  }
}
