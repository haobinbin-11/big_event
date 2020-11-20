// (!function(){
if(localStorage.getItem('token') == null){
    location.href = 'login.html'
}
// })()

// 获取用户信息吗
$.ajax({
    method : 'get',
    url : 'http://ajax.frontend.itheima.net/my/userinfo',
    headers: {
        //key:value
        Authorization: localStorage.getItem('token')
    },
    success : function(res){
        $('.username').html('');
        console.log(res);
        console.log(res.data.nickname);
        var name = res.data.nickname || res.data.username
        $('.username').text(name)
        console.log(res.data.username.substr(0,1).toLocaleUpperCase());
        
        if(res.data.user_pic == undefined){
            res.data.nickname == undefined?$('.avatar').show().text(res.data.nickname.substr(0,1)):$('.avatar').show().text(res.data.username.substr(0,1).toLocaleUpperCase());
            $('.layui-nav-img').hide();
        }
        else {
            $('.layui-nav-img').show().src(res.data.user_pic);
            $('.avatar').hide();
        }
        
    }
})
// 退出
$('#logout').on('click',function(){
    localStorage.removeItem('token')
    location.href = 'login.html'
})