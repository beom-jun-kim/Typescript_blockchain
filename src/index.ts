import crypto from "crypto"; /* Node.js 내장모듈, 여러 해시 함수를 통한 암호화 기능을 제공 */

// 타입스크립트로 만들어지지 않은 패키지를 받았는데 타입 정의도 안되어있을때
// DefinitelyTyped => https://github.com/DefinitelyTyped/DefinitelyTyped
// DefinitelyTyped crypto 쓰기 => npm i -D @types/node

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;

  /* 블록생성 */
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {

    /* 블록 데이터 */
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {

    /* 데이터의 해쉬값 생성 */
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
