# Charte BrotherCos

Tout part du portrait de Constantin en pixel art : une grille sombre, un visage chaud sur une chemise indigo, une pile de blocs colorés en bas. Charte complète en ligne : [claude.ai/artifact/YJ3gGMkf9m95d1xS6YTgoJ](https://claude.ai/artifact/YJ3gGMkf9m95d1xS6YTgoJ) (privée).

## Fichiers

| Fichier                               | Usage                                         |
| ------------------------------------- | --------------------------------------------- |
| `tokens.css`                          | couleurs, polices, grille : à importer partout |
| `logo/brothercos-logo.svg`            | logo principal, sur fond nuit                 |
| `logo/brothercos-logo-transparent.svg`| logo sans fond, à poser sur nuit ou crème     |
| `logo/brothercos-monogramme.svg`      | avatar, favicon, réseaux                      |
| `generate.mjs`                        | source des logos : `node design/generate.mjs` |

Les logos se modifient dans `generate.mjs`, jamais à la main.

## Logo

- Lettres de 5 × 7 blocs, un bloc d'espace entre les lettres. Chaque bloc a un reflet en haut et une ombre à droite.
- « BROTHER » suit le dégradé du visage, ligne par ligne : crème, ambre clair, ambre, orange, rouille, prune, violet.
- « COS » prend les couleurs des blocs : C cyan, O vert, S rose.
- Zone de protection : deux blocs tout autour. Agrandir par multiples entiers, sans lisser.
- On écrit BrotherCos, en un mot. Jamais « Brother Cos », jamais « BROTHER » seul.

## Couleurs

| Jeton      | Valeur    | Usage                      |
| ---------- | --------- | -------------------------- |
| `nuit`     | `#171614` | fond de tout               |
| `encre`    | `#202233` | surfaces, boutons          |
| `violet`   | `#504580` | ombres, bordures actives   |
| `prune`    | `#632a6a` | transition chaud-froid     |
| `rouille`  | `#be5737` | accents chauds             |
| `ambre`    | `#e2a034` | couleur signature          |
| `creme`    | `#f3e9d2` | lumière, texte clair       |
| `cyan`     | `#2fb8e8` | bloc C, liens              |
| `vert`     | `#6cc644` | bloc O                     |
| `rose`     | `#e0459b` | bloc S                     |

Le portrait d'abord, les blocs en accent. Le site est sombre uniquement.

## Typographie

- Titres : Archivo étendu (`font-stretch: 112%` et plus), gras.
- Étiquettes courtes : Silkscreen, en capitales espacées. Le pixel reste rare : logo et étiquettes.
- Texte : Archivo. Code et chiffres : JetBrains Mono.

## Ton

Chaleureux, direct, en « on » : un ami qui montre son jeu. Signature : « Des jeux qui s'emboîtent, bloc par bloc. »

Les jeux gardent leur propre direction artistique ; BrotherCos signe en petit.
