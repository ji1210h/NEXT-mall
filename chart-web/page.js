export default function login(){
    return (
        <div className="flex items-center justify-center mt-10">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/api/auth/isLogin" method="POST">
            <h2 className="text-center text-2xl font-bold mb-6">로그인</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    이메일
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" name="email" placeholder="이메일" required/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    비밀번호
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="비밀번호" required/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    로그인
                </button>
                <a href="/signup">Sign up</a>
            </div>
        </form>
        </div>
    )
}