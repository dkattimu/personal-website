FROM node:14-alpine
<<<<<<< HEAD
ENV WKDIR=/code
WORKDIR ${WKDIR}
RUN apk update && apk upgrade &&\
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.h\
    --no-check-certificate\
    -O - |zsh && \
# change ownership of ~ to set owner which should be say node
=======
RUN apk update && apk upgrade && \
    apk add zsh wget git tree

RUN git config --global http.sslVerify false &&\
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh \
    --no-check-certificate \
    -O - | zsh &&\
    git clone https://github.com/powerline/fonts.git --depth=1 &&\
    git config --global http.sslVerify true &&\
    ./fonts/install.sh &&\
    echo ZSH_THEME=\'robbyrussell\'>> ~/.zshrc

CMD ["zsh"]

