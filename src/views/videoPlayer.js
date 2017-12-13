var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model.collection.on('select', this.render, this);
  },

  render: function(video) {
    if (video) {
      this.$el.html(this.template(video.attributes));
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'), 
  

});
