/* eslint-disable */
// eslint warning 무시하게 만드는 역할

import {useState} from "react";
import "./App.css";

function App() {
    // 변수는 내용이 바뀌면 html을 직접 변경해줘야한다
    let post = "강남 우동 맛집";

    // 로고는 변경사항이 없기 때문에 변수화하던가 하드코딩 하는것이 더 좋다
    let [logo, setLogo] = useState("ReactBlog");

    // Destructuring 문법 설명
    let num = [1, 2];
    // Array 안에 있는 변수를 각각 대입해주는 문법
    let [a, c] = [1, 2];
    // let a = num[0];
    // let c = num[1];

    // [값, 함수]가 저장됨
    // state는 값이 변경되면 자동으로 변경됨
    // let [val1, func1] = useState('남자 코트 추천');
    // let [val2, func2] = useState('강남 우동 맛집');
    // let [val3, func3] = useState('파이썬 독학');

    // 배열 사용한 state 사용 예제
    let [tit, setTit] = useState(["남자 코트 추천 배열", "강남 우동 맛집 배열", "파이썬 독학 배열"]);

    let [따봉, 따봉변경] = useState([0, 0, 0]);

    let [modal, setModal] = useState(false);
    let [modalIndex, setModalIndex] = useState(0);

    /* map() 함수 기능 확인 */
    // Array 배열 만큼 복사 붙여넣기 해줌
    [1, 2, 3].map(function (a) {
        return "1233211";
    });

    return (
        <div className="App">
            <div className="black-nav">
                <h3 style={{color: "red", fontSize: "16px"}}>{logo}</h3>
            </div>
            {/* <div className="list">
                <h4>
                    {tit[0]}
                    
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{tit[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4
                    onClick={() => {
                        let state = modal;
                        state == false ? (state = true) : (state = false);
                        setModal(state);
                    }}
                >
                    {tit[2]}
                </h4>
                <p>2월 17일 발행</p>
            </div> */}

            {/* 버튼 영역 */}
            <div>
                {/* 배열 수정 방법 */}
                <button
                    className="btn-refresh"
                    onClick={() => {
                        // 배열은 원본을 보존해야하기 때문에 별도의 변수를 만들어서 갈기
                        // array/object는 변수가 저장되는 것이 아닌 변수의 주소만 저장이 됨
                        // 전개 구문을 이용해서 괄호를 벗기고 그것을 다시 Array로 만들어 달라는 뜻
                        // == shallow copy(== deep copy)
                        let copy = [...tit];
                        copy[1] = "여자 코트 추천";
                        // 기존 state , 신규 state가 동일하면 변경되지 않는다.
                        // array, object의 경우 변수에 pointer가 저장되기 때문에
                        setTit(copy);
                    }}
                >
                    새로고침
                </button>
                <button
                    className="btn-sort"
                    onClick={() => {
                        let copy = [...tit];
                        copy.sort();
                        setTit(copy);
                    }}
                >
                    정렬
                </button>

                {/* 반복문 하는 법 */}
                {tit.map(function (v, i) {
                    // 리턴 값이 2줄 이상일 때 괄호 필수
                    return (
                        <div className="list" key={i}>
                            <h4
                                onClick={() => {
                                    setModal(!modal);
                                    setModalIndex(i);
                                }}
                            >
                                {v}
                            </h4>
                            <span
                                onClick={() => {
                                    let copy = [...따봉];
                                    copy[i] = copy[i] + 1;
                                    따봉변경(copy);
                                }}
                            >
                                👍
                            </span>
                            {따봉[i]}
                            <p>2월 17일 발행</p>
                        </div>
                    );
                })}

                <input type="text" />

                {/* // 컴포넌트 넣기 */}
                {/* 조건문 적는 법 */}
                {
                    /* 조건문 삼항 연산자 사용 가능 */
                    modal == true ? <Modal tit={tit} setTit={setTit} modalIndex={modalIndex} /> : null
                }
            </div>
        </div>
    );
}

// App 바깥에 만들기
function Modal(props) {
    return (
        // 최상단에 하나만
        // 플래그먼트 문법을 이용해서 2개의 div를 병렬로 쓸 수 있다.
        <>
            <div className="modal">
                <h4>{props.tit[props.modalIndex]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button
                    className="btn-refresh"
                    onClick={() => {
                        let origin = props.tit;
                        let copy = [...origin];
                        copy[0] = "여자 코트 추천";
                        props.setTit(copy);
                    }}
                >
                    새로고침
                </button>
            </div>
            <div></div>
        </>
    );
}

export default App;