---
title: "Le noyau hexagonal, ou comment faire évoluer vos logiciels sans repartir de zéro"
subtitle: "Préserver le travail accompli quand les outils changent."
description: "Nous expliquons comment Opensya sépare les règles d’un service des outils qui les font fonctionner, pour que les équipes puissent les réutiliser et les faire évoluer."
author: "Mamadou DIA"
date: "26/11/2026"
category: "inside"
cover: https://i.pinimg.com/1200x/23/49/8c/23498c44d61d5959d302100fd191f5f9.jpg

seo:
  title: "Le noyau hexagonal | Opensya"
  description: "Découvrez comment le noyau hexagonal permet de reprendre les règles d’un service lorsque son interface ou ses outils changent."
---

Une organisation apprend en rendant un service. Au fil du temps, elle précise qui peut prendre une décision, comment traiter une situation particulière et ce qu’elle doit garantir aux personnes qui comptent sur elle. Une partie de cet apprentissage prend forme dans ses logiciels. Le jour où elle doit remplacer un outil, elle doit pouvoir emporter ce travail avec elle.

Cette possibilité se joue dès la conception. C’est pour la préserver que nous appliquons le principe du **noyau hexagonal** aux briques logicielles que nous construisons chez Opensya.

![A Cool Image](https://i.pinimg.com/1200x/23/49/8c/23498c44d61d5959d302100fd191f5f9.jpg)

## Donner aux règles du service leur propre place

Nous appelons *noyau* la partie d’une brique qui rassemble les règles dont elle a besoin pour remplir son rôle. Le mot *hexagonal* décrit la façon dont elle se relie au reste du logiciel. La brique indique ce qu’on peut lui demander et de quelles informations elle a besoin pour répondre. Chaque application peut alors s’y relier avec les outils qu’elle utilise déjà.

Dans un service de gestion des congés, par exemple, les jours sont décomptés une fois la demande approuvée. Un responsable peut donner son accord depuis son téléphone ou depuis le portail de l’entreprise. Les deux écrans transmettent la décision à la même brique, qui applique la règle. L’entreprise peut ainsi ouvrir un nouvel accès au service en reprenant le traitement qu’elle utilise déjà.

## Savoir ce que chaque changement demande

Si l’entreprise remplace son portail, l’équipe doit relier le nouvel outil à la brique et vérifier le parcours de bout en bout. Si l’entreprise décide que les congés longs exigent deux approbations, l’équipe modifie la règle dans la brique commune. Le portail et l’application mobile peuvent alors s’appuyer sur le même état de la demande pour indiquer aux salariés où elle en est.

Un changement peut aussi demander de transférer des données ou d’accompagner les utilisateurs. Quand les règles et les outils ont chacun leur place, l’équipe peut évaluer plus tôt ce qu’elle pourra reprendre, ce qu’elle devra adapter et le soin qu’exigera la transition.

## Permettre à d’autres de reprendre le travail

Nous concevons chaque brique pour qu’une autre équipe puisse envisager de l’utiliser dans un projet qui lui est propre. Pour décider si elle lui convient, cette équipe doit pouvoir comprendre les règles qu’elle reprend, les outils qu’elle devra relier à la brique et les adaptations que ses propres besoins demanderont. C’est à nous de rendre ces éléments lisibles dans le code et dans la documentation.

::callout{color="neutral"}
**Le travail accompli dans un logiciel doit pouvoir servir aux décisions qui viennent après lui. C’est cette liberté que nous voulons inscrire dans la manière dont nos briques sont construites.**
::
