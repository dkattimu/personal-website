FROM node:14-alpine
ENV WKDIR=/code
WORKDIR ${WKDIR}
RUN apk update && apk upgrade &&\
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.h\
    --no-check-certificate\
    -O - |zsh && \
# change ownership of ~ to set owner which should be say node