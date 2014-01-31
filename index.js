(function() {
    "use strict";

    var CommonRoom = window.CommonRoom = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        CommonRoom.app = new DevExpress.framework.html.HtmlApplication({
            namespace: CommonRoom,
            
            navigationType: "slideout",
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "Student Posts",
                action: "#posts",
                icon: "info"
              },
              {
                title: "Accomodation",
                action: "#accomodation",
                icon: "home"
              },
              {
                title: "Work",
                action: "#work",
                icon: "info"
              },
              {
                title: "Events",
                action: "#events",
                icon: "info"
              }
            ]
        });
        
        CommonRoom.app.router.register(":view", { view: "home" });
        CommonRoom.app.navigate();
    });
    
})();