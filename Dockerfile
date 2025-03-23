# 1. Node.js 환경을 갖춘 이미지 사용
FROM node:18

# 2. 컨테이너 안에서 작업할 디렉토리 지정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 필요한 라이브러리 설치
RUN npm install

# 5. 나머지 코드 파일들 복사
COPY . .

# 6. 외부에서 접속할 포트 지정
EXPOSE 3000

# 7. 컨테이너 실행 시 실행할 명령
CMD ["node", "index.js"]
