<div align="center">
  <img src="https://github.com/guilhermeivo/nlw2-proffy/blob/master/.github/logo.svg" alt="Proffy" title="Proffy" />
</div>

# :scroll: Sumário

- [Tecnologias](#computer-tecnologias)
- [Como rodar o projeto](#construction_worker-como-rodar-o-projeto)
    - [Baixando o projeto](#computer-baixando-o-projeto)
    - [Configurando o projeto](#wrench-configurando-o-ambiente)
    - [Rodando o projeto](#computer-rodando-o-projeto)
        - [Web](#web)
        - [Server](#server)
        - [Mobile](#mobile)


# :computer: Tecnologias

Este projeto foi realizado usando as seguintes tecnologias:

<ul>
  <li><a href="https://nodejs.org/en/docs/">NodeJs</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://pt-br.reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
</ul>

# :construction_worker: Como rodar o projeto

### :computer: Baixando o projeto

```bash
# Clone o repositório em sua máquina
$ git clone https://github.com/guilhermeivo/nlw2-proffy.git
```

### :wrench: Configurando o ambiente

</br>

<details>
    <summary><strong>Windows</strong></summary>

</br>

##### Node e NPM
- Recomenda utilizar o PowerShell executado no mode administrador.
- Execute o comando:
    ```bash
    $ Get-ExecutionPolicy
    ```
    Caso ele retorne **Restricted**, execute o comando:
    ```bash
    $ Set-ExecutionPolicy RemoteSigned
    ```
    E escolha a opção **[A] Sim para Todos**.

- Alterada a permissão, basta instalar o **Chocolatey** com o comando:
    ```bash
    $ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
- Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:
    ```bash
    $ cinst nodejs-lts
    ```

##### Yarn

- Para instalar o Yarn 1 no Windows siga os seguintes passos, execute o comando no Powershell (como admin):

    ```bash
    $ cinst yarn
    ```

    E escolha a opção `[A]ll - yes to all`. 

##### Expo

- Com o Node e Yarn instalados, execute:

    ```bash
    $ yarn global add expo-cli
    ```

    Caso você prefira utilizar o npm, basta executar:

    ```bash
    npm install expo-cli --global
    ```

</details>

<details>
    <summary><strong>Linux</strong></summary>

</br>

##### Node e NPM

- Execute o seguinte comando para instalar o curl

    ```bash
    $ sudo apt install curl
    ```

- Com o **curl** instalado, execute o comando de instalação da versão LTS mais recente disponível:
    - Ubuntu

    ```bash
    $ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    ```

    Feche o terminal e abra novamente para as alterações fazerem efeito.


##### Yarn

- Para instalar o Yarn 1 no Linux vamos começar configurando o repositório do **Yarn** executando:

    ```bash
    $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    ```

- Instale utilizando o seguinte comando:

    ```bash
    $ sudo apt update && sudo apt install --no-install-recommends yarn
    ```

- Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell Zsh) a seguinte linha: 

    ```bash
    $ export PATH="$PATH:`yarn global bin`"
    ```

##### Expo

- Com o Node e Yarn instalados, execute:

    ```bash
    $ yarn global add expo-cli
    ```

    Caso você prefira utilizar o npm, basta executar:

    ```bash
    npm install expo-cli --global
    ```

</details>

### :computer: Rodando o projeto

#### Web

```bash
# Vá para a pasta da web do projeto
$ cd web/

# Instalar dependências
$ yarn install
# ou
$ npm install

# Executar aplicativo
$ yarn start
# ou
$ npm run start
```

Página web disponível em: http://localhost:3000/.

#### Server

```bash
# Vá para a pasta do servidor do projeto
$ cd server/

# Instalar dependências
$ yarn install 
# ou 
$ npm install

# Executar aplicativo
$ yarn start 
# ou 
$ npm run start

# Fazer migrations
$ yarn knex:migrate
```

API disponível para ser testado em http://localhost:3333/.

#### Mobile

Para executar o projeto no celular, você precisa de um celular com o aplicativo [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) instalado ou um emulador de android / ios.
<br />

```bash
# Vá para a pasta mobile do projeto
$ cd mobile/

# Instalar dependências
$ yarn install  
# ou 
$ npm install

# Executar aplicativo
$ yarn start
# ou 
$ npm run start
```
