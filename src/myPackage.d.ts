// 정의 파일 생성후
// 타입을 정해줘야한다

interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
