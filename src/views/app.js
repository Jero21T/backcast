var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() { 
    this.$el.html(this.template());
    new VideoPlayerView({el: '.player', model: this.videos.models[0]}).render();
    new VideoListView({el: '.list', collection: this.videos}).render();
    new SearchView({el: '.search'}).render();    
    return this;
  },

  template: templateURL('src/templates/app.html')

});

