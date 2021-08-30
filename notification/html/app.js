$(function () {
  window.onload = (e) => {
    window.addEventListener("message", (event) => {
      var item = event.data;
      if (item !== undefined && item.type === "custom") {
        document.getElementById("notifications").innerHTML +=
          '<div class="notification" style="border-left: 8px ' +
          item.color +
          ' solid;"><div class="notification-title"><p1 id="notfication-title-content">' +
          item.title +
          '</p></div><div class="notification-message"><p id="notfication-message-content">' +
          item.message +
          "</p></div></div>";
        $(".notification").delay(5000).fadeOut("slow");}

        if (item !== undefined && item.type === "announce") {  
        document.getElementById("announce").innerHTML +=
          '<div class="announce" ' +
          item.color +
          ' solid;"><div class="announce-title"><p1 id="notfication-title-content">' +
          item.title +
          '</p></div><div class="announce-message"><p id="notfication-message-content">' +
          item.message +
          "</p></div></div>";
        $(".announce").delay(8000).fadeOut("slow");
        
      }
    });
  };
});
