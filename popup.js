document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("mybutton");
  var textinfo = document.getElementById("textinfo");
  button.addEventListener("click", () =>
    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        //alert(tabs[0].url);

        textinfo.innerHTML = "URL is: " + tabs[0].url;


      }

    )
    , false);

});




/* chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {

  console.log("hey");
} */



function findOnAmazon(title) {
  //amazonSearchUrl='http://www.amazon.in/s/ref=nb_sb_noss_1/278-4309243-0016545?url=search-alias%3Daps&field-keywords='+encodeURIComponent(title);
  amazonSearchUrl = 'https://www.amazon.in/s?k=' + encodeURIComponent(title) + '&linkCode=ll2&tag=534ade-21';
  $.get(amazonSearchUrl, function (data) {
    alert(data)
    if ($("#noResultsTitle", data).get(0)) {
      message = "Amazon doesn't have this... yet!"
      addToPage(message)
    }
    else {
      result = $("#result_0 > .rsltL > .newp", data).find('a').find('span.bld.lrg.red').html();
      message = "Available on <span id=\"amazonlogo\">&nbsp;</span> for <span style=\"font-weight: bold\">Rs." + result.substr(result.lastIndexOf(">") + 1) + "</span> (<a href=\"" + amazonSearchUrl + "\">link</a>)"
      addToPage(message)

    }
  });

}



function findCompetitor() {

  var title = $(".B_NuCI").textContent;

  if (title) {
    findOnAmazon(title);
  }

}

function addToPage(message) {
  alert(message)

  $(function () {
    $("#fk-mainhead-id").prepend("<p class=\"flipkart-price\">" + message + "</p>");
    $("._30jeq3._16Jk6d").textContent
  });
}

