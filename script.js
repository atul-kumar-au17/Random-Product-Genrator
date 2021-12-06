var material, product;

material = ['sound-absorbing', 'heavy', 'weightless', 'liquid', 'reflective', 'corrosive', 'flexible', 'malleable', 'stiff', 'flammable', 'fabric', 'styrofoam', 'Vinyl', 'felt', 'wool', 'ceramic', 'plastic', 'aluminum', 'steel', 'cast iron', 'digital', 'paper', 'cardboard', 'maple', 'walnut', 'ceramic', 'glass', 'gold', 'silver', 'bronze', 'brass', 'copper', 'carbon fiber', 'cotton', 'foam', 'rubber', 'silicone', 'canvas', 'concrete', 'stone', 'rope', 'wire', 'plywood', 'hair', "brick", "leather", "suede", "3d Printed", "cork", "foam", "putty", "hemp", "bamboo", "dirt", "twig", "sheet metal", "stone", "cast iron", "wrought iron", "nickel", "tin", "zinc", "balsa wood", "oak", "teak", "bone", "ivory", "rattan", "diamond", "charcoal", "plaster", "clay", "feather", "floor", "ceiling", "wall", "corner", "papier mâché", "nylon", "mercury", "marble", "corian", "glowing", "floating", "magnetic", "wood fiber", "foil", "porcelain", "wax", "underwater", "outerspace", "outdoor"];

product = ['chair', 'stool', 'table', 'mug', 'cup', 'desk lamp', 'floor lamp', ' desk', 'shelf', 'sofa', 'tea cup', 'tea pot', 'cutlery', 'chess set', 'lounge', ' alarm clock', 'phone dock', 'keyboard', 'side table', 'wallet', 'vase', 'dog bed', 'bird house', 'wine holder', 'skateboard', 'calculator', 'coathanger', 'salt & pepper shaker', 'coasters', "piggy bank", "headphones", "sculpture", "telephone", "flashlight", "mail sorter", "playing cards", "fan", "jewelry box", "mouse", "lantern", "walking cane", "sword", "wall clock", "mirror", "bed", "crib", "hammock", "plate", "bowl", "coffee mug", "espresso cup", "glasses", "fork", "spoon", "knife", "serving tray", "toy train", "action figure", "lamp shade", "cutting board", "dresser", "shoe rack", "rocking chair", "usb key", "8 ball", "frying pan", "drawer handle", "doorknob", "cable organizer", "planter pot", "coat hanger", "bottle opener", "can opener", "coasters", "pocket knife", "surfboard", "shoes", "book", "calendar", "house numbers", "spice rack", "suitcase", "button", "ring", "baking tray", "tape dispenser", "flower pot", "canoe", "basket", "pillow", "rug", "wall tile", "road bike", "bike seat", "handlebars"];

$('.random').click(function() {
  var index;
  this.material = $('.material');
  this.material.addClass('opacity');
  this.object = $('.object');
  this.object.addClass('flipInX');
  index = Math.floor(Math.random() * material.length);
  this.material.text(material[index]);
  return setTimeout(((function(_this) {
    return function() {
      index = Math.floor(Math.random() * product.length);
      return _this.object.text(product[index]);
    };
  })(this)), 0);
});

$('.random').click(function() {
  return setTimeout((function() {
    $('.object').removeClass('flipInX');
    return $('.material').removeClass('opacity');
  }), 400);
});