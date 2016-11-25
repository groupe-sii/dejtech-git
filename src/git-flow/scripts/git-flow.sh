
cd sample_dejtech/local
### initialisation de git flow
git flow init

### creation d'une feature
git flow feature start US_001_Create_stack 

touch index.html
git add index.html
git commit -m "Add index.html"

mkdir js
touch js/app.js
git add js/*
git commit -m "Add js stack"

mkdir css
touch css/main.css
git add css/*
git commit -m "Add css stack"

git flow feature finish US_001_Create_stack

### 2 eme feature
git flow feature start US_002_Build_System

touch package.json
git add package.json
git commit -m "add node system"

touch gulpfile.js
git add gulpfile.js
git commit -m "add gulp build"

git flow feature finish US_002_Build_System


