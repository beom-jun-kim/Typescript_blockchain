// 정의 파일은 자바스크립트 코드와 모양을 타입스크립에 설명해주는 파일이다
// 타입스크립트는 작성자가 쓰는 모든것에 대한 타입을 이해하고 있어야 한다
// myPackage.d.ts라는 정의파일에서 타입 정해주면 import가 된다

import { init, exit } from "myPackage";

init({
    url:"true"
})

exit(1)

localStorage.clear()