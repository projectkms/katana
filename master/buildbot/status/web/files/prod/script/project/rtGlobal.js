define(["jquery","helpers","dataTables","extend-moment"],function(e,t,a,i){var n=e("#buildQueueTotal"),r=e("#buildSlavesTotal"),l=e("#verticalProgressBar"),s=e("#buildLoad"),o=s.find("span"),u={init:function(){requirejs(["realtimePages"],function(e){u.initDataTable();var t=e.defaultRealtimeFunctions();e.initRealtime(t)})},processGlobalInfo:function(e){i.setServerTime(e.utc);var a=e.build_load;n.show(),r.show(),l.show();var u=100>=a?"green":a>=101&&200>=a?"yellow":"red";s.attr({"class":"info-box "+u}).show();var b=e.slaves_count,d=e.slaves_busy/b*100,c=b-e.slaves_busy,v=e.running_builds;t.verticalProgressBar(l.children(),d),l.attr("title","{0} builds are running, {1}, agents are idle".format(v,c)),r.text(b),o.text(a)},initDataTable:function(){var t=e(".tablesorter-js");0===t.length&&(t=e("#tablesorterRt")),e.each(t,function(t,i){a.initTable(e(i),{})})}};return u});
//# sourceMappingURL=rtGlobal.js.map