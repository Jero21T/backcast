var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
  },

  render: function() {
    console.log(this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
