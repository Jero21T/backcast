var VideoListEntryView = Backbone.View.extend({


  initialize: function() { 
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  events: {'click': 'clickHandler'},
  
  clickHandler: function() {
    this.model.select();
  }

});
