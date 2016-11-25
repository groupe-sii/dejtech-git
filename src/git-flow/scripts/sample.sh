mkdir sample_dejtech
cd sample_dejtech
mkdir remote
cd remote
git init --bare
cd ..
mkdir local
cd local
git clone ../remote .
touch README.md
git add README.md
git commit -m "add README"
git push origin master
