$(function(){
    //����ͷ���͵ײ�
    $.get({
        url:"./header.html",
        success:function(data){
            $("#header").html(data);
        }
    })
    $.get({
        url:"./footer.html",
        success:function(data) {
            $("#footer").html(data);
        }
    });
})
