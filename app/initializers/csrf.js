import Ember from "ember";

var $ = Ember.$;

export default {
  name: "csrf",
  initialize: function() {
    $.ajaxPrefilter(function(options, originalOptions, xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      xhr.setRequestHeader('X-CSRF-Token', token);
    });
  }
};
