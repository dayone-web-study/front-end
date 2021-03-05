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

const sum_2 = (a, b) => a + b;

const sayHi_2 = () => console.log("안녕하세요");

const me_2 = (name, age) =>
{
    console.log("안녕하세요,");
    console.log("제 이름은 ", name, " 입니다.");
    console.log("저는 ", age, " 살 입니다.");
};

// Test

console.log("------function keyword------")
console.log(sum(2,3));
console.log();
sayHi();
console.log();
me("이준희", 21.5);

console.log("\n------arrow function------")
console.log(sum_2(2,3));
console.log();
sayHi_2();
console.log();
me_2("이준희", 21.5);