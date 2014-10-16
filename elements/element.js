x ={
  "cid": "view5",
  "ui": ["filters", "completed", "active", "all", "summary"],
  "events": ["click #clear-completed"],
  "options": ["collection"],
  "element": {"tagName":"FOOTER","attributes":[{"name":"id","value":"footer"},{"name":"style","value":"display: block;"}]},

  "model": {
    "attributes": "{}"
  }
}


function buildAttributes(attributes) {
  return $.map(attributes, function(attr, i) {
    return buildAttribute(attr, i, attributes);
  })
}

function buildAttribute(attribute, index, attributes) {
  var attr = $('<span>').addClass("webkit-html-attribute")


  var attrName = $('<span>').addClass('webkit-html-attribute-name').text(attribute.name);
  var attrVal = $('<span>').addClass('webkit-html-attribute-value').text(attribute.value);

  attr.append(' ').append(attrName);

  if (attribute.value) {
    attr.append('=&#8203;').append('"')
  }

  attr.append(attrVal);
  if (attribute.value) {
    attr.append('"')
  }

  // if (index != attributes.length - 1) {
  //   attr.append(" ")
  // }


  return attr;
}

function htmlEncode(value){
  return $('<div/>').text(value).html();
}

function toHTML($el) {
  return $el.get(0).outerHTML;
}

function htmlTag() {
  return $('<span>').addClass('webkit-html-tag')
}

function htmlTagName(tagName) {
  tagName = tagName.toLowerCase();
  return $('<span>').addClass('webkit-html-tag').text(tagName)
}

function buildTag(element) {
  var tagName = element.tagName.toLowerCase();

  var openTag =
    $('<span>')
      .addClass('webkit-html-tag')
      .append('&lt;')
      .append(htmlTagName(element.tagName))
      .append(buildAttributes(element.attributes))
      .append('&gt;');



  var closeTag =
    $('<span>')
      .addClass('webkit-html-tag')
      .append('&lt;/')
      .append(htmlTagName(element.tagName))
      .append('&gt;');


  // var openTag = $('<span>').addClass('webkit-html-tag').html('&lt;'+ tagName +'&gt;').get(0).outerHTML; //'<span class="webkit-html-tag">&lt;'+ tagName +'&gt;</span>';
  // var closeTag = '<span class="webkit-html-tag">&lt;'+ tagName +'&gt;</span>';

  return toHTML(openTag) + ' ... ' + toHTML(closeTag);
}

function createDOMNode(element) {
  var tag = $('<span>')
    .addClass('source-code')
    .css('user-select', 'none')
    .html(buildTag(element))

  return tag;
}

$(document.body).ready(function() {
  $('#new-el').html(createDOMNode(x.element));
})
