#!/bin/bash

echo 'Hello World!'
#fortune|cowsay -e ^^
#read -p "$USER, coloque algum texto > " text
read -p "Por acaso você escreveu: > $text < ?"
if [read==="yes"]||[read==="sim"]
 then
 echo "Great!"
 else
 echo "Oh, well..."
fi
