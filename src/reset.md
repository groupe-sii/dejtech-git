### git reset HEAD^  <!-- .element: style="text-transform: none" -->

- HEAD^ le commit sur lequel on veut pointer
- ne crée pas de commit
- seulement pour des commits locaux
- --soft et --hard

note:
- on ne rentre pas dans le détail et la technique de la commande
- expliquer HEAD et HEAD^
- quand les modifs sont en local
- j'ai testé de le faire en remote -> expliquer ce qui c'est passé
- avec l'option --soft (par défaut) on garde no changement dans le workspace
- avec l'option --hard on détruit tout ce qui a été fait dans ce commit
