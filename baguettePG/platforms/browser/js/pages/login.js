
$(function () {
//    $.mobile.loading('hide');
    //==> DOM Object GET 3가지 방법 ==> 1. $(tagName) : 2.(#id) : 3.$(.className)
    //==>"Login"  Event 연결
    $("#login").on("click", function () {

        var id = $("#customerTel").val().trim();
        var pw = $("input:password").val().trim();
        
        if (id == null || id.length < 1) {
            alert('ID 를 입력하지 않으셨습니다.');
            
            $("input:tel").focus();
            return;
        }

        if (pw == null || pw.length < 1) {
            alert('패스워드를 입력하지 않으셨습니다.');
            $("input:password").focus();
            return;
        }
    
        $.ajax({
            url: COMMONWEBSERVER + "/customer/jsonLogin",
            method: "POST",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                customerTel: id,
                password: pw
            }),
            success: function (JSONData, status) {
//                alert('응?');
                if (JSONData.customer != null) {

                    location.href = "html/main.html";
                    return;

                } else {
                    alert("아이디 , 패스워드를 확인하시고 다시 로그인...");
                }
            },
            error: function(JSONData,status){
                alert(JSONData + " : " + status);
                
            }
        });
    });
});