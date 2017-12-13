var VideoListView = Backbone.View.extend({

  

  initialize: function() {
   
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video) {
      this.$('.video-list').append(new VideoListEntryView({model: video}).render().el);
    }, this);
 
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
