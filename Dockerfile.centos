FROM centos:8
RUN yum install zsh
RUN yum install nano
# change shell to zsh
RUN chsh -s /bin/zsh root  
RUN yum install wget git curl
#turn of SSL temporarily
RUN git config --global http.sslVerify false

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh \
--no-check-cerificate \
-O - | zsh
# turn back SSL on
RUN git config --global http.sslVerify true

RUN ./fonts/install.sh  
RUN echo ZSH_THEME=\'agnoster\' >> ~/.zshrc

#use dnf as that is more straightforward
RUN yum install -y nodejs
# research do we have to create folder first
ENV DIRPATH /usr/website/
WORKDIR ${DIRPATH}
# is this use of work dir valid?
VOLUME /usr/projects/personal-site/site-app: ${DIRPATH}