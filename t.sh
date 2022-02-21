#!/bin/bash

./bin/mp init --provider=gitlab --provider-url=https://git.esoft.tech -f ~/Downloads/repos.txt
./bin/mp clone
./bin/mp plan -b feature/NCRM-10523 -m "Install esoft eslint rules" -- node ~/projects/microplane/t.js
./bin/mp push -a @f.n.makhmudov