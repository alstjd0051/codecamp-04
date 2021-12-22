> # Doker
>
> ![](https://images.velog.io/images/alstjd0051/post/b48c3f0a-23ea-4df6-8e3f-8c8e7e3b3330/image.png)
>
> - 부팅 등 운영체제의 핵심 기능(커널)은 공유하는 가상머신
> - 이전에는 운영체제에 따라 프로그램의 작동이 안됐었는데 작동을 완료시켜주는 Doker가 탄생되었다.
> - WSL2(window)
>
> ## 장점
>
> - 1. 가벼운 가상 컴퓨터
> - 2. 개발/배포환경 통일
> - 3. 프로그램 미리설치

# [dockerhub](https://hub.docker.com/)

> ### 새로 알게된 키워드
>
> 포그라운드 - 서버를 다운시킬때 쓰는 단어(ctrl + c)
> `docker --version` (버전알아보기)
> `docker-compose --version` ()
> `docker-search <이미지명>`

```dockerfile
FROM node:16               # node의 버전을 맞춘다

WORKDIR /class_build/     # cd를 구워주는것처럼 docker를 build해서 생성해준다.
COPY . /class_build/      # class_build폴더를 만들어준후 dockerfile이 있는 주위의 파일을 복사한다.

RUN yarn install        # package.json안에있는 모듈을 다운받는다.
RUN yarn build:ssr      # build해준다.

CMD yarn start          # 실행을해준다.

```

`docker-compose build` = 도커를 빌드해준다.(Dockerfile안에 있는 명령어들을 실행시켜준다.)
`docker-compose up` = 도커를 서버를 실행시켜준다.
`docker ps` = 도커 프로세스
`docker exec -it <docker_container_id> /bin/bash` = 도커 안에 있는 컨테이너 bash실행 // 상황에따라 bin경로를 입력안해줘도 된다.

```dockerfile
# 수정후 재사용(패키지,파일이 추가되었다면)할수있는 코드
FROM node:16

WORKDIR /class_build/
COPY ./package.json/ /class_build/
COPY ./yarnlock /class_build/
RUN yarn install

COPY . /class_build/
RUN yarn build:ssr

CMD yarn start

```

`docker-compose up -D` 도커를 백그라운드에서 사용
