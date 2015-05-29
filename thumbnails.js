$.Thumbnails = function(el) {
  this.$el = $(el);
  this.$gnomeImages = this.$el.find('.gnome-images');
  this.$images = this.$gnomeImages.children();
  this.$activeImg = this.$images.eq(0);
  this.gnomeIdx = 0;

  this.activate(this.$activeImg);

  setInterval(this.randomImage.bind(this), Math.floor(Math.random() * 100 + 50));
};

$.Thumbnails.prototype.randomImage = function () {
  var oldImgIdx = this.$images.index(this.$activeImg);
  var activeImgIdx = oldImgIdx;
  while (activeImgIdx === oldImgIdx) {
    activeImgIdx = Math.floor(Math.random() * this.$images.length);
  }
  this.$activeImg = this.$images.eq(activeImgIdx);
  this.activate(this.$activeImg);
};

$.Thumbnails.prototype.activate = function($img) {
  this.$el.find('div.active').html($img.clone());
};

$.Thumbnails.prototype.pickImage = function(event) {
  this.$activeImg = $(event.target);
  this.activate(this.$activeImg);
};

$.fn.thumbnails = function () {
  this.each(function () {
    new $.Thumbnails(this);
  });
};
