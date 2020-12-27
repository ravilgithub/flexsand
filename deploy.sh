#!/usr/bin/env sh

# Остановить скрипт при ошибках
set -e

# Сборка
npm run build

# Переходим в католог сборки
cd dist

# git init
# git add -A
# git commit -m "deploy"

# git push -f https://

cd -
