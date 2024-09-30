codigo para criar app no pc
npx create-expo-app appPam --template blank (template blank serve para configurar um exemplo em codigo no app)

configurar git
git config --global  user.name

entrar na conta pelo terminal
git config --global  user.name "UfiliphuFelipe"
git config --global  user.email "felipeamoresano7@gmail.com"

enviar para o git
git add .
git commit -m "texto de exemplo"
git remote add origin https://github.com/UfiliphuFelipe/appPam.git
git branch -m main
git push -u origin main

salvar alteraçoes projeto
git add .
git commit -m "texto avisando a alteração"
git push

criar e alterar branch
git checkout -b testar

ver qual branch voce esta
git branch -a

alterar branch
git checkout (nome da branch)

mesclar alterações
git merge (nome da branch)


