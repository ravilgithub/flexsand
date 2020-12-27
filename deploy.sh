#!/usr/bin/env sh

# Остановить скрипт при ошибках
set -e

# Сборка
npm run build

git add dist && git commit -m "deploy"

# Кидаем в онлайн ветку gh-pages
git subtree push --prefix dist origin gh-pages

# Переходим в католог сборки
# cd dist

# git init
# git add -A
# git commit -m "deploy"

# git push -f https://

# cd -
