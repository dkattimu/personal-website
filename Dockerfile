FROM node:14-alpine
RUN apk update && apk upgrade &&\
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.h\
    --no-check-certificate\
    -O - |zsh && \