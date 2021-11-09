
 //스크립트 아이디 암호체크
 function loginCheck(){
    //아이디검사
	if(!frm.id.value){
		alert("아이디를 입력하세요!");
		frm.id.focus();
		return false;
	}
   //비밀번호 검사
	if(!frm.pw.value){
		alert("비밀번호를 입력하세요!");
		frm.pw.focus();
		return false;
	}
 alert('로그인되었습니다');
}
