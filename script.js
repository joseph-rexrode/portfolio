document.addEventListener("DOMContentLoaded", function(){
    var tabList = [].slice.call(document.querySelectorAll('a[data-bs-toggle="pill"]'));
    tabList.forEach(function(tab){
        tab.addEventListener("shown.bs.tab", function(e){
            e.target.style.backgroundColor = "#B75D69";
            e.relatedTarget.style.backgroundColor = "transparent";
        });
    });
});

let videos = document.querySelectorAll('video');

videos.forEach((video) => {
    video.playbackRate = 2.0;
})