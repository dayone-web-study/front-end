// function 키워드를 사용해 함수 만들기
function sum(a, b) {
    return a + b;
}

function sayHi() {
    console.log("안녕하세요");
}

function me(name, age) {
    console.log("안녕하세요,");
    console.log("제 이름은 ", name, " 입니다.");
    console.log("저는 ", age, " 살 입니다.");
}

// TODO: 화살표 함수로 작성해보기
const sum2 = (a,b) => {
    return a+b;
};
sum2(5,3);

const sayHi2 = (v) => console.log(v);
sayHi2("안녕하세요");

const me2 = (name2, age2) => {
    console.log("안녕하세요,");
    console.log("제 이름은 ", name2, " 입니다.");
    console.log("저는 ", age2, " 살 입니다.");
}
me2("kyuung",10);