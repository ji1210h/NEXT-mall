export default function Register(){
    return (
        <div>
            <h4> 회원가입 </h4>
            <form action="api/register" method="POST">
                <input name="title" placeholder="아이디"></input>
                <input name="content" placeholder="비밀번호"></input>
                <button type="submit">가입</button>
            </form>

        </div>
    )
}