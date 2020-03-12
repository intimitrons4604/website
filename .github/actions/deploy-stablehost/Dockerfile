FROM ubuntu:18.04

RUN apt-get update && \
  apt-get install -y \
    git \
    openssh-client && \
  rm -rf /var/lib/apt/lists/*

COPY scripts /deploy-stablehost/scripts

ENTRYPOINT [ "/deploy-stablehost/scripts/deploy.sh" ]
