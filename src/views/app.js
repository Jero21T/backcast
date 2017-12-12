var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
  },


  render: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView({collection: this.videos});
    
    this.$el.html(this.template());
    this.$el.append(this.videoPlayerView);
    this.$el.append(this.videoListView);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

