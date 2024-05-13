export default function GetList(){
    var arr=[1,2,3]
    return(
        <div>
            <h4>DB에서 모든 데이터 가져와보자</h4>
            <form action="/api/list" method="Get">
                <button type="submit">리스트 보기</button>
            </form>
            {
                arr.map((a,i)=>{
                    return(<div>{arr[i]}</div>)
                })
            }
        </div>
    )
}