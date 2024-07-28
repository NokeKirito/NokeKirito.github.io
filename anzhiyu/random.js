var posts=["2024/07/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"anzhiyu","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"MRoldL001","link":"http://www.mroldl001.top","avatar":"http://www.mroldl001.top/wp-content/uploads/2024/07/1721900985-%E7%BE%8E%E6%B3%A2-%E8%99%9A%E7%A5%9E%E8%B5%A0-%E6%AD%A3%E6%96%B9%E5%BD%A2%E5%8D%8A%E8%BA%AB.png","descr":"MR糯香版","siteshot":"https://cdn.jsdelivr.net/gh/NokeKirito/maoliu@main//%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-07-26%20205113.png"},{"name":"MRoldL001","link":"http://www.mroldl001.top","avatar":"http://www.mroldl001.top/wp-content/uploads/2024/07/1721900985-%E7%BE%8E%E6%B3%A2-%E8%99%9A%E7%A5%9E%E8%B5%A0-%E6%AD%A3%E6%96%B9%E5%BD%A2%E5%8D%8A%E8%BA%AB.png","descr":"MR糯香版","siteshot":"https://cdn.jsdelivr.net/gh/NokeKirito/maoliu@main//%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-07-26%20205113.png","color":"vip","tag":"技术"},{"name":"MRoldL001","link":"http://www.mroldl001.top","avatar":"http://www.mroldl001.top/wp-content/uploads/2024/07/1721900985-%E7%BE%8E%E6%B3%A2-%E8%99%9A%E7%A5%9E%E8%B5%A0-%E6%AD%A3%E6%96%B9%E5%BD%A2%E5%8D%8A%E8%BA%AB.png","descr":"MR糯香版","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };